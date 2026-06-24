import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import { Linkedin, Github, Mail, FileDown, Facebook } from "lucide-react";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-12 lg:gap-16 relative z-10">

        {/* ── Profile Card ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex-shrink-0 w-full max-w-[260px] sm:max-w-[280px] md:w-[280px] lg:w-[300px]"
        >
          {/* Glow */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-16 bg-primary/25 rounded-full blur-3xl -z-10" />

          {/* Card */}
          <div
            className="w-full flex flex-col items-center gap-4 rounded-2xl px-6 py-8 shadow-2xl"
            style={{
              background: "linear-gradient(145deg, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.07) 100%)",
              border: "1.5px solid rgba(59,130,246,0.45)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Profile Image */}
            <div
              className="w-40 h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-lg"
              style={{ border: "2px solid rgba(59,130,246,0.5)" }}
            >
              <img
                src={profileImg}
                alt="Mahia Akter Momo"
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-xl font-heading font-bold text-foreground text-center leading-tight">
              Mahia Akter Momo
            </h2>

            {/* Title */}
            <p className="text-xs text-muted-foreground text-center -mt-2">
              AI/ML Engineer & Full Stack Developer
            </p>

            {/* Open to work */}
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span
                className="w-2 h-2 rounded-full bg-emerald-400"
                style={{ boxShadow: "0 0 6px #34d399", animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
              />
              Open to work
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 flex-wrap justify-center">
              {[
                { href: "https://www.linkedin.com/in/mahiamomo12/", Icon: Linkedin },
                { href: "https://github.com/mahiamOmO", Icon: Github },
                { href: "https://www.facebook.com/mahia.momo.12/", Icon: Facebook },
                { href: "mailto:mahiamomo12@gmail.com", Icon: Mail },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors"
                  style={{
                    background: "rgba(59,130,246,0.18)",
                    border: "1px solid rgba(59,130,246,0.35)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(59,130,246,0.38)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(59,130,246,0.18)")}
                >
                  <Icon className="w-4 h-4 text-primary" />
                </a>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="/Mahia_Akter_Momo_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white font-heading font-semibold text-sm flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/40"
            >
              Download CV <FileDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* ── Intro Text ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full text-center md:text-left min-w-0"
        >
          <p className="text-primary font-heading font-medium mb-3 text-sm md:text-base tracking-wide">
            Build. Innovate. Impact.
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-5">
            I am{" "}
            <AnimatedText text="Mahia Akter Momo" className="text-gradient" />
          </h1>

          <p className="text-muted-foreground text-sm md:text-base max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
            Founder of <span className="text-foreground font-semibold">Nexuro AI</span> • AI/ML Intern at{" "}
            <span className="text-foreground font-semibold">Agency Handy</span> • Full Stack Developer passionate
            about AI, Machine Learning, Computer Vision, and n8n Automation.
          </p>

          {/* Stats — always 4 columns */}
          <div className="grid grid-cols-4 gap-3 sm:gap-6 mb-8 max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0">
            {[
              { value: "5+", label: "Projects" },
              { value: "4+", label: "Hackathons" },
              { value: "1+", label: "Contests" },
              { value: "1+", label: "Idea Comp" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient leading-none">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-7 py-3 rounded-lg bg-primary text-white font-heading font-semibold text-sm hover:opacity-90 transition-opacity text-center"
            >
              Let's Talk
            </a>
            <a
              href="#projects"
              className="px-7 py-3 rounded-lg border border-border text-foreground font-heading font-medium text-sm hover:bg-secondary transition-colors text-center"
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
