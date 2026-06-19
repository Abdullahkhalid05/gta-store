"use client";

import { motion } from "framer-motion";
import { Leaf, Tag, Truck, ShieldCheck, Headphones, MapPin } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Daily Supply",
    description: "We source fresh produce every day to ensure the best quality.",
  },
  {
    icon: Tag,
    title: "Wholesale Pricing",
    description: "Competitive wholesale prices to help your business grow and succeed.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "On-time deliveries across Ontario, every single day.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Strict quality checks at every step to guarantee freshness.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personalized support and service from our experienced team.",
  },
  {
    icon: MapPin,
    title: "Ontario Wide",
    description: "Delivering across the GTA and all over Ontario.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-brand-text mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Partnering With Businesses, Delivering Excellence
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="border-2 border-brand-fresh/30 rounded-full p-4 group-hover:bg-brand-fresh group-hover:border-brand-fresh transition-all duration-300">
                <feature.icon className="w-6 h-6 text-brand-fresh group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-sm font-semibold text-brand-text">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-medium text-xs  leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}