import { ContactFormInputs } from '@/components/sections/Contact/ContactForm';

export async function sendEmail(data: ContactFormInputs): Promise<boolean> {
    const { name, email, phone, subject, message } = data;
    if (!process.env.NEXT_PUBLIC_WEB3FORMS_API_URL) {
        throw new Error('WEB3FORMS_API_URL environment variable is not defined');
    }
    
    const response = await fetch(process.env.NEXT_PUBLIC_WEB3FORMS_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_PUBLIC_ACCESS_KEY,
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
        }),
    });

    const result = await response.json();

    return result.success;
};