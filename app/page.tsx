'use client'

import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/carousel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
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
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight drop-shadow-2xl">
                WHAT&#39;S <br />
                THE <br />
                WEATHER?
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-lg mx-auto md:mx-0 md:ml-2">
                Real-time forecasts at your fingertips
              </p>
              <Link href="/maps">
                <Button className="text-white rounded-full text-xl md:text-2xl mt-6 md:ml-2 py-7 px-10 font-bold bg-white/20 backdrop-blur-md border-2 border-white/40 hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-2xl">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
    Explore Weather Worldwide
  </h2>
  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-2xl border border-white/20">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-2/3">
        <Carousel />
      </div>
            <div className="w-full md:w-1/3">
              <p className="text-white font-semibold text-lg md:text-xl leading-relaxed">
                Experience our comprehensive weather platform,  
                featuring interactive real-time maps, precise local forecasts with RealFeel® 
                technology, instant severe weather alerts - everything you need to stay informed 
                about weather conditions anywhere in the world.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}