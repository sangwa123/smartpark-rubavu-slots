
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DemoPreview from "@/components/DemoPreview";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <DemoPreview />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
