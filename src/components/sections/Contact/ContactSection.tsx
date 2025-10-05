import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import ContactForm from './ContactForm'

interface IContactSectionProps {
    address: string;
    email: string;
    phone: string;
    meetingTimes: Array<{ fields: { eventName: string; day: string; time: string } }>;
}

export default function ContactSection({ address, email, phone, meetingTimes }: IContactSectionProps) {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
        <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl">Contact Us</h2>
            <div className="mb-8 h-1 w-20 bg-amber-500 mx-auto"></div>
            <p className="mb-12 text-muted-foreground text-gray-600">
            Have questions or want to learn more about M4? Get in touch with us!
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
            <div>
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-black">Contact Information</h3>
                <div className="space-y-4">
                <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-amber-500" />
                    <div>
                    <p className="font-medium text-black">Address</p>
                    <p className="text-muted-foreground text-gray-600">
                        {address}
                    </p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Mail className="mr-3 h-5 w-5 text-amber-500" />
                    <div>
                    <p className="font-medium text-black">Email</p>
                    <p className="text-muted-foreground text-gray-600">{email}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 text-amber-500" />
                    <div>
                    <p className="font-medium text-black">Phone</p>
                    <p className="text-muted-foreground text-gray-600">{phone}</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-black">Meeting Times</h3>
                <div className="space-y-3">
                {meetingTimes.map((meeting, index) => (
                    <div key={index} className="flex justify-between">
                        <span className="font-medium text-black">{meeting.fields.eventName}</span>
                        <span className="text-muted-foreground text-gray-600">{meeting.fields.day}, {meeting.fields.time}</span>
                    </div>
                ))}
                </div>
                </div>
            </div>
            
            <ContactForm />
        </div>
        </div>
    </section>
  )
}
