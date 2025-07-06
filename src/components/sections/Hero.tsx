import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Lion from '../icons/Lion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Background"
        fill
        className="object-cover opacity-30"
        priority
        />
        <div className="container mx-auto relative z-20 flex flex-col items-center justify-center text-center">
        <div className="mb-8 rounded-full bg-amber-500/10 p-4">
            <Lion className="h-36 w-36 text-amber-500" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">MMMM</h1>
        <p className="mb-6 text-xl text-amber-500 md:text-2xl">BROTHERHOOD • FAITH • STRENGTH</p>
        <p className="mb-8 max-w-2xl text-muted-foreground text-gray-400 md:text-lg">
            A Christian fraternity dedicated to developing men of integrity, faith, and leadership through brotherhood
            and service.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
            <Link
            href="#about"
            className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            >
            Learn More
            </Link>
            <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-amber-500 bg-black px-8 text-sm font-medium text-amber-500 shadow transition-colors hover:bg-amber-500 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            >
            Contact Us
            </Link>
        </div>
        </div>
    </section>
  )
}
