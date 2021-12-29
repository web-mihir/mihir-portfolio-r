import './css/style.css';
import { ScrollEffect } from "./Components/Extra-Features/ScrollEffect";
import { HeaderSection } from "./Components/HeaderSection";
import { HeroSection } from "./Components/HeroSection";
import { AboutSection } from "./Components/AboutSection";
import { SkillSection } from "./Components/SkillSection";
import { ServiceSection } from "./Components/ServiceSection";
import { SubscribeSection } from "./Components/SubscribeSection";
import { PortfolioSection } from "./Components/PortfolioSection";
import { Testimonials } from "./Components/Testimonials";
import { FaqSection } from "./Components/FaqSection";
import { ContactSection } from "./Components/ContactSection";
import { FooterSection } from "./Components/FooterSection";

function App() {
  return (
    <>
      <ScrollEffect />
      <HeaderSection />
      <main className="full-body">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ServiceSection />
        <SubscribeSection />
        <PortfolioSection />
        <Testimonials />
        <FaqSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );

}
export default App;
