import React from 'react'
import EventCard from '../ui/Cards/EventCard'

const eventData = [
  {
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Weekly Bible Study",
    timing: "Every Thursday • 7:00 PM",
    title: "Weekly Bible Study",
    description: "Join us for our weekly Bible study where we dive deep into Scripture and discuss how to apply it to our lives.",
    location: "Student Center, Room 203"
  },
  {
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Community Service Day",
    timing: "July 15 • 9:00 AM",
    title: "Community Service Day",
    description: "Join us as we serve our local community through various service projects and outreach initiatives.",
    location: "Community Center"
  },
  {
    imageSrc: "/placeholder.svg?height=400&width=600",
    imageAlt: "Brotherhood Retreat",
    timing: "August 5-7",
    title: "Brotherhood Retreat",
    description: "A weekend retreat focused on strengthening our brotherhood and growing in our faith together.",
    location: "Mountain View Retreat Center"
  }
]

export default function Events() {
  return (
    <section id="events" className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">Upcoming Events</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mb-12 text-muted-foreground text-gray-600">
            Join us for these upcoming events and activities. All are welcome!
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            {eventData.map((event, index) => (
                <EventCard
                    key={index}
                    imageSrc={event.imageSrc}
                    imageAlt={event.imageAlt}
                    timing={event.timing}
                    title={event.title}
                    description={event.description}
                    location={event.location}
                />
            ))}
        </div>
        </div>
    </section>
  )
}
