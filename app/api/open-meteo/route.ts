import { NextResponse } from "next/server";

const OPEN_METEO_BASE_URL = "https://api.open-meteo.com/v1/forecast";

const CITIES = {
  tunis: { lat: 36.8065, lon: 10.1815, name: "Tunis" },
  sfax: { lat: 34.7406, lon: 10.7603, name: "Sfax" },
  sousse: { lat: 35.8256, lon: 10.6369, name: "Sousse" },
} as const;

type CityParam = keyof typeof CITIES;

interface OpenMeteoResponse {
  current_weather: {
    temperature: number;
    weathercode: number;
    windspeed: number;
    time: string;
  };
}

// Map WMO weather codes to readable conditions
const getCondition = (code: number): string => {
  const conditions: { [key: number]: string } = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast Clouds",
    45: "Foggy",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return conditions[code] || "Unknown";
};

async function fetchCityWeather(city: typeof CITIES[CityParam]) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const url = `${OPEN_METEO_BASE_URL}?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
      },
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Open-Meteo API returned status ${response.status}`);
    }

    const data: OpenMeteoResponse = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Check if any city query parameter exists
  const cityParam = Object.keys(CITIES).find((city) =>
    searchParams.has(city)
  );

  if (!cityParam) {
    return NextResponse.json(
      { error: "City not supported" },
      { status: 400 }
    );
  }

  const city = CITIES[cityParam as CityParam];

  try {
    const weatherData = await fetchCityWeather(city);

    const { temperature, weathercode, windspeed, time } = weatherData.current_weather;

    if (temperature === undefined || temperature === null) {
      throw new Error(`${city.name} returned no temperature data`);
    }

    return NextResponse.json({
      city: city.name,
      temperature: Math.round(temperature),
      condition: getCondition(weathercode),
      windspeed: Math.round(windspeed),
      updatedAt: time,
    });
  } catch (error) {
    console.error(`Open-Meteo fetch error for ${city.name}:`, error);

    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json(
        { error: "Open-Meteo API request timed out" },
        { status: 504 }
      );
    }

    return NextResponse.json(
      { error: `Failed to fetch weather for ${city.name}` },
      { status: 500 }
    );
  }
}
