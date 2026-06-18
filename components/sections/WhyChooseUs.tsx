"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Leaf, Handshake } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Direct Sourcing",
    description:
      "We source directly from the Ontario Food Terminal, cutting out middlemen so you get the freshest produce at the best price.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    description:
      "Every order is hand-checked for freshness before it leaves our facility, ensuring consistent quality every single time.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Our delivery network covers the entire GTA with dependable schedules your business can plan around.",
  },
  {
    icon: Handshake,
    title: "Tailored B2B Service",
    description:
      "From small cafes to large food companies, we build flexible supply solutions around your specific business needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
            Why Partner With Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-brand-text mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose Nature's Grow
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            We make sourcing fresh produce simple, reliable, and built around
            the way your business actually operates.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-border rounded-xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-brand-light p-3 rounded-lg w-fit group-hover:bg-brand-fresh transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-brand-fresh group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-brand-text">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}