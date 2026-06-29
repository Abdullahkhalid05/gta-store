"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Restaurant Solutions", href: "/restaurant-solutions" },
  { label: "Grocery Solutions", href: "/grocery-solutions" },
  { label: "Delivery Areas", href: "/delivery-areas" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-brand-dark sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            {/* <div className="relative w-16 h-16 shrink-0">
              <Image
                src="/images/logo-main.png"
                alt="Nature Grow logo"
                fill
                priority
                quality={80}
                className="object-contain"
              />
            </div> */}
            <div className="relative w-16 h-16 shrink-0 lg:hidden">
              <Image
                src="/images/logo-main.png"
                alt="Nature Grow logo"
                fill
                priority
                sizes="64px"
                className="object-contain"
              />
            </div>

            <div className="relative hidden lg:block w-14 h-14 shrink-0">
              <Image
                src="/images/logo-Head.png"
                alt="Nature Grow logo"
                fill
                priority
                sizes="56px"
                className="object-contain"
              />
            </div>

            <div className="leading-tight">
              <p className="text-white font-bold text-sm tracking-wide">
                Nature's Grown
              </p>
              <p className="text-brand-fresh text-[6px] font-medium tracking-widest uppercase">
                Wholesales Fresh Products
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-brand-fresh"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/request-quote"
              className="bg-brand-fresh hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200"
            >
              Request a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-brand-fresh text-sm font-medium py-2 border-b border-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              onClick={() => setIsOpen(false)}
              className="bg-brand-fresh text-white text-sm font-semibold px-5 py-2.5 rounded-md text-center mt-2 hover:bg-green-500 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
