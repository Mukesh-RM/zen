import type { Metadata } from 'next';
import { ContactPageClient } from './contact-content';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Zen Isshinryu Karate. Find branch phone numbers, WhatsApp contacts, and send us a message.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
