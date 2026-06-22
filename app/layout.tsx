import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nature's Grown | Fresh Produce Delivered Across the GTA",
  description:
    "Nature's Grown supplies fresh fruits, vegetables, and herbs to restaurants, grocery stores, hotels, and food-service businesses across the Greater Toronto Area.",
  keywords:
    "fresh produce GTA, wholesale fruits vegetables Toronto, B2B produce supplier Ontario, restaurant food supply GTA",
  openGraph: {
    title: "Nature's Grown | Fresh Produce Delivered Across the GTA",
    description:
      "Supplying fresh produce to restaurants, grocery stores and hotels across the GTA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-brand-text">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
