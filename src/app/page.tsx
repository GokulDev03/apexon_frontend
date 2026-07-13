import Hero from "@/sections/Hero";
import ServicesPreview from "@/sections/ServicesPreview";
import HowItWorks from "@/sections/HowItWorks";
import Stats from "@/sections/Stats";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
