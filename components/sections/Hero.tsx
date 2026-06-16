"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Star, Shield } from "lucide-react";

const stats = [
  { icon: Truck, label: "GTA Wide Delivery" },
  { icon: Star, label: "Premium Quality" },
  { icon: Shield, label: "Trusted Supplier" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-dark">
      <Image
        src="/images/hero-background.webp"
        alt="Fresh produce background"
        fill
        priority
        quality={75}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />
      <div className="relative z-10 w-full py-20 pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-28">
        <div className="max-w-2xl flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-fresh/20 border border-brand-fresh/30 text-white text-xs font-semibold px-4 py-2 rounded-full w-fit"
          >
            <span className="w-2 text-white h-2 bg-brand-fresh rounded-full animate-pulse" />
            Ontario Food Terminal GTA's Trusted Produce Supplier
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Fresh Produce
            <span className="block text-brand-fresh">Delivered Across</span>
            the GTA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed"
          >
            We supply restaurants, grocery stores, hotels, and food service
            businesses with the freshest fruits, vegetables, and herbs sourced
            directly from the Ontario Food Terminal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-fresh hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 hover:shadow-sm hover:shadow-brand-fresh/30"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-md transition-all duration-200 backdrop-blur-sm"
            >
              Contact Sales
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 pt-4 border-t border-white/20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <div className="bg-brand-fresh/20 p-2 rounded-md">
                  <stat.icon className="w-4 h-4 text-brand-fresh" />
                </div>
                <span className="text-white/80 text-sm font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent" /> */}
    </section>
  );
}
