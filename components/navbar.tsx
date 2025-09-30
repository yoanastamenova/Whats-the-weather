import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-amber-50 shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 font-semibold"> 
             <div className="flex items-center gap-4">
                <Link href="/" className="hover:text-blue-600 flex items-center gap-4"> 
                    <Image src="/logo.png" height={80} width={80} alt="logo"/>
                    <h2 className="font-bold text-3xl text-blue-600">WTW</h2>
                </Link>
                </div>
            <div className="hidden md:flex gap-10">
                <Link href="/locations" className="hover:text-blue-600 px-6 py-2"> Locations</Link>
                <Link href="/warnings" className="hover:text-blue-600 px-6 py-2"> Warnings </Link>
                <Link href="/maps" className="hover:text-blue-600 px-6 py-2"> Maps </Link>
                <Link href="/contact" className="hover:text-blue-600 px-6 py-2"> Contact us </Link>
            </div>
        </div>
    </nav>
  )
}