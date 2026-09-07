import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentiators from "@/components/Differentiators";
import Services from "@/components/Services";
import SecurityCages from "@/components/SecurityCages";
import ServiceArea from "@/components/ServiceArea";
import Reviews from "@/components/Reviews";
import RequestServiceForm from "@/components/RequestServiceForm";
import FloatingCall from "@/components/FloatingCall";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-navy-900 focus:shadow-soft"
      >
        Skip to content
      </a>
      {/* DEMO ONLY — remove <DemoBanner /> when the client signs. */}
      <DemoBanner />
      <Header />
      <main id="main">
        <Hero />
        <Differentiators />
        <Services />
        <SecurityCages />
        <ServiceArea />
        <Reviews />
        <RequestServiceForm />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
