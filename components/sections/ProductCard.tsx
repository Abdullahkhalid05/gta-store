import Image from "next/image";
import { Package, Calendar } from "lucide-react";
import type { Product } from "@/lib/Products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl border-2 border-border overflow-hidden hover:border-brand-fresh hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-semibold text-brand-text">{product.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-brand-fresh font-medium">
          <Calendar className="w-3.5 h-3.5" />
          {product.availability}
        </div>

        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <Package className="w-3.5 h-3.5 mt-0.5 shrink-0" />
          <span>{product.packaging.join(", ")}</span>
        </div>

        <button className="mt-auto bg-brand-fresh hover:bg-green-500 text-white text-sm font-semibold py-2.5 rounded-md transition-colors duration-200">
          Request a Quote
        </button>
      </div>
    </div>
  );
}