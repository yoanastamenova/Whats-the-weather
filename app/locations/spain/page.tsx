"use client";
import { useEffect, useState } from "react";

type WeatherData = {
  city: string;
  temperature: number;
  condition: string;
};

export default function SpainPage() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`/api/aemet?city=Valencia`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setData(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className="p-6 bg-sky-100 rounded-xl shadow-md text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">Weather in {data.city}</h2>

      <div className="space-y-2 text-lg">
        <p>
          <strong>Temperature:</strong> {data.temperature}°C
        </p>
        <p>
          <strong>Conditions:</strong> {data.condition}
        </p>
      </div>
    </div>
  );
}
