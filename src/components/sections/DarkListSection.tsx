import Link from 'next/link'
import React from 'react'

interface INumberedListItem {
    fields: {
        stepNumber: number;
        title: string;
        description: string;
    }
}

export interface IDarkListSectionProps {
    title: string;
    description: any;
    ctaText?: string;
    ctaLink?: string;
    listItems: Array<any>;
}


export default function DarkListSection({ title, description, ctaText, ctaLink, listItems }: IDarkListSectionProps) {
  return (
    <section id="membership" className="bg-gradient-to-b from-black to-gray-900 px-6 md:px-24 py-16 md:py-24 text-white">
        <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500 mx-auto"></div>
            {description.map((block: any, index: number) => {
                if (block.nodeType === 'paragraph') {
                    return (
                        <p key={index} className="mb-12 text-muted-foreground text-gray-300">
                            {block.content.map((content: any, contentIndex: number) => content.value).join('')}
                        </p>
                    );
                }
            })}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {listItems.map((item) => (
                <div key={item.fields.stepNumber} className="rounded-lg border border-gray-800 bg-black p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-black">
                        <span className="text-xl font-bold">{item.fields.stepNumber}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{item.fields.title}</h3>
                    <p className="text-muted-foreground text-gray-400">
                        {item.fields.description}
                    </p>
                </div>
            ))}
        </div>
        {ctaText && ctaLink && 
        <div className="mt-12 text-center">
            <Link
            href={ctaLink || '#'}
            className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
            >
            {ctaText}
            </Link>
        </div>}
        
        </div>
    </section>
  )
}
