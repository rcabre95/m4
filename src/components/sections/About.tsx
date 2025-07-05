import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">About Our Brotherhood</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mb-8 text-muted-foreground text-gray-600">
            Founded on principles of Christian faith and brotherhood, Alpha Omega has been developing men of
            character since 1995. Our fraternity provides a supportive community where men can grow spiritually,
            academically, and socially.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                >
                <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z"></path>
                <circle cx="12" cy="8" r="2"></circle>
                </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Faith</h3>
            <p className="text-muted-foreground text-gray-600">
                We are committed to growing in our relationship with Christ and living out our faith in all areas of
                life.
            </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                >
                <path d="M17 6.1H3"></path>
                <path d="M21 12.1H3"></path>
                <path d="M15.1 18H3"></path>
                </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Brotherhood</h3>
            <p className="text-muted-foreground text-gray-600">
                We foster genuine friendships and a supportive community where men can grow together.
            </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Service</h3>
            <p className="text-muted-foreground text-gray-600">
                We are dedicated to serving our campus, community, and world through various outreach initiatives.
            </p>
            </div>
        </div>
        </div>
    </section>
  )
}
