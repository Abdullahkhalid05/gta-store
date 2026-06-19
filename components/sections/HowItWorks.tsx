"use client";

import { motion } from "framer-motion";
import { FileText, DollarSign, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Request a Quote",
    description: "Tell us what you need using our quick quote form.",
  },
  {
    number: "2",
    icon: DollarSign,
    title: "Receive Pricing",
    description: "We provide the best wholesale pricing for your business.",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Confirm Your Order",
    description: "Review and confirm your order with our team.",
  },
  {
    number: "4",
    icon: Truck,
    title: "We Deliver",
    description: "Fresh produce delivered on time, every time across Ontario.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
            How It Works
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-brand-text mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Simple Process. Fresh Results.
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-brand-fresh/30 -z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center gap-4"
            >
              <div className="relative">
                <div className="bg-white border-2 border-brand-fresh rounded-full p-5 shadow-sm relative z-10">
                  <step.icon className="w-7 h-7 text-brand-fresh" />
                </div>
                <div className="absolute -top-2 -right-2 bg-brand-fresh text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center z-20 shadow-md">
                  {step.number}
                </div>
              </div>

              <h3 className="text-base font-semibold text-brand-text">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}