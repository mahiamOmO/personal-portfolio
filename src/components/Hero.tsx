import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import { Linkedin, Github, Mail, FileDown, Facebook } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-10 lg:gap-12 relative z-10">
        
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center w-full max-w-[280px] sm:max-w-[300px] md:min-w-[300px] md:w-auto flex-shrink-0"
        >
          {/* Glow effect */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-20 bg-primary/30 rounded-full blur-3xl -z-10" />

          {/* Card Container */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/40 rounded-2xl px-6 py-7 w-full flex flex-col items-center gap-4 shadow-xl">
            {/* Profile Image */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-lg">
              <img src={profileImg} alt="Mahia Akter Momo" width={512} height={512} className="w-full h-full object-cover" />
            </div>

            {/* Name */}
            <AnimatedText
              text="Mahia Akter Momo"
              className="text-xl sm:text-2xl font-heading font-bold text-foreground text-center leading-tight"
            />

            {/* Title */}
            <p className="text-xs sm:text-sm text-muted-foreground text-center -mt-1">AI/ML Engineer & Full Stack Developer</p>

            {/* Open to work badge */}
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to work
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="https://www.linkedin.com/in/mahiamomo12/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
              <a href="https://github.com/mahiamOmO" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Github className="w-4 h-4 text-primary" />
              </a>
              <a href="https://www.facebook.com/mahia.momo.12/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="mailto:mahiamomo12@gmail.com" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors border border-primary/30">
                <Mail className="w-4 h-4 text-primary" />
              </a>
            </div>

            {/* Download CV */}
            <a
              href="/Mahia_Akter_Momo_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-heading font-semibold text-sm hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center gap-2"
            >
              Download CV <FileDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full text-center md:text-left"
        >
          <p className="text-primary font-heading font-medium mb-2 text-sm md:text-base">Build. Innovate. Impact.</p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight mb-4">
            I am{" "}
            <AnimatedText
              text="Mahia Akter Momo"
              className="text-gradient"
            />
          </h1>

          <p className="text-muted-foreground text-sm md:text-base max-w-lg mb-6 leading-relaxed mx-auto md:mx-0">
            Founder of <span className="text-foreground font-medium">Nexuro AI</span> • AI/ML Intern at{" "}
            <span className="text-foreground font-medium">Agency Handy</span> • Full Stack Developer passionate about AI,
            Machine Learning, Computer Vision, and n8n Automation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 max-w-sm sm:max-w-none mx-auto md:mx-0">
            {[
              { value: "5+", label: "Projects" },
              { value: "4+", label: "Hackathons" },
              { value: "1+", label: "Contests" },
              { value: "1+", label: "Idea Comp" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-medium text-sm hover:opacity-90 transition-opacity text-center"
            >
              Let's Talk
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-heading font-medium text-sm hover:bg-secondary transition-colors text-center"
            >
              My Work →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
