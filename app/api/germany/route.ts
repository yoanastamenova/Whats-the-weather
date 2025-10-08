import { NextResponse } from "next/server";

const DWD_BASE_URL = "https://dwd.api.proxy.bund.dev/v30";

interface DWDStationData {
  forecast1: {
    temperature: number[];
    humidity: number[];
    windSpeed: string | null;
    precipitationTotal: number[];
    icon: number[];
    start: number;
    timeStep: number;
  };
  days: Array<{
    temperatureMin: number;
    temperatureMax: number;
    precipitation: number;
    windSpeed: number;
    sunshine: number;
  }>;
}

const STATIONS = {
  berlin: { id: "10384", name: "Berlin" }, // Berlin-Tempelhof
  munich: { id: "10865", name: "Munich" },
  hamburg: { id: "10147", name: "Hamburg" },
} as const;

type CityParam = keyof typeof STATIONS;

// Convert temperature from tenths of degrees to degrees
const convertTemp = (temp: number): number => {
  if (temp === 32767) return 0; // Invalid value
  return Math.round(temp / 10);
};

// Get current weather condition from icon code
const getCondition = (icon: number): string => {
  const conditions: { [key: number]: string } = {
    1: "Sunny",
    2: "Partly Cloudy",
    3: "Cloudy",
    4: "Overcast",
    5: "Foggy",
    6: "Cloudy with rain",
    7: "Light rain",
    8: "Rain",
    9: "Heavy rain",
    10: "Cloudy with snow",
    11: "Light snow",
    12: "Snow",
    13: "Heavy snow",
    14: "Thunderstorm",
    32767: "Unknown",
  };
  return conditions[icon] || "Unknown";
};

async function fetchStationData(stationId: string) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch(
      `${DWD_BASE_URL}/stationOverviewExtended?stationIds=${stationId}`,
      {
        headers: {
          accept: "application/json",
        },
        signal: controller.signal,
        cache: "no-store",
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`DWD API returned status ${response.status}`);
    }

    const data = await response.json();
    return data[stationId] as DWDStationData;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Check if any city query parameter exists
  const cityParam = Object.keys(STATIONS).find((city) =>
    searchParams.has(city)
  );

  if (!cityParam) {
    return NextResponse.json(
      { error: "City not supported" },
      { status: 400 }
    );
  }

  const station = STATIONS[cityParam as CityParam];

  try {
    const stationData = await fetchStationData(station.id);

    // Get current temperature (first value in the array)
    const currentTemp = stationData.forecast1.temperature[0];
    const currentIcon = stationData.forecast1.icon[0];
    const currentHumidity = stationData.forecast1.humidity[0];

    if (
      currentTemp === undefined ||
      currentTemp === null ||
      currentTemp === 32767
    ) {
      throw new Error(`Station ${station.name} returned no temperature data`);
    }

    return NextResponse.json({
      city: station.name,
      temperature: convertTemp(currentTemp),
      humidity: currentHumidity ? Math.round(currentHumidity / 10) : undefined,
      condition: getCondition(currentIcon),
      updatedAt: new Date(stationData.forecast1.start).toISOString(),
    });
  } catch (error) {
    console.error(`DWD fetch error for ${station.name}:`, error);

    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json(
        { error: "DWD API request timed out" },
        { status: 504 }
      );
    }

    return NextResponse.json(
      { error: `Failed to fetch weather for ${station.name}` },
      { status: 500 }
    );
  }
}
