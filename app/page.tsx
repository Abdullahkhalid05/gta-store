import DeliveryMap from "@/components/sections/DeliveryMap";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductCategories from "@/components/sections/ProductCategory";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategories/>
      <DeliveryMap/>
      <HowItWorks/>
      <WhyChooseUs/>
    </main>
  );
}