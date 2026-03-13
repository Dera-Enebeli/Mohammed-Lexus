import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
});

const barlow = Barlow({
  weight: ['300', '400'],
  variable: '--font-barlow',
  subsets: ['latin'],
});

const barlowCondensed = Barlow_Condensed({
  weight: ['300', '400', '600', '700'],
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "mohammed_lexus — Premium Car Wrapping & Custom Modifications",
  description: "Transform your car into something extraordinary. Premium car wrapping, color changes, body kits, and custom modifications for luxury vehicles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable} antialiased`}
        style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0, backgroundColor: '#0a0a0a' }}
      >
        {children}
      </body>
    </html>
  );
}
