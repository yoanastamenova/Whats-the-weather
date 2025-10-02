'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <section className="m-12 py-8 sm:py-2">
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-center md:gap-20">
        <div className="text-center md:text-left m">
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            WHATS <br />
            THE <br />
            WEATHER?
          </h1>

          <Link href="/maps">
            <Button
              className="text-white rounded-3xl text-2xl mt-8 py-6 px-6 font-bold bg-blue-400 border-2 hover:bg-blue-600"
            >
              Find out more
            </Button>
          </Link>
        </div>

        <Image
          src="/Hero.svg"
          width={450}
          height={450}
          alt="Hero illustration"
          className="my-6 md:ml-12"
          priority
        />
      </div>
    </section>
  )
}
