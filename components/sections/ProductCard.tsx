import Image from "next/image";
import { Package, Calendar } from "lucide-react";
import type { Product } from "@/lib/Products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl border-2 border-border overflow-hidden hover:border-brand-fresh hover:shadow-lg transition-all duration-300 flex flex-row sm:flex-col">
  
      <div className="relative w-32 sm:w-full h-32 sm:h-48 shrink-0 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 128px, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="p-3 sm:p-5 flex flex-col gap-1.5 sm:gap-3 flex-1 min-w-0">
        <h3 className="text-sm sm:text-lg font-semibold text-brand-text line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
          {product.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-brand-fresh font-medium">
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          {product.availability}
        </div>

        <div className="hidden sm:flex items-start gap-2 text-xs text-muted-foreground">
          <Package className="w-3.5 h-3.5 mt-0.5 shrink-0" />
          <span>{product.packaging.join(", ")}</span>
        </div>

        <button className="mt-auto bg-brand-fresh hover:bg-green-500 text-white text-xs sm:text-sm font-semibold py-1.5 sm:py-2.5 rounded-md transition-colors duration-200 w-fit sm:w-full px-4 sm:px-0">
          Request a Quote
        </button>
      </div>
    </div>
  );
}