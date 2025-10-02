'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  const loadMap = () => {
    window.location.href = '/maps'
  }
  return (
    <div>
         <section className="m-36 py-8 sm:py-8"> 
          <div className='flex justify-center gap-22'>
            <div>
            <h1 className='text-8xl font-bold text-white'>
            <p>WHATS</p>
            <p>THE</p>
            <p>WEATHER?</p>
            </h1>
          <Button 
          className='text-white 
          rounded-4xl
          text-2xl
          mt-8
          py-6 px-6
          font-bold 
          bg-blue-400 border-2
          hover:bg-blue-600'
          onClick={loadMap}> 
          Find out more 
          </Button>
          </div>
            <Image 
            src="../Hero.svg" 
            width={450}
            height={450}
            alt='hero'
            className='my-6 ml-18'/>
          </div>
          </section>
    </div>
  )
}