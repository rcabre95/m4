import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/sections/Contact/ContactForm"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import MissionStatement from "@/components/sections/MissionStatement"
import Events from "@/components/sections/Events"
import CallToAction from "@/components/sections/CallToAction"
import ContactSection from "@/components/sections/Contact/ContactSection"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <MissionStatement />
        <Events />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}