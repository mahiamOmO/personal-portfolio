import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Founder and CEO",
    company: "Nexuro AI",
    period: "Mar 2026 – Present",
    description: "Building AI-powered solutions and leading a team of developers.",
  },
  {
    title: "AI Data Annotation and Quality Intern",
    company: "Agency Handy",
    period: "Dec 2025 – Mar 2026",
    description: "Worked on AI data annotation, quality assurance, image labelling, and training data preparation.",
  },
  {
    title: "Content Management & SQA Testing",
    company: "Joyoli Publication Ltd",
    period: "Sep – Oct 2025",
    description: "Managed content and website operations, and conducted software quality assurance testing.",
  },
];

const education = [
  {
    degree: "Computer Science & Engineering, CSE",
    school: "University of Asia Pacific",
    period: "2022 – 2026",
    grade: "",
  },
  {
    degree: "HSC, Science",
    school: "Begum Badrunnessa Govt Girls College",
    period: "Jun 2018 – Mar 2020",
    grade: "GPA 5.00",
  },
  {
    degree: "SSC, Science",
    school: "Ahmed Bawany Academy School & College",
    period: "Jan 2009 – Jan 2018",
    grade: "GPA 5.00",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-16"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-heading font-semibold">Experience</h3>
            </div>
            <div className="space-y-6 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <p className="text-xs text-muted-foreground mb-1">{exp.period}</p>
                  <h4 className="font-heading font-semibold text-foreground">{exp.title}</h4>
                  <p className="text-primary text-sm">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-1">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-heading font-semibold">Education</h3>
            </div>
            <div className="space-y-6 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <p className="text-xs text-muted-foreground mb-1">{edu.period}</p>
                  <h4 className="font-heading font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary text-sm">{edu.school}</p>
                  {edu.grade && <p className="text-muted-foreground text-sm mt-1">Grade: {edu.grade}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
