import React from 'react'
import IconBackground from '../icons/IconBackground'
import Cross from '../icons/Cross'
import People from '../icons/People'
import Charity from '../icons/Charity'

export default function About() {
  return (
    <section id="about" className="bg-white px-6 md:px-24 py-16 md:py-24">
        <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">About Our Brotherhood</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mb-8 text-muted-foreground text-gray-600">
            Founded on principles of Christian faith and brotherhood, M4 has been developing men of
            character since 1995. Our fraternity provides a supportive community where men can grow spiritually,
            academically, and socially.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <IconBackground>
                <Cross />
            </IconBackground>
            <h3 className="mb-2 text-xl font-bold text-black">Faith</h3>
            <p className="text-muted-foreground text-gray-600">
                We are committed to growing in our relationship with Christ and living out our faith in all areas of
                life.
            </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <IconBackground>
                <People />
            </IconBackground>
            <h3 className="mb-2 text-xl font-bold text-black">Brotherhood</h3>
            <p className="text-muted-foreground text-gray-600">
                We foster genuine friendships and a supportive community where men can grow together.
            </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <IconBackground>
                <Charity />
            </IconBackground>
            <h3 className="mb-2 text-xl font-bold text-black">Service</h3>
            <p className="text-muted-foreground text-gray-600">
                We are dedicated to serving our campus, community, and world through various outreach initiatives.
            </p>
            </div>
        </div>
        </div>
    </section>
  )
}
