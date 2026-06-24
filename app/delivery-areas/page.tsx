"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Truck } from "lucide-react";

const areas = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Scarborough",
  "Oakville",
  "Burlington",
  "London",
  "Niagara Falls",
  "All Over Ontario",
];

export default function DeliveryAreasPage() {
  return (
    <main>
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
              Service Coverage
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Delivery Areas
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              We proudly deliver fresh produce across the Greater Toronto Area
              and beyond  bringing quality and reliability to businesses
              throughout Ontario.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div>
                <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
                  Where We Deliver
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-brand-text mt-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Serving Businesses Across Ontario
                </h2>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  No matter where your business is located within our service
                  network, we ensure your produce arrives fresh, on schedule,
                  every time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-2.5 bg-brand-light rounded-lg px-4 py-3 border border-brand-fresh/20 hover:border-brand-fresh transition-colors duration-200"
                  >
                    <MapPin className="w-4 h-4 text-brand-fresh shrink-0" />
                    <span className="text-brand-text text-sm font-medium">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 bg-brand-fresh hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 w-fit hover:scale-105 mt-2"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden shadow-lg border-2 border-brand-fresh h-[400px] lg:h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1444530.6!2d-80.05!3d43.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUxJzAwLjAiTiA3OcKwMjMnMDAuMCJX!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-brand-grey py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="bg-brand-fresh/10 p-4 rounded-full">
              <Truck className="w-8 h-8 text-brand-fresh" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-text">
              Don't See Your Area Listed?
            </h3>
            <p className="text-muted-foreground text-sm max-w-md">
              We're always expanding our delivery network. Reach out and
              we'll let you know if we can serve your location.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-fresh text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}