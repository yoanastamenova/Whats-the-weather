"use client";

import Link from "next/link";

export default function LocationsPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-12 relative z-10 min-h-[60vh]">
      <h2 className="text-4xl md:text-5xl font-semibold text-black text-center mb-8 drop-shadow-lg">
        Choose a country
      </h2>
      <div className="flex justify-center gap-6">
        <Link
          href="/locations/spain"
          className="text-black rounded-full 
        text-xl md:text-2xl mt-6 md:ml-2 py-7 px-10 
        font-bold bg-white/20 backdrop-blur-md border-2
         border-white/40 hover:bg-white/30 
         hover:scale-105 transition-all 
         duration-300 shadow-2xl"
        >
          Spain
        </Link>
        <Link
          href="/locations/germany"
          className="text-black rounded-full 
        text-xl md:text-2xl mt-6 md:ml-2 py-7 px-10 
        font-bold bg-white/20 backdrop-blur-md 
        border-2 border-white/40 hover:bg-white/30 
        hover:scale-105 transition-all duration-300 
        shadow-2xl"
        >
          Germany
        </Link>
        <Link
          href="/locations/tunis"
          className="text-black rounded-full
         text-xl md:text-2xl mt-6 md:ml-2 py-7 px-10 
         font-bold bg-white/20 backdrop-blur-md border-2
          border-white/40 hover:bg-white/30 hover:scale-105 
          transition-all duration-300 shadow-2xl"
        >
          Tunis
        </Link>
      </div>
    </div>
  );
}
