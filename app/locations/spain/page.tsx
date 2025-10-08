"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type WeatherData = {
  city: string;
  temperature: number;
  condition: string;
};

type CitiesWeather = {
  valencia: WeatherData | null;
  madrid: WeatherData  | null;
  barcelona: WeatherData | null;
}

export default function SpainPage() {
  const [data, setData] = useState<CitiesWeather>({
    valencia: null,
    madrid: null,
    barcelona: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const cities = ['valencia', 'madrid', 'barcelona'];
    const failedCities: string[] = [];

    const fetchPromises = cities.map(city =>
      fetch(`/api/aemet?${city}=`)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((cityData) => {
          if (cityData.error) throw new Error(cityData.error);
          setData(prev => ({
            ...prev,
            [city]: cityData
          }));
        })
        .catch((err) => {
          console.error(`Fetch error for ${city}:`, err);
          failedCities.push(city);
        })
    );

    Promise.all(fetchPromises)
      .finally(() => {
        // Only show error if ALL cities failed
        if (failedCities.length === cities.length) {
          setError("Unable to load weather data. The AEMET service may be experiencing issues.");
        }
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="relative mt-20 items-center text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-18 h-18 text-black-400 animate-spin dark:text-white-600 fill-pink-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <p className="mt-4 font-semibold text-4xl"> Loading Weather...</p>
        </div>
      </div>
    );

if (error)
    return (
        <div className="relative mt-20 flex justify-center text-balance">
            <div className="container flex justify-center">
                <div
                    className="text-center p-6 mb-4 font-medium
                    text-red-800 border border-red-300 rounded-lg bg-red-50
                    dark:bg-gray-800 dark:text-red-400 dark:border-red-800 w-96 shadow-lg"
                    role="alert">
                    <div className="flex items-center justify-center mb-2">
                        <svg
                            className="shrink-0 inline w-5 h-5 mr-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 
                              10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 
                              1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                              />
                        </svg>
                        <p className="font-bold text-xl">Error</p>
                    </div>
                    <p className="text-base">{error}</p>
                    <p className="text-sm mt-2 text-red-600">The AEMET weather service may be temporarily unavailable. Please try again later.</p>
                </div>
            </div>
        </div>
    );

  if (!data) return <p> No data available</p>;

  return (
    <div className="container flex flex-col gap-10 justify-center items-center mx-auto relative z-10 m-20">
      {data.valencia && (
        <div className="flex justify-center items-center bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-lg h-70 w-180 gap-20">
          <div className="space-y-2 text-lg">
            <h2 className="text-4xl font-semibold mb-4">{data.valencia.city}</h2>
            <h3 className="font-extrabold">Temperature:</h3>
            <h4 className="font-sans ml-10">{data.valencia.temperature ?? 'N/A'}°C</h4>
            <h3 className="font-extrabold">Conditions:</h3>
            <h4 className="font-sans ml-1">{data.valencia.condition}</h4>
          </div>
          <div className="relative">
            <Image src="/orange.png" width={200} height={200} alt="orange" className="relative drop-shadow-2xl"/>
          </div>
        </div>
      )}

      {data.madrid && (
        <div className="flex justify-center items-center bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-lg h-70 w-180 gap-20">
          <div className="space-y-2 text-lg">
            <h2 className="text-4xl font-semibold mb-4">{data.madrid.city}</h2>
            <h3 className="font-extrabold">Temperature:</h3>
            <h4 className="font-sans ml-10">{data.madrid.temperature ?? 'N/A'}°C</h4>
            <h3 className="font-extrabold">Conditions:</h3>
            <h4 className="font-sans ml-1">{data.madrid.condition}</h4>
          </div>
          <div className="relative">
            <Image src="/madrid.svg" width={200} height={200} alt="madrid" className="relative drop-shadow-2xl"/>
          </div>
        </div>
      )}

      {data.barcelona && (
        <div className="flex justify-center items-center bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-lg h-70 w-180 gap-20">
          <div className="space-y-2 text-lg">
            <h2 className="text-4xl font-semibold mb-4">{data.barcelona.city}</h2>
            <h3 className="font-extrabold">Temperature:</h3>
            <h4 className="font-sans ml-10">{data.barcelona.temperature ?? 'N/A'}°C</h4>
            <h3 className="font-extrabold">Conditions:</h3>
            <h4 className="font-sans ml-1">{data.barcelona.condition}</h4>
          </div>
          <div className="relative">
            <Image src="/bcn.png" width={200} height={200} alt="barcelona" className="relative drop-shadow-2xl"/>
          </div>
        </div>
      )}
    </div>
  );
}
