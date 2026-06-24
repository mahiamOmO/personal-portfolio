import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import { Linkedin, Github, Mail, FileDown, Facebook, Twitter } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-2 sm:px-3 md:px-4 py-10 sm:py-14 md:py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center gap-2.5 sm:gap-3 md:gap-5 w-full md:w-auto md:min-w-[340px]"
        >
          {/* Glow effect */}
          <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-24 sm:w-40 md:w-48 lg:w-64 h-12 sm:h-20 md:h-24 lg:h-32 bg-primary/30 rounded-full blur-3xl -z-10" />
          
          {/* Card Container */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 rounded-lg sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-8 lg:p-10 w-full flex flex-col items-center gap-2 sm:gap-3 md:gap-5 shadow-xl">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border-4 border-primary/40 shadow-lg hover:shadow-2xl transition-shadow">
              <img src={profileImg} alt="Mahia Akter Momo" width={512} height={512} className="w-full h-full object-cover" />
            </div>
            <AnimatedText text="Mahia Akter Momo" className="text-base sm:text-xl md:text-3xl font-heading font-bold text-foreground text-center leading-tight" />
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center px-1">AI/ML Engineer & Full Stack Developer</p>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-muted-foreground">Open to work</span>
            </div>
            <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-1 sm:mt-2 md:mt-3 flex-wrap justify-center">
              <a href="https://www.linkedin.com/in/mahiamomo12/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2 md:p-2.5 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a href="https://github.com/mahiamOmO" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2 md:p-2.5 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Github className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a href="https://www.facebook.com/mahia.momo.12/" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2 md:p-2.5 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a href="mailto:mahiamomo12@gmail.com" className="p-2 sm:p-2 md:p-2.5 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
              </a>
            </div>
            <a href="#" download className="px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-heading font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
              Download CV <FileDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            </a>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1"
        >
          <p className="text-primary font-heading font-medium mb-1.5 sm:mb-2 md:mb-3 text-xs sm:text-sm md:text-base px-1">Build. Innovate. Impact.</p>
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-snug mb-2 sm:mb-3 md:mb-4 px-1">
            I am{" "}
            <AnimatedText 
              text="Mahia Akter Momo" 
              className="text-gradient"
            />
          </h1>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-relaxed px-1 sm:px-0">
            Founder of <span className="text-foreground font-medium">Nexuro AI</span> • AI/ML Intern at <span className="text-foreground font-medium">Agency Handy</span> • Full Stack Developer passionate about AI, Machine Learning, Computer Vision, and n8n Automation.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 sm:gap-3 md:gap-5 lg:gap-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-1 sm:px-0">
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-heading font-bold text-gradient">5+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-heading font-bold text-gradient">4+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Hackathons</p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-heading font-bold text-gradient">1+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Contests</p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-heading font-bold text-gradient">1+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Idea Comp</p>
            </div>
            <div className="hidden md:block text-center">
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-heading font-bold text-gradient">2+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 px-1 sm:px-0">
            <a href="#contact" className="px-4 sm:px-5 md:px-6 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-lg bg-primary text-primary-foreground font-heading font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity text-center">
              Let's Talk
            </a>
            <a href="#projects" className="px-4 sm:px-5 md:px-6 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-lg border border-border text-foreground font-heading font-medium text-xs sm:text-sm hover:bg-secondary transition-colors text-center">
              My Work →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
