import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Treasure Coast Getaway | Luxury Vacation Rental | Port St. Lucie, FL",
  description: "4BR/2BA luxury vacation home with private heated pool on Florida's Treasure Coast. Sleeps 8+ guests. Modern amenities, beach access, family-friendly. Book your paradise escape today!",
  keywords: "vacation rental, Florida, Treasure Coast, Port St. Lucie, pool, family vacation, beach house, luxury rental, Airbnb, short term rental",
  authors: [{ name: "Treasure Coast Getaway" }],
  creator: "Treasure Coast Getaway",
  publisher: "Treasure Coast Getaway",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://treasurecoastgetaway.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Treasure Coast Getaway - Luxury Vacation Rental with Pool",
    description: "Experience paradise at our 4-bedroom coastal home with private heated pool, modern amenities, and easy beach access on Florida's Treasure Coast.",
    url: 'https://treasurecoastgetaway.com',
    siteName: 'Treasure Coast Getaway',
    images: [
      {
        url: '/outside-front.jpg',
        width: 1200,
        height: 630,
        alt: 'Treasure Coast Getaway - Beautiful vacation rental exterior',
      },
      {
        url: '/pool.jpg',
        width: 1200,
        height: 630,
        alt: 'Private heated swimming pool at Treasure Coast Getaway',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treasure Coast Getaway | Luxury Vacation Rental',
    description: '4BR/2BA luxury home with private pool on Florida\'s Treasure Coast. Perfect for families!',
    images: ['/outside-front.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Treasure Coast Getaway",
              "description": "Luxury vacation rental with private pool on Florida's Treasure Coast",
              "url": "https://treasurecoastgetaway.com",
              "telephone": "(586) 904-1191",
              "email": "treasurecoastpropertyrentals@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6718 Northwest Mamie Court",
                "addressLocality": "Port St. Lucie",
                "addressRegion": "FL",
                "postalCode": "34986",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.2937",
                "longitude": "-80.3582"
              },
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Private Pool",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "WiFi",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Kitchen",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Air Conditioning",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Parking",
                  "value": true
                }
              ],
              "numberOfRooms": "4",
              "floorSize": {
                "@type": "QuantitativeValue",
                "value": "2000",
                "unitCode": "FTK"
              },
              "occupancy": {
                "@type": "QuantitativeValue",
                "maxValue": "8"
              },
              "image": [
                "https://treasurecoastgetaway.com/outside-front.jpg",
                "https://treasurecoastgetaway.com/pool.jpg",
                "https://treasurecoastgetaway.com/kitchen.jpg",
                "https://treasurecoastgetaway.com/master.jpg"
              ],
              "priceRange": "$$$",
              "starRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "25"
              }
            })
          }}
        />
        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Port St. Lucie" />
        <meta name="geo.position" content="27.2937;-80.3582" />
        <meta name="ICBM" content="27.2937, -80.3582" />
        <meta name="theme-color" content="#0D9488" />
        <meta name="msapplication-TileColor" content="#0D9488" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
