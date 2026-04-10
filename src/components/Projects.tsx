import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Calendar, Users } from "lucide-react";
import dailyTaskImg from "@/assets/daily-task-agent.png";
import failureRiskImg from "@/assets/failure-risk-prediction.png";
import bookVibesImg from "@/assets/book-vibes.png";
import uapAlumniImg from "@/assets/uap-alumni-connect.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  website?: string;
  image?: string;
  stats?: {
    lines?: number;
    versions?: number;
    contributors?: number;
  };
}

const projects: Project[] = [
  {
    title: "Daily Task Prioritization Agent",
    description: "A full-stack intelligent task management application that helps users organize and prioritize daily to-do lists. Features a modern Next.js frontend with Tailwind CSS and a FastAPI backend for smart task logic and API integration.",
    tags: ["Next.js", "FastAPI", "Tailwind CSS"],
    category: "Full Stack",
    github: "https://github.com/mahiamOmO/Daily-task-prioritization-agent",
    image: dailyTaskImg,
    stats: { lines: 12000, versions: 5, contributors: 1 },
  },
  {
    title: "Failure Risk Prediction",
    description: "An ML-powered web application using XGBoost for predicting product or system failure risk. Built with Flask backend and HTML/CSS/Bootstrap frontend, demonstrating an end-to-end ML workflow with model serialization.",
    tags: ["XGBoost", "Flask", "Python", "Scikit-learn"],
    category: "AI/ML",
    github: "https://github.com/mahiamOmO/Failure-Risk-Prediction",
    website: "https://failure-risk-prediction.vercel.app",
    image: failureRiskImg,
    stats: { lines: 8500, versions: 3, contributors: 1 },
  },
  {
    title: "Book Vibes",
    description: "A Django-based online bookstore featuring product browsing, category search, user authentication, shopping cart, order placement, and e-book downloads. Complete e-commerce workflow implementation.",
    tags: ["Django", "HTML", "JavaScript", "Python"],
    category: "Full Stack",
    github: "https://github.com/mahiamOmO/Book_Vibes",
    image: bookVibesImg,
    stats: { lines: 15000, versions: 4, contributors: 1 },
  },
  {
    title: "UAP Alumni Connect",
    description: "A platform designed to connect University of Asia Pacific alumni through shared profiles, updates, and networking. Features alumni directory and community interaction system built with modern cloud technologies.",
    tags: ["Node.js", "React.js", "Firebase", "Tailwind CSS", "Express.js"],
    category: "Full Stack",
    github: "https://github.com/mahiamOmO/uap-alumni-connect-website",
    website: "https://uap-alumni-connect.web.app",
    image: uapAlumniImg,
    stats: { lines: 18000, versions: 6, contributors: 2 },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Projects With <span className="text-gradient">Impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card overflow-hidden hover:border-primary/30 transition-all group flex flex-col"
            >
              {/* Device Mockup */}
              {project.image && (
                <div className="relative bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-900 p-2 sm:p-3">
                  {/* Device Bezel */}
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-800">
                    <div className="relative bg-white dark:bg-card">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-800 dark:bg-gray-700 rounded-full"></div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs font-heading text-primary bg-primary/10 px-2 py-0.5 rounded-full w-fit mb-2">{project.category}</span>
                <h3 className="text-sm font-heading font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-3 border-t border-border/30">
                  {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
