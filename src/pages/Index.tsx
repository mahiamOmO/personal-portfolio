import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import WhatIOffer from "@/components/WhatIOffer";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Competitions from "@/components/Competitions";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Extras from "@/components/Extras";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <WhatIOffer />
      <About />
      <Projects />
      <GitHubStats />
      <Competitions />
      <Blog />
      <Certifications />
      <Extras />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
