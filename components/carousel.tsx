"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

const carouselItems = [
  {
    id: 1,
    image: '/features/location.jpeg',
    title: 'Location Forecast',
    description: 'Detailed current weather conditions by location selection'
  },
  {
    id: 2,
    image: '/features/map.jpeg',
    title: 'Weather Maps',
    description: 'Interactive weather maps showing current weather conditions'
  },
  {
    id: 3,
    image: '/features/alert.jpeg',
    title: 'Warnings',
    description: 'Check important warnings and alerts'
  },
  {
    id: 4,
    image: '/features/forecast.jpg',
    title: 'Forecasts',
    description: 'Obtain detailed weather forecasts'
  }
]

export function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % carouselItems.length)
        }, 3000);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full transition-transform duration-200 ${
              index === current ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 w-full bg-blue-400  bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
