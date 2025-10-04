"use client"

import { useState } from 'react'
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    )
  }

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full transition-transform duration-200 ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
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

      <button
        onClick={previousSlide}
        className="absolute left-0 top-1/2 bg-blue-400  bg-opacity-50 text-white p-2 rounded-r"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 bg-blue-400  bg-opacity-50 text-white p-2 rounded-l"
      >
        →
      </button>
    </div>
  )
}
