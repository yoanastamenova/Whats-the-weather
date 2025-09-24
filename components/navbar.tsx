import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-amber-50 shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4"> 
            <Link href="/" className="hover:text-blue-600"> 
            <Image src="/logo.png" height={80} width={80} alt="logo"/>
            </Link>
        <div className="hidden md:flex space-x-9">
            <Link href="/locations" className="hover:text-blue-600"> Locations</Link>
            <Link href="/warnings" className="hover:text-blue-600"> Warnings </Link>
            <Link href="/maps" className="hover:text-blue-600"> Maps </Link>
        </div>
        </div>
    </nav>
  )
}