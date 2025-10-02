"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

  return (
    <nav className="sticky top-0 z-50">
      <div className="w-full px-8 flex items-center justify-between text-2xl font-semibold text-white"> 

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/locations" className="hover:text-blue-600 px-6 py-3"> LOCATIONS </Link>
          <Link href="/maps" className="hover:text-blue-600 px-6 py-3"> MAPS </Link>
          <Link href="/warnings" className="hover:text-blue-600 px-6 py-3"> WARNINGS </Link>
          <Link href="/contact" className="hover:text-blue-600 px-6 py-3"> CONTACT </Link>
        </div>
        <div className="flex items-center gap-2 px-8">
          <Link href="/" className="hover:text-blue-600 flex items-center gap-2"> 
            <Image src="/logo.png" height={100} width={100} alt="logo"/>
          </Link>
        </div>

        {/* Mobile Menu */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
        {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-400 py-4 text-white">
          <div className="flex flex-col items-center gap-2 font-semibold">
            <Link href="/locations" className="hover:text-blue-600 px-6 py-3"> LOCATIONS </Link>
            <Link href="/maps" className="hover:text-blue-600 px-6 py-3"> MAPS </Link>
            <Link href="/warnings" className="hover:text-blue-600 px-6 py-3"> WARNINGS </Link>
            <Link href="/contact" className="hover:text-blue-600 px-6 py-3"> CONTACT </Link>
          </div>
        </div>
      )}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  )
}