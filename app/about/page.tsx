"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Leaf,
  Target,
  Eye,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";

const qualityPoints = [
  {
    icon: Leaf,
    title: "Sourced Fresh",
    description: "Every order is sourced directly from trusted suppliers at the Ontario Food Terminal.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checked",
    description: "Each shipment is inspected for freshness and quality before it leaves our facility.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "We deliver on schedule, every time, so your business never runs short.",
  },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Freshness You Can Trust.
              <span className="block text-brand-fresh">Quality You Can Taste.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col gap-5"
          >
            <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-brand-text"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Who We Are
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Nature's Grown is a wholesale produce company committed to
              supplying Ontario businesses with premium fruits and
              vegetables. We combine exceptional product quality, dependable
              service, and province wide delivery to help our customers
              succeed. Whether you're operating a local restaurant, grocery
              chain, or independent market, Nature's Grown provides the
              fresh produce solutions your business needs to grow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-brand-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 border border-border flex flex-col gap-4"
            >
              <div className="bg-brand-light p-3 rounded-lg w-fit">
                <Target className="w-6 h-6 text-brand-fresh" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To deliver the freshest produce to Ontario businesses with
                reliability, transparency, and care so our partners never
                have to compromise on quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-border flex flex-col gap-4"
            >
              <div className="bg-brand-light p-3 rounded-lg w-fit">
                <Eye className="w-6 h-6 text-brand-fresh" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To become Ontario's most trusted wholesale produce partner,
                known for consistency, quality, and genuine partnership with
                every business we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
              Our Commitment
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold text-brand-text mt-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quality at Every Step
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {qualityPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-6 border border-border rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-brand-light p-3 rounded-full">
                  <point.icon className="w-6 h-6 text-brand-fresh" />
                </div>
                <h3 className="text-base font-semibold text-brand-text">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-5"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Partner With Us?
            </h3>
            <p className="text-white/70 text-sm max-w-md">
              Let's discuss how Nature's Grown can support your business with
              fresh, reliable produce supply.
            </p>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 bg-brand-fresh hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 hover:scale-105"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}