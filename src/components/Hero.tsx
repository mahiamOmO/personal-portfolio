import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import { Linkedin, Github, Mail, FileDown, Facebook, Twitter } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center gap-6 w-full md:w-auto md:min-w-[340px]"
        >
          {/* Glow effect */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/30 rounded-full blur-3xl -z-10" />
          
          {/* Card Container */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 rounded-3xl p-8 sm:p-10 w-full flex flex-col items-center gap-6 shadow-xl">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-primary/40 shadow-lg hover:shadow-2xl transition-shadow">
              <img src={profileImg} alt="Mahia Akter Momo" width={512} height={512} className="w-full h-full object-cover" />
            </div>
            <AnimatedText text="Mahia Akter Momo" className="text-2xl sm:text-3xl font-heading font-bold text-foreground text-center" />
            <p className="text-sm sm:text-base text-muted-foreground text-center">AI/ML Engineer & Full Stack Developer</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Open to work</span>
            </div>
            <div className="flex gap-3 sm:gap-4 mt-2 flex-wrap justify-center">
              <a href="https://www.linkedin.com/in/mahiamomo12/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a href="https://github.com/mahiamOmO" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a href="https://www.facebook.com/mahia.momo.12/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a href="mailto:mahiamomo12@gmail.com" className="p-2.5 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
            </div>
            <a href="#" download className="px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-heading font-semibold text-sm hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2">
              Download CV <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
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
          <p className="text-primary font-heading font-medium mb-2 sm:mb-3 text-sm sm:text-base">Build. Innovate. Impact.</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight mb-4">
            I am{" "}
            <AnimatedText 
              text="Mahia Akter Momo" 
              className="text-gradient"
            />
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg mb-6 sm:mb-8 leading-relaxed">
            Founder of <span className="text-foreground font-medium">Nexuro AI</span> • AI/ML Intern at <span className="text-foreground font-medium">Agency Handy</span> • Full Stack Developer passionate about AI, Machine Learning, Computer Vision, and n8n Automation.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-gradient">5+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-gradient">4+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Hackathons</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-gradient">1+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Contests</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-gradient">1+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Idea Comp</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-bold text-gradient">2+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-primary text-primary-foreground font-heading font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity text-center">
              Let's Talk
            </a>
            <a href="#projects" className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-border text-foreground font-heading font-medium text-xs sm:text-sm hover:bg-secondary transition-colors text-center">
              My Work →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
