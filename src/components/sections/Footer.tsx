import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Lion from '../icons/Lion'

interface IFooterProps {
  showNewsletterForm: boolean;
  facebookLink?: string;
  instagramLink?: string;
  twitterLink?: string;
  linkedinLink?: string;
  showQuickLinks: boolean;
}
    
export default function Footer({
  showNewsletterForm,
  facebookLink,
  instagramLink,
  twitterLink,
  linkedinLink,
  showQuickLinks
}: IFooterProps) {
  return (
    <footer className="bg-black py-12 text-white px-6 md:px-24">
        <div className="container mx-auto">
            <div className={`flex flex-col md:flex-row gap-8 ${!showQuickLinks && !showNewsletterForm ? 'md:justify-center' : 'md:justify-between'}`}>
            <div className={`${!showQuickLinks && !showNewsletterForm ? 'text-center max-w-md mx-auto' : ''}`}>
                <div className={`flex items-center gap-2 mb-4 ${!showQuickLinks && !showNewsletterForm ? 'justify-center' : ''}`}>
                <Lion className="h-10 w-10 text-amber-500" />
                <span className="text-xl font-bold text-white">M4</span>
                </div>
                <p className="text-muted-foreground text-gray-400 mb-4">
                A Christian fraternity dedicated to developing men of integrity, faith, and leadership.
                </p>
                <div className={`flex space-x-4 ${!showQuickLinks && !showNewsletterForm ? 'justify-center' : ''}`}>
                    {facebookLink && (
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                            >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    )}
                    {instagramLink && (
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                            >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                    )}
                    {twitterLink && (
                        <a href={twitterLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                            >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                    )}
                    {linkedinLink && (
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                            >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
            {showQuickLinks && (
            <div>
                <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
                <ul className="space-y-2">
                <li>
                    <Link href="#about" className="text-gray-400 hover:text-amber-500">
                    About Us
                    </Link>
                </li>
                <li>
                    <Link href="#mission" className="text-gray-400 hover:text-amber-500">
                    Our Mission
                    </Link>
                </li>
                <li>
                    <Link href="#events" className="text-gray-400 hover:text-amber-500">
                    Events
                    </Link>
                </li>
                <li>
                    <Link href="#membership" className="text-gray-400 hover:text-amber-500">
                    Membership
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className="text-gray-400 hover:text-amber-500">
                    Contact
                    </Link>
                </li>
                </ul>
            </div>
            )}
            {showNewsletterForm && (
            <div>
                <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
                <p className="text-muted-foreground text-gray-400 mb-4">
                Subscribe to our newsletter to receive updates on events and activities.
                </p>
                <form className="flex gap-2">
                <input
                    type="email"
                    placeholder="Your email"
                    className="flex h-10 w-full rounded-md border border-gray-800 bg-black px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-4 text-sm font-medium text-black shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-1 focus-visible:ring-amber-500"
                >
                    Subscribe
                </button>
                </form>
            </div>
            )}
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} M4 Christian Fraternity. All rights reserved.
            </p>
            </div>
        </div>
    </footer>
  )
}
