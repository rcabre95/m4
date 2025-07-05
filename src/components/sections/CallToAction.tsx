import Link from 'next/link'
import React from 'react'

export default function CallToAction() {
  return (
    <section id="membership" className="bg-gradient-to-b from-black to-gray-900 py-16 md:py-24 text-white">
        <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Join Our Brotherhood</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mb-12 text-muted-foreground text-gray-300">
            Interested in becoming a member of Alpha Omega? Here's what you need to know about our membership
            process.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-800 bg-black p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-black">
                <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">Attend an Interest Meeting</h3>
            <p className="text-muted-foreground text-gray-400">
                Come to one of our interest meetings to learn more about our fraternity and meet current members.
            </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-black p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-black">
                <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">Apply for Membership</h3>
            <p className="text-muted-foreground text-gray-400">
                Submit your application for membership, including personal information and a statement of faith.
            </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-black p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-black">
                <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">Pledging Process</h3>
            <p className="text-muted-foreground text-gray-400">
                Participate in our pledging process, which focuses on brotherhood, faith development, and leadership.
            </p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-black p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-black">
                <span className="text-xl font-bold">4</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">Initiation</h3>
            <p className="text-muted-foreground text-gray-400">
                After successfully completing the pledging process, you'll be initiated as a full member of Alpha
                Omega.
            </p>
            </div>
        </div>
        <div className="mt-12 text-center">
            <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            >
            Request Information
            </Link>
        </div>
        </div>
    </section>
  )
}
