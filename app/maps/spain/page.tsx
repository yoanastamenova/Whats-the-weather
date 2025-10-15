"use client"

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

interface City {
  name: string;
  lat: number;
  lon: number;
}

interface WeatherResponse {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
  };
}

export default function SpainWeatherMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const cities: City[] = [
    { name: 'Madrid', lat: 40.4168, lon: -3.7038 },
    { name: 'Barcelona', lat: 41.3851, lon: 2.1734 },
    { name: 'Valencia', lat: 39.4699, lon: -0.3763 },
    { name: 'Sevilla', lat: 37.3891, lon: -5.9845 },
    { name: 'Bilbao', lat: 43.2630, lon: -2.9350 },
    { name: 'Málaga', lat: 36.7213, lon: -4.4214 },
    { name: 'Zaragoza', lat: 41.6488, lon: -0.8891 }
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([40.4168, -3.7038], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);
    }

    const map = mapInstanceRef.current;

    const getWeatherEmoji = (code: number): string => {
      if (code === 0) return '☀️';
      if (code <= 3) return '⛅';
      if (code <= 67) return '🌧️';
      if (code <= 77) return '🌨️';
      if (code <= 99) return '⛈️';
      return '🌡️';
    };

    const fetchWeatherData = async (): Promise<void> => {
      for (const city of cities) {
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Europe/Madrid`
          );
          const data: WeatherResponse = await response.json();

          const icon = L.divIcon({
            className: 'custom-weather-marker',
            html: `
              <div style="
                background: linear-gradient(135deg, #5329ae 0%, #ee5a6f 100%);
                color: white;
                padding: 12px;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.3);
                text-align: center;
                font-family: system-ui;
                min-width: 10rem;
              ">
                <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">
                  ${city.name}
                </div>
                <div style="font-size: 24px; margin: 4px 0;">
                  ${getWeatherEmoji(data.current.weather_code)}
                </div>
                <div style="font-size: 20px; font-weight: bold;">
                  ${Math.round(data.current.temperature_2m)}°C
                </div>
                <div style="font-size: 11px; opacity: 0.9; margin-top: 4px;">
                  💧 ${data.current.relative_humidity_2m}% | 💨 ${Math.round(data.current.wind_speed_10m)} km/h
                </div>
              </div>
            `,
            iconSize: [160, 120],
            iconAnchor: [80, 120]
          });

          L.marker([city.lat, city.lon], { icon })
            .addTo(map)
            .bindPopup(`
              <strong>${city.name}</strong><br/>
              Temperature: ${data.current.temperature_2m}°C<br/>
              Humidity: ${data.current.relative_humidity_2m}%<br/>
              Wind: ${data.current.wind_speed_10m} km/h
            `);
        } catch (error) {
          console.error(`Error fetching weather for ${city.name}:`, error);
        }
      }
    };

    fetchWeatherData();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, );

  return (
    <div className="w-full px-30">
      <h2 className="text-2xl font-bold mb-4 text-center">Spain Weather Map</h2>
      <div ref={mapRef} className="w-full h-[600px] rounded-lg shadow-lg" />
      <p className="text-sm text-gray-600 mt-2 text-center">
        Weather data from Open-Meteo API | Map from OpenStreetMap
      </p>
    </div>
  );
}