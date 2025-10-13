"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type WeatherData = {
  city: string;
  temperature?: number;
  condition: string;
  error?: boolean;
};

type CitiesWeather = {
  berlin: WeatherData;
  munich: WeatherData;
  hamburg: WeatherData;
};

export default function GermanyPage() {
  const [data, setData] = useState<CitiesWeather>({
    berlin: { city: "Berlin", condition: "Loading...", error: false },
    munich: { city: "Munich", condition: "Loading...", error: false },
    hamburg: { city: "Hamburg", condition: "Loading...", error: false },
  });
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    const cities = ["berlin", "munich", "hamburg"];

    const fetchPromises = cities.map((city) =>
      fetch(`/api/germany?${city}=`)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((cityData) => {
          if (cityData.error) throw new Error(cityData.error);
          setData((prev) => ({
            ...prev,
            [city]: { ...cityData, error: false },
          }));
        })
        .catch((err) => {
          console.error(`Fetch error for ${city}:`, err);
          // Set error state for this city
          setData((prev) => ({
            ...prev,
            [city]: {
              city: city.charAt(0).toUpperCase() + city.slice(1),
              condition: "Data unavailable",
              error: true,
            },
          }));
        })
    );

    Promise.all(fetchPromises).finally(() => setLoading(false));
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
          <p className="mt-4 font-semibold text-4xl">Loading Weather...</p>
        </div>
      </div>
    );

  return (
    <div className="container flex">
    <Button
          className="text-black rounded-full 
        text-xl md:text-2xl mt-6 md:ml-10 py-8 px-10 
        font-bold bg-white/20 backdrop-blur-md 
        border-2 border-white/40 hover:bg-white/30 
        hover:scale-105 transition-all duration-300 
        shadow-2xl"
          onClick={() => router.push("/locations")}
        >
          Go back
        </Button>
    <div className="container flex flex-col gap-10 justify-center items-center mx-auto relative z-10 m-20">
      <div
        className={`flex justify-center items-center bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-lg h-70 w-180 gap-20 ${
          data.berlin.error ? "opacity-50" : ""
        }`}
      >
        <div className="space-y-2 text-lg">
          <h2 className="text-4xl font-semibold mb-4">{data.berlin.city}</h2>
          <h3 className="font-extrabold">Temperature:</h3>
          <h4 className="font-sans ml-10">
            {data.berlin.error
              ? "N/A"
              : `${data.berlin.temperature ?? "N/A"}°C`}
          </h4>
          <h3 className="font-extrabold">Conditions:</h3>
          <h4 className="font-sans ml-1">{data.berlin.condition}</h4>
        </div>
        <div className="relative">
          <Image
            src="/locations/berlin.png"
            width={200}
            height={200}
            alt="berlin"
            className="relative drop-shadow-2xl"
          />
        </div>
      </div>

      <div
        className={`flex justify-center items-center bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-lg h-70 w-180 gap-20 ${
          data.munich.error ? "opacity-50" : ""
        }`}
      >
        <div className="space-y-2 text-lg">
          <h2 className="text-4xl font-semibold mb-4">{data.munich.city}</h2>
          <h3 className="font-extrabold">Temperature:</h3>
          <h4 className="font-sans ml-10">
            {data.munich.error
              ? "N/A"
              : `${data.munich.temperature ?? "N/A"}°C`}
          </h4>
          <h3 className="font-extrabold">Conditions:</h3>
          <h4 className="font-sans ml-1">{data.munich.condition}</h4>
        </div>
        <div className="relative">
          <Image
            src="/locations/munich.png"
            width={150}
            height={150}
            alt="munich"
            className="relative drop-shadow-2xl m-10"
          />
        </div>
      </div>

      <div
        className={`flex justify-center items-center bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-lg h-70 w-180 gap-20 ${
          data.hamburg.error ? "opacity-50" : ""
        }`}
      >
        <div className="space-y-2 text-lg">
          <h2 className="text-4xl font-semibold mb-4">{data.hamburg.city}</h2>
          <h3 className="font-extrabold">Temperature:</h3>
          <h4 className="font-sans ml-10">
            {data.hamburg.error
              ? "N/A"
              : `${data.hamburg.temperature ?? "N/A"}°C`}
          </h4>
          <h3 className="font-extrabold">Conditions:</h3>
          <h4 className="font-sans ml-1">{data.hamburg.condition}</h4>
        </div>
        <div className="relative">
          <Image
            src="/locations/hamburg.png"
            width={200}
            height={200}
            alt="hamburg"
            className="relative drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
