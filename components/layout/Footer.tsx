import Link from "next/link";
import { Leaf, Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Restaurant Solutions", href: "/restaurant-solutions" },
  { label: "Grocery Solutions", href: "/grocery-solutions" },
  { label: "Delivery Areas", href: "/delivery-areas" },
];

const productLinks = [
  { label: "Fresh Fruits", href: "/products" },
  { label: "Vegetables", href: "/products" },
  { label: "Fresh Herbs", href: "/products" },
  { label: "Specialty Produce", href: "/products" },
  { label: "Request a Quote", href: "/request-quote" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white mt-auto">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-brand-fresh p-1.5 rounded-md">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold text-sm tracking-wide">GTA Fresh</p>
                <p className="text-brand-fresh text-xs font-medium tracking-widest uppercase">Direct</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Supplying fresh, locally sourced produce from the Ontario Food Terminal to restaurants, grocery stores, and food-service businesses across the GTA.
            </p>
            <a
              href="https://wa.me/16479937556"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors w-fit"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.855L.057 23.885a.5.5 0 00.606.61l6.187-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.878 9.878 0 01-5.031-1.378l-.361-.214-3.733.868.936-3.63-.235-.373A9.878 9.878 0 012.1 12C2.1 6.533 6.533 2.1 12 2.1c5.466 0 9.9 4.433 9.9 9.9 0 5.466-4.434 9.9-9.9 9.9z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-fresh text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Our Products
            </h3>
            <ul className="flex flex-col gap-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-fresh text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-fresh mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">+1 (416) 555-0192</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-fresh mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">info@gtafreshdirect.ca</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-fresh mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Ontario Food Terminal, Toronto, ON</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-fresh mt-0.5 shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>Mon – Fri: 5:00 AM – 6:00 PM</p>
                  <p>Sat: 5:00 AM – 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} GTA Fresh Direct. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Fresh from Ontario Food Terminal to your door.
          </p>
        </div>
      </div>
    </footer>
  );
}