"use client";

import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>
      ),
      title: "Interactive Maps",
      description: "Explore real-time weather conditions with our dynamic, user-friendly maps. Zoom, pan, and track storms as they happen."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      ),
      title: "RealFeel® Temperature",
      description: "Know how the weather actually feels, not just the temperature. Our advanced algorithm factors in humidity, wind, and sun intensity."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
      ),
      title: "Severe Weather Alerts",
      description: "Stay safe with immediate notifications for severe weather, storms, and extreme conditions in your area."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
      ),
      title: "Hourly & Daily Forecasts",
      description: "Plan ahead with precise hour-by-hour and 10-day forecasts. From your morning commute to weekend plans, we've got you covered."
    }
  ]
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:items-center gap-8 mb-16">
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black leading-tight drop-shadow-2xl">
                WHAT&#39;S <br />
                THE <br />
                WEATHER?
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-lg mx-auto md:mx-0 md:ml-2">
                Real-time forecasts at your fingertips
              </p>
              <Link href="/maps">
                <Button className="text-black rounded-full text-xl md:text-2xl mt-6 md:ml-2 py-7 px-10 font-bold bg-white/20 backdrop-blur-md border-2 border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-2xl">
                  Find out more →
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl"></div>
              <Image
                src="/Hero.svg"
                width={500}
                height={500}
                alt="Hero illustration"
                className="relative animate-float drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Carousel Section */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-8 drop-shadow-lg">
              Explore Weather Worldwide
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-2xl border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-2/3">
                  <Carousel />
                </div>
                <div className="w-full md:w-1/3">
                  <p className="text-black font-semibold text-lg md:text-xl leading-relaxed">
                    Experience our comprehensive weather platform, featuring
                    interactive real-time maps, precise local forecasts with
                    RealFeel® technology, instant severe weather alerts -
                    everything you need to stay informed about weather
                    conditions anywhere in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Cards */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12 drop-shadow-lg">
              Everything You Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl 
                    border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="bg-white/20 rounded-full p-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-black">
                        {feature.title}
                      </h3>
                      <p className="text-black-50 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
