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
import { getFooterData, getHero, getPageContent } from "@/lib/contentful"
import DescriptionSection from "@/components/sections/DescriptionSection"
import LightListSection from "@/components/sections/LightListSection"

export default async function Home() {
  const pageData: any = await getPageContent('home');
  const footerData = await getFooterData();
  const { heroSection, aboutSection, missionSection, eventSection, joinSection, contactSection } = pageData.fields;
  console.log(footerData?.fields);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          header={heroSection?.fields?.heading || ''}
          subheading={heroSection?.fields?.subheading || ''}
          description={heroSection?.fields?.description || ''}
          primaryCtaText={heroSection?.fields?.primaryCtaText || ''}
          primaryCtaLink={heroSection?.fields?.primaryCtaLink || ''}
          secondaryCtaText={heroSection?.fields?.secondaryCtaText || ''}
          secondaryCtaLink={heroSection?.fields?.secondaryCtaLink || ''}
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
      <Footer
        showNewsletterForm={Boolean(footerData?.fields?.showNewsletterForm) || false}
        facebookLink={footerData?.fields?.facebookLink as string | undefined}
        instagramLink={footerData?.fields?.instagramLink as string | undefined}
        twitterLink={footerData?.fields?.twitterLink as string | undefined}
        linkedinLink={footerData?.fields?.linkedinLink as string | undefined}
        showQuickLinks={Boolean(footerData?.fields?.showQuickLinks) || false}
      />
    </div>
  )
}