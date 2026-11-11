import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import ServicesGrid from "../components/ServicesGrid";
import ServiceBlocks from "../components/ServiceBlocks";
import Brands from "../components/Brands";
import WhyUs from "../components/WhyUs";
import ServiceAreas from "../components/ServiceAreas";
import ReviewCta from "../components/ReviewCta";
import EmergencyCta from "../components/EmergencyCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <ServicesGrid />
      <ServiceBlocks />
      <Brands />
      <WhyUs />
      <ServiceAreas />
      <ReviewCta />
      <EmergencyCta />
    </>
  );
}
