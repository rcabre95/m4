import React from 'react';
import EventCard from '../ui/Cards/ListCardLight';
import Link from 'next/link';
import ListCardLight from '../ui/Cards/ListCardLight';

const eventData = [
  {
    imageSrc: "/images/cross.png",
    imageAlt: "Weekly Bible Study",
    timing: "Every Thursday • 7:00 PM",
    title: "Weekly Bible Study",
    description: "Join us for our weekly Bible study where we dive deep into Scripture and discuss how to apply it to our lives.",
    location: "Student Center, Room 203"
  },
  {
    imageSrc: "/images/key.png",
    imageAlt: "Community Service Day",
    timing: "July 15 • 9:00 AM",
    title: "Community Service Day",
    description: "Join us as we serve our local community through various service projects and outreach initiatives.",
    location: "Community Center"
  },
  {
    imageSrc: "/images/lion.png",
    imageAlt: "Brotherhood Retreat",
    timing: "August 5-7",
    title: "Brotherhood Retreat",
    description: "A weekend retreat focused on strengthening our brotherhood and growing in our faith together.",
    location: "Mountain View Retreat Center"
  }
]

export interface IListSectionProps {
  title: string;
  description: any;
  listCards: Array<any>;
  ctaText?: string;
  ctaLink?: string;
}

export default function LightListSection({ title, description, listCards, ctaText, ctaLink }: IListSectionProps) {
  return (
    <section id="events" className="bg-white px-6 md:px-24 py-16 md:py-24">
        <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">{title}</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500 mx-auto"></div>
            {description.map((block: any, index: number) => {
                if (block.nodeType === 'paragraph') {
                    return (
                        <p key={index} className="mb-12 text-muted-foreground text-gray-600">
                            {block.content.map((content: any, contentIndex: number) => content.value).join('')}
                        </p>
                    );
                }
            })}
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            {listCards.map((event, index) => (
                <ListCardLight
                    key={index}
                    imageSrc={event.fields.featuredImage.fields.file.url.startsWith('//') ? `https:${event.fields.featuredImage.fields.file.url}` : event.fields.featuredImage.fields.file.url}
                    imageAlt={event.fields.featuredImage.fields.description}
                    timing={event.fields.timing}
                    title={event.fields.title}
                    description={event.fields.description}
                    location={event.fields.location}
                />
            ))}
        </div>
        </div>
        {ctaLink && ctaText &&
        <div className="mt-12 text-center">
          <Link href={ctaLink} className="inline-block rounded bg-amber-500 px-6 py-3 text-white">
            {ctaText}
          </Link>
        </div>}
    </section>
  )
}
