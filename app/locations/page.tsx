"use client";
import { useEffect, useState } from "react";

type WeatherData = {
  city: string;
  temperature: number;
  condition: string;
};

export default function LocationsPage() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [source, setSource] = useState("aemet");

  useEffect(() => {
    fetch(`/api/${source}?city=Valencia`)
      .then(res => res.json())
      .then(setData);
  }, [source]);

  if (!data) return <p>Loading weather...</p>;

  return (
    <div className="p-6 bg-sky-100 rounded-xl shadow-md text-gray-800">
      <h2 className="text-2xl font-semibold mb-2">
        Tiempo en {data.city}
      </h2>
      <p>Temperatura: {data.temperature} °C</p>
      <p>Condición: {data.condition}</p>

      <div className="mt-4 flex gap-2 text-2xl font-black">
        <button onClick={() => setSource("aemet")}>AEMET</button>
        <button onClick={() => setSource("openweather")}>OpenWeather</button>
      </div>
    </div>
  );
}
