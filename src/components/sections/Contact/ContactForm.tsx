"use client"
import { sendEmail } from '@/lib/send-email';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

export interface ContactFormInputs {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormInputs) => {
    sendEmail(data).then((email) => {
      if (email) {
        toast.success("Message sent!",);
      } else {
        toast.error("Something went wrong...")
      }
    });
    reset();
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-black">Send Us a Message</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              className="text-black flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isSubmitting}
            />
            {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Your email"
              className="text-black flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isSubmitting}
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="Your phone number"
              className="text-black flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Subject
            </label>
            <input
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              placeholder="Subject"
              className="text-black flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isSubmitting}
            />
            {errors.subject && <span className="text-xs text-red-500">{errors.subject.message}</span>}
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            placeholder="Your message"
            className="text-black flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
          />
          {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
        </div>
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}
