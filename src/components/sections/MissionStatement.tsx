import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MissionStatement() {
  return (
    <section id="mission" className="bg-black py-16 px-6 md:px-16 md:py-24">
        <div className=" mx-auto">
        <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Our Mission</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500"></div>
            <p className="mb-6 text-muted-foreground text-gray-300">
                M4 exists to develop men of integrity, faith, and leadership through brotherhood and service.
                We strive to create a community where men can grow in their faith, build lasting friendships, and make
                a positive impact on the world around them.
            </p>
            <p className="mb-8 text-muted-foreground text-gray-300">
                Our members are committed to academic excellence, spiritual growth, and servant leadership. We
                challenge each other to live out our faith in all areas of life and to be men who lead with courage
                and compassion.
            </p>
            <Link
                href="#membership"
                className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            >
                Join Our Brotherhood <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Brotherhood in action"
                fill
                className="object-cover"
            />
            </div>
        </div>
        </div>
    </section>
  )
}
