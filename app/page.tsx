'use client'

import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/carousel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left">
          <h1 className="text-6xl max-w md:text-8xl font-bold text-white leading-tight">
            WHATS <br />
            THE <br />
            WEATHER?
          </h1>
          <Link href="/maps">
            <Button
              className="text-white 
              rounded-3xl text-2xl my-6 md:ml-12
              py-6 px-6 font-bold bg-blue-400 
              border-2 hover:bg-blue-600">
              Find out more
            </Button>
          </Link>
        </div>
    {/* TODO: MAKE IMAGE APPER AFTER WW TEXT IN MOBILE MENU */}
        <Image
          src="/Hero.svg"
          width={450}
          height={450}
          alt="Hero illustration"
          className="my-6 md:ml-12"
          priority
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row m-w-96 md:justify-center mt-20">
        <Carousel />
      </div>
      </div>
    </section>
  )
}
