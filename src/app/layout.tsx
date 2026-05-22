import type { Metadata } from 'next';
import { Cinzel_Decorative, Crimson_Pro, Space_Mono, Noto_Serif_JP } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const cinzelDecorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zenkarate.org'),
  title: {
    template: '%s | Zen Isshinryu Karate',
    default: 'Zen Isshinryu Karate — All India Association',
  },
  description:
    'The All India Zen Isshinryu Karate Association, headquartered in Chennai. Learn authentic Okinawan Isshinryu Karate from trained Senseis across Tamil Nadu.',
  keywords: [
    'Isshinryu karate',
    'karate Chennai',
    'martial arts Tamil Nadu',
    'self defense',
    'karate classes',
    'Okinawan karate',
    'Zen Isshinryu',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zenkarate.org',
    siteName: 'Zen Isshinryu Karate',
    title: 'Zen Isshinryu Karate — All India Association',
    description:
      'Learn authentic Okinawan Isshinryu Karate from trained Senseis across Tamil Nadu. Branches in Chennai: Koyambedu, Nesapakkam, K.K. Nagar, Numbal, Iyyappanthangal, Valasaravakkam.',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zen Isshinryu Karate',
    description: 'Authentic Okinawan Isshinryu Karate in Chennai, Tamil Nadu.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzelDecorative.variable} ${crimsonPro.variable} ${spaceMono.variable} ${notoSerifJP.variable} grain-overlay`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SportsOrganization',
              name: 'Zen Isshinryu Karate',
              alternateName: 'All India Zen Isshinryu Karate Association',
              url: 'https://zenkarate.org',
              description:
                'Authentic Okinawan Isshinryu Karate training across Chennai, Tamil Nadu.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'No. 12, 2nd Floor, Jai Nagar, Koyambedu',
                addressLocality: 'Chennai',
                addressRegion: 'Tamil Nadu',
                postalCode: '600107',
                addressCountry: 'IN',
              },
              telephone: '+91-9840123456',
              areaServed: 'Tamil Nadu',
              foundingDate: '1994',
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#F5F0E8',
              border: '1px solid #C41E3A',
              fontFamily: 'Space Mono, monospace',
              fontSize: '12px',
            },
          }}
        />
      </body>
    </html>
  );
}
