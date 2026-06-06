import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'The Lagoon | Escape to Serenity and Natural Beauty',
  description: 'Discover The Lagoon, a breathtaking destination offering tranquil experiences, luxurious comfort, and untouched natural splendor. Plan your perfect escape.',
  openGraph: {
    "title": "The Lagoon | Escape to Serenity and Natural Beauty",
    "description": "Discover The Lagoon, a breathtaking destination offering tranquil experiences, luxurious comfort, and untouched natural splendor. Plan your perfect escape.",
    "url": "https://www.thelagoon.com",
    "siteName": "The Lagoon",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/nice-sunset-scene-beach_1048-5304.jpg",
        "alt": "Aerial view of a serene blue-green lagoon"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "The Lagoon | Escape to Serenity and Natural Beauty",
    "description": "Discover The Lagoon, a breathtaking destination offering tranquil experiences, luxurious comfort, and untouched natural splendor. Plan your perfect escape.",
    "images": [
      "http://img.b2bpic.net/free-photo/nice-sunset-scene-beach_1048-5304.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
