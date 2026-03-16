import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProcessSection from "./components/sections/ProcessSection";
import ValuesSection from "./components/sections/ValuesSection";
import BackofficeSection from "./components/sections/BackofficeSection";
import PricingSection from "./components/sections/PricingSection";
import CatalogSection from "./components/sections/CatalogSection";
import KpiSection from "./components/sections/KpiSection";
import CtaSection from "./components/sections/CtaSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-slate-600">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ValuesSection />
        <BackofficeSection />
        <PricingSection />
        <CatalogSection />
        <KpiSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
