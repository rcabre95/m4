import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface IEventData {
  imageSrc: string;
  imageAlt: string;
  timing: string;
  title: string;
  description: string;
  location: string;
}

export default function EventCard({imageSrc, imageAlt, timing, title, description, location}: IEventData) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="relative h-48">
            <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            />
        </div>
        <div className="p-6">
            <div className="mb-2 text-sm font-medium text-amber-500">{timing}</div>
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="mb-4 text-muted-foreground text-gray-600">
            {description}
            </p>
            <div className="flex items-center text-sm text-gray-500">
            <MapPin className="mr-1 h-4 w-4 text-amber-500" />
            <span>{location}</span>
            </div>
        </div>
    </div>
  )
}
