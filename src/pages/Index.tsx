import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Training } from "@/components/Training";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Training />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
