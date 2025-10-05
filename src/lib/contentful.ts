// lib/contentful.ts
import { createClient } from 'contentful'
import type { TypePage, TypeFooterData } from './types'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

interface HeroData {
  fields: {
    heading: string;
    subheading?: string;
    description?: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
  }
}

export async function getHero(): Promise<HeroData[]> {
  try {
    const hero = await client.getEntries({
      content_type: 'heroSection',
    });

    return hero.items as unknown as HeroData[];
  } catch (error) {
    console.error('Error fetching hero content:', error)
    return []
  }
}

export async function getEvents() {
  const entries = await client.getEntries({
    content_type: 'event',
    order: ['fields.date']
  })
  return entries.items
}

export async function getPageContent(slug: string): Promise<TypePage | null> {
  try {
    const entries = await client.getEntries({
      content_type: 'page',
      'fields.slug': slug,
      include: 3
    })
    
    if (!entries.items || entries.items.length === 0) {
      return null
    }
    
    return entries.items[0] as unknown as TypePage
  } catch (error) {
    console.error('Error fetching page content:', error)
    return null
  }
}

export async function getFooterData(): Promise<TypeFooterData | null> {
  try {
    const entries = await client.getEntries({
      content_type: 'footerData',
      limit: 1
    })
    
    if (!entries.items || entries.items.length === 0) {
      return null
    }
    
    return entries.items[0] as unknown as TypeFooterData
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return null
  }
}