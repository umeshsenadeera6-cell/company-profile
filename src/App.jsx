import React from "react";
import "./index.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import CompanyValues from "./components/CompanyValues";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main className="relative flex flex-col gap-24 lg:gap-32">
        <div className="px-[5%] pt-20">
          <Hero />
        </div>

        <About />
        
        <Services />
        
        <CompanyValues />
        
        <Destinations />
        
        <Team />
        
        <Testimonials />
        
        <Contact />
      </main>

      
      <FooterSection />
    </div>
  );
}

