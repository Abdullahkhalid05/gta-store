"use client";

import { useState } from "react";
import { products } from "@/lib/Products";
import { Search, Leaf } from "lucide-react";
import ProductCard from "@/components/sections/ProductCard";

const categories = [
  "all",
  "fruits",
  "vegetables",
  "greens-salads",
  "nuts",
  "specialty",
  "organics",
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("all");

  const filteredProducts = products.filter(
    (product) =>
      (selected === "all" || product.category === selected) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-border py-4 mb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="relative max-w-md mx-auto mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="w-full pl-11 pr-4 py-2.5 border border-border rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-fresh"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border-2 transition-colors capitalize ${
                  selected === cat
                    ? "bg-brand-fresh text-white border-brand-fresh"
                    : "bg-white text-brand-text border-border hover:border-brand-fresh"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <div className="bg-brand-light p-4 rounded-full">
              <Leaf className="w-8 h-8 text-brand-fresh" />
            </div>
            <h3 className="text-lg font-semibold text-brand-text">
              No Products Found
            </h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              Try adjusting your search or browsing a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}