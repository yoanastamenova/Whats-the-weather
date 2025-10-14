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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
          />
        </svg>
      ),
      title: "Interactive Maps",
      description:
        "Explore real-time weather conditions with our dynamic, user-friendly maps. Zoom, pan, and track storms as they happen.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ),
      title: "RealFeel® Temperature",
      description:
        "Know how the weather actually feels, not just the temperature. Our advanced algorithm factors in humidity, wind, and sun intensity.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
          />
        </svg>
      ),
      title: "Severe Weather Alerts",
      description:
        "Stay safe with immediate notifications for severe weather, storms, and extreme conditions in your area.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
      ),
      title: "Hourly & Daily Forecasts",
      description:
        "Plan ahead with precise hour-by-hour and 10-day forecasts. From your morning commute to weekend plans, we've got you covered.",
    },
  ];
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
                <Button
                  className="text-black rounded-full text-xl md:text-2xl mt-6 md:ml-2 py-7 px-10 
                font-bold bg-white/20 backdrop-blur-md border-2
                 border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-2xl"
                >
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
                );
              })}
            </div>
          </div>

          {/* Free Trial Block */}
          <div
            className="container flex flex-col items-center my-20 py-20 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl 
                    border border-white/20"
          >
            <div className="font-bold md:text-5xl text-black text-center">
              <h2 className="text-6xl">Start your free trial today.</h2>
              <h2 className="text-6xl">Predict the next rain.</h2>
            </div>
            <p className="mt-4 text-xl">
              Join milions of users who have their umbrelas prepared.
            </p>
            <Button className="flex flex-col items-center w-58 mt-8 hover:bg-gray-500">
              <p className="text-shadow-red-50">
                Get started with 7 days free →{" "}
              </p>
            </Button>
          </div>

          {/* Newsletter Subscribe Block */}
          <div className="container py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-black mb-2">
                  Stay connected
                </h2>
                <p className="text-gray-600 text-lg">
                  Subscribe to our newsletter for the latest updates, <br />
                  resources, and exclusive offers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="flex-1 h-12 px-4 rounded-md border border-gray-300 bg-gray-200 
                  focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent 
                  placeholder:text-gray-400"
                />
                <Button
                  className="h-12 px-8 text-black font-bold rounded-full 
                text-xl md:text-2xl bg-white/20 backdrop-blur-md border-2
                 border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" />

          {/* Footer Section */}
          <nav className="flex items-center flex-col">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 py-10 sm:grid-cols-4">
              <div>
                <h2>Features</h2>
                <p>Locations</p>
                <p>Maps</p>
                <p>Warnings</p>
              </div>
              <div>
                <h2>About Us</h2>
                <p>FAQ</p>
                <p>Contact</p>
              </div>
              <div>
                <h2>Service</h2>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </nav>

          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" />
          <p>© 2025 YoanaStamenova - YoanaStamenova.com</p>
          <div>
            <a href="https://facebook.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-facebook transition-transform 
            hover:scale-110"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com"
              className="text-primary-foreground/70 hover:text-primary-foreground/100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-twitter transition-transform 
            hover:scale-110"
                aria-hidden="true"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 
            17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 
            7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path>
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com"
              className="text-primary-foreground/70 hover:text-primary-foreground/100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin transition-transform hover:scale-110"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              className="text-primary-foreground/70 hover:text-primary-foreground/100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram transition-transform hover:scale-110"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
