import { NextResponse } from "next/server";

const AEMET_BASE_URL = "https://opendata.aemet.es/opendata/api";

interface Station {
  prec?: number;
  inso?: number;
  hr?: number;
  ta?: number;
  pres?: number;
  vv?: number;
  fint?: string;
}

const STATIONS = {
  valencia: { id: "8416Y", name: "Valencia" },
  madrid: { id: "3195", name: "Madrid" }, // Madrid Retiro
  barcelona: { id: "0076", name: "Barcelona" }, // Barcelona Aeropuerto
} as const;

type CityParam = keyof typeof STATIONS;

const getCondition = (st: Station): string => {
  const rain = st.prec ?? 0;
  const sun = st.inso ?? 0;
  const humidity = st.hr ?? 0;

  if (rain > 0) return "Rainy";
  if (sun > 50 && humidity < 70) return "Sunny";
  if (humidity > 80 && sun < 20) return "Cloudy";
  return "Partly Cloudy";
};

async function fetchStationData(stationId: string, apiKey: string) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const metaRes = await fetch(
      `${AEMET_BASE_URL}/observacion/convencional/datos/estacion/${stationId}`,
      {
        headers: {
          accept: "application/json",
          api_key: apiKey.replace(/"/g, ""),
        },
        signal: controller.signal,
        cache: "no-store",
      }
    );

    clearTimeout(timeoutId);

    if (!metaRes.ok) {
      throw new Error(`AEMET API returned status ${metaRes.status}`);
    }

    const meta = await metaRes.json();
    if (!meta.datos) {
      throw new Error("AEMET API did not return data URL");
    }

    const dataController = new AbortController();
    const dataTimeoutId = setTimeout(() => dataController.abort(), 30000);

    const dataRes = await fetch(meta.datos, {
      signal: dataController.signal,
    });

    clearTimeout(dataTimeoutId);

    if (!dataRes.ok) {
      throw new Error(`AEMET data fetch returned status ${dataRes.status}`);
    }

    const data = await dataRes.json();
    return data[0];
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export async function GET(request: Request) {
  const apiKey = process.env.AEMET_API_KEY;
  const { searchParams } = new URL(request.url);
  
  // Check if any city query parameter exists
  const cityParam = Object.keys(STATIONS).find(city => searchParams.has(city));

  if (!apiKey) {
    return NextResponse.json(
      { error: "AEMET API key not configured" },
      { status: 500 }
    );
  }

  if (!cityParam) {
    return NextResponse.json(
      { error: "City not supported" },
      { status: 400 }
    );
  }

  const station = STATIONS[cityParam as CityParam];


  try {
    const stationData = await fetchStationData(station.id, apiKey);

    // Validate that we have essential data
    if (stationData.ta === undefined || stationData.ta === null) {
      throw new Error(`Station ${station.name} returned no temperature data`);
    }

    return NextResponse.json({
      city: station.name,
      temperature: stationData.ta,
      updatedAt: stationData.fint,
      humidity: stationData.hr,
      pressure: stationData.pres,
      windSpeed: stationData.vv,
      condition: getCondition(stationData),
    });
  } catch (error) {
    console.error(`AEMET fetch error for ${station.name}:`, error);
    
    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json(
        { error: "AEMET API request timed out" },
        { status: 504 }
      );
    }
    
    return NextResponse.json(
      { error: `Failed to fetch weather for ${station.name}` },
      { status: 500 }
    );
  }
}