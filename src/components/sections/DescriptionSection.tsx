import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IDescriptionSectionProps {
    title: string;
    description: any;
    image?: string;
    ctaText: string;
    ctaLink: string;
    featuredImage: {
        fields: {
            title: string;
            description: string;
            file: { url: string; }
        }
    }
}

export default function DescriptionSection({ title, description, image, ctaText, ctaLink, featuredImage }: IDescriptionSectionProps) {
  return (
    <section id="mission" className="bg-black py-16 px-6 md:px-16 md:py-24">
        <div className=" mx-auto">
        <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500"></div>
            {description.map((block: any, index: number) => {
                if (block.nodeType === 'paragraph') {
                    return (
                        <p key={index} className="mb-6 text-muted-foreground text-gray-300">
                            {block.content.map((content: any, contentIndex: number) => content.value).join('')}
                        </p>
                    );
                }
            })}
            <Link
                href={ctaLink}
                className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            >
                {ctaText} <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
                src={featuredImage.fields.file.url.startsWith('//') ? `https:${featuredImage.fields.file.url}` : featuredImage.fields.file.url}
                alt={featuredImage.fields.description}
                fill
                className="object-cover"
            />
            </div>
        </div>
        </div>
    </section>
  )
}
