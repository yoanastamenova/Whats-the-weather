import { NextResponse } from "next/server";

const AEMET_BASE_URL = "https://opendata.aemet.es/opendata/api";
const VALENCIA_IDEMA = "8416Y"; // Valencia Viveros

export async function GET() {
  const apiKey = process.env.AEMET_API_KEY;

  try {
    const metaRes = await fetch(
      `${AEMET_BASE_URL}/observacion/convencional/datos/estacion/${VALENCIA_IDEMA}`,
      {
        headers: {
          'accept': 'application/json',
          'api_key': apiKey!.replace(/"/g, '')
        }
      }
    );

    const meta = await metaRes.json();
    const dataRes = await fetch(meta.datos);
    const [station] = await dataRes.json();

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
    return NextResponse.json(
      { error: "Failed to fetch Valencia weather" },
      { status: 500 }
    );
  }
}
