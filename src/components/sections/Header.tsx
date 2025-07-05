import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/20 bg-black/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
            <Image
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="Lion Logo"
                className="h-10 w-10"
            />
            <span className="text-xl font-bold text-white">ALPHA OMEGA</span>
            </div>
            <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
                <li>
                <Link href="#about" className="text-sm font-medium text-white hover:text-amber-500">
                    About
                </Link>
                </li>
                <li>
                <Link href="#mission" className="text-sm font-medium text-white hover:text-amber-500">
                    Mission
                </Link>
                </li>
                <li>
                <Link href="#events" className="text-sm font-medium text-white hover:text-amber-500">
                    Events
                </Link>
                </li>
                <li>
                <Link href="#membership" className="text-sm font-medium text-white hover:text-amber-500">
                    Membership
                </Link>
                </li>
                <li>
                <Link href="#contact" className="text-sm font-medium text-white hover:text-amber-500">
                    Contact
                </Link>
                </li>
            </ul>
            </nav>
            <Link
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-md border border-amber-500 bg-black px-4 text-sm font-medium text-amber-500 shadow transition-colors hover:bg-amber-500 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            >
            Join Us
            </Link>
        </div>
    </header>
  )
}
