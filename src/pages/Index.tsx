import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Stats } from "@/components/sections/Stats";

const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
