// app/api/weather/route.ts
import { NextResponse } from "next/server";

const AEMET_BASE_URL = "https://opendata.aemet.es/opendata/api";

export async function GET() {
  const apiKey = process.env.AEMET_API_KEY;
  const endpoint = `${AEMET_BASE_URL}/observacion/convencional/todas?api_key=${apiKey}`;

  try {
    // Step 1: Get the “datos” URL
    const res = await fetch(endpoint);
    const meta = await res.json();

    // Step 2: Fetch actual data
    const dataRes = await fetch(meta.datos);
    const weatherData = await dataRes.json();

    // Example: Filter for Valencia station
    interface Station {
      nombre?: string;
      [key: string]: unknown;
    }
    const valenciaData = (weatherData as Station[]).find(
      (station) => station.nombre?.toLowerCase().includes("valencia")
    );

    return NextResponse.json(valenciaData || { message: "No data found" });
  } catch (error) {
    console.error("AEMET fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch weather" }, { status: 500 });
  }
}
