import { NextResponse } from "next/server";

const AEMET_BASE_URL = "https://opendata.aemet.es/opendata/api";
const VALENCIA_IDEMA = "8416Y"; // Valencia Viveros

export async function GET() {
  const apiKey = process.env.AEMET_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "AEMET API key not configured" },
      { status: 500 }
    );
  }

  try {
    // Fetch with timeout (30 seconds)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const metaRes = await fetch(
      `${AEMET_BASE_URL}/observacion/convencional/datos/estacion/${VALENCIA_IDEMA}`,
      {
        headers: {
          'accept': 'application/json',
          'api_key': apiKey.replace(/"/g, '')
        },
        signal: controller.signal,
        cache: 'no-store'
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

    // Fetch actual data with timeout
    const dataController = new AbortController();
    const dataTimeoutId = setTimeout(() => dataController.abort(), 30000);

    const dataRes = await fetch(meta.datos, {
      signal: dataController.signal
    });

    clearTimeout(dataTimeoutId);

    if (!dataRes.ok) {
      throw new Error(`AEMET data fetch returned status ${dataRes.status}`);
    }

    const data = await dataRes.json();
    const [station] = data;

    interface Station {
      prec?: number;
      inso?: number;
      hr?: number;
      ta?: number;
      pres?: number;
      vv?: number;
    }

    const getCondition = (st: Station): string => {
      const rain = st.prec ?? 0;
      const sun = st.inso ?? 0;
      const humidity = st.hr ?? 0;

      if (rain > 0) return "Rainy";
      if (sun > 50 && humidity < 70) return "Sunny";
      if (humidity > 80 && sun < 20) return "Cloudy";
      return "Partly Cloudy";
    };

    return NextResponse.json({
      city: "Valencia",
      temperature: station.ta,
      updatedAt: station.fint,
      humidity: station.hr,
      pressure: station.pres,
      windSpeed: station.vv,
      condition: getCondition(station)
    });
  } catch (error) {
    console.error("AEMET fetch error:", error);

    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: "AEMET API request timed out. The server may be experiencing issues." },
        { status: 504 }
      );
    }

    return NextResponse.json(
      {
        error: "Failed to fetch Valencia weather",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
