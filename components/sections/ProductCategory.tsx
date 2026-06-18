"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

const categories = [
  {
    title: "Vegetables",
    description:
      "Wide range of fresh vegetables sourced from trusted local and international growers.",
    image: "/images/vegetables.jpg",
  },
  {
    title: "Fruits",
    description:
      "From seasonal favorites to exotic fruits, we deliver freshness you can count on.",
    image: "/images/fruits.webp",
  },
  {
    title: "Herbs",
    description:
      "Fresh and aromatic herbs to enhance the flavor of every dish.",
    image: "/images/spics.webp",
  },
  {
    title: "Specialty Produce",
    description:
      "Unique and specialty items to meet the diverse needs of your business.",
    image: "/images/special.webp",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-brand-fresh text-sm font-semibold uppercase tracking-widest">
            Our Categories
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-brand-text mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Premium Quality Produce
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href="/products"
                className="group relative bg-white rounded-xl overflow-hidden border-2 border-brand-fresh hover:shadow-xl transition-all duration-300 block h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute top-42 left-5 z-20 bg-brand-fresh p-3 rounded-full shadow-md border-4 border-white">
                  <Leaf className="w-4 h-4 text-white" />
                </div>

                <div className="relative z-10 p-5 pt-8 flex flex-col gap-2 bg-white flex-1">
                  <h3 className="text-lg font-semibold text-brand-text">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-brand-fresh text-sm font-semibold mt-2 group-hover:gap-2.5 transition-all duration-200">
                    View Products
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
