import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/sections/Contact/ContactForm"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import DarkListSection from "@/components/sections/DarkListSection"
import ContactSection from "@/components/sections/Contact/ContactSection"
import Footer from "@/components/sections/Footer"
import { getHero, getPageContent } from "@/lib/contentful"
import DescriptionSection from "@/components/sections/DescriptionSection"
import LightListSection from "@/components/sections/LightListSection"

export default async function Home() {
  const heroData = await getHero();
  const hero = heroData[0];
  const pageData: any = await getPageContent('home');
  const { heroSection, aboutSection, missionSection, eventSection, joinSection, contactSection } = pageData.fields;
  console.log(pageData.fields);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          header={hero?.fields?.heading || ''}
          subheading={hero?.fields?.subheading || ''}
          description={hero?.fields?.description || ''}
          primaryCtaText={hero?.fields?.primaryCtaText || ''}
          primaryCtaLink={hero?.fields?.primaryCtaLink || ''}
          secondaryCtaText={hero?.fields?.secondaryCtaText || ''}
          secondaryCtaLink={hero?.fields?.secondaryCtaLink || ''}
        />
        <About
          title={aboutSection?.fields?.title}
          description={aboutSection?.fields?.description}
          listCards={aboutSection?.fields?.pillars}
        />
        <DescriptionSection
          title={missionSection.fields.title}
          description={missionSection.fields.content.content}
          ctaText={missionSection.fields.ctaText}
          ctaLink={missionSection.fields.ctaLink}
          featuredImage={missionSection.fields.featuredImage}
        />
        <LightListSection
          title={eventSection.fields.title}
          description={eventSection.fields.content.content}
          listCards={eventSection.fields.listItems}
        />
        <DarkListSection
          title={joinSection.fields.title}
          description={joinSection.fields.content.content}
          ctaText={joinSection.fields.ctaText}
          ctaLink={joinSection.fields.ctaLink}
          listItems={joinSection.fields.listItems}
        />
        <ContactSection
          address={contactSection.fields.address}
          email={contactSection.fields.email}
          phone={contactSection.fields.phone}
          meetingTimes={contactSection.fields.meetingTimes}
        />
      </main>
      <Footer />
    </div>
  )
}