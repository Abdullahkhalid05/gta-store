"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

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

export default function DeliveryMap() {
  return (
    <section className="py-20 bg-brand-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
              Delivering Across Ontario
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-brand-text"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Deliver Where Your Business Is
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              From Toronto to Niagara Falls and all across Ontario, we ensure
              your produce arrives fresh, on time, every time.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <div className="bg-brand-fresh rounded-full p-0.5 shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-brand-text text-sm font-medium">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/delivery-areas"
              className="inline-flex items-center gap-2 bg-brand-fresh hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 w-fit hover:scale-105"
            >
              View All Delivery Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-lg lg:mt-12 border-2 border-brand-fresh h-[350px] lg:h-[430px]"
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
  );
}