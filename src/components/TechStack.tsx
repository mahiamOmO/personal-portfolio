import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap, SiPython, SiDjango, SiFastapi, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiSupabase, SiTensorflow, SiPytorch, SiScikitlearn, SiOpenai, SiOpencv, SiGit } from "react-icons/si";

const technologies = {
  frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  ],
  backend: [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#13AA52" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  ],
  tools: [
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "OpenAI", icon: SiOpenai, color: "#412991" },
    { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
    { name: "Computer Vision", icon: SiOpencv, color: "#5C3EE8" },
    { name: "Git", icon: SiGit, color: "#F1502F" },
  ],
};

const TechCard = ({ name, icon: Icon, color }: { name: string; icon: any; color: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/10 transition-all cursor-pointer group min-h-[120px]"
  >
    <Icon style={{ color: color }} size={40} className="sm:w-12 sm:h-12" />
    <p className="text-xs sm:text-sm font-medium text-foreground text-center line-clamp-2">{name}</p>
  </motion.div>
);

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-heading font-bold mb-2">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-sm">Technologies I work with</p>
        </motion.div>

        {/* Frontend */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-6 text-center">Frontend</h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          >
            {technologies.frontend.map((tech) => (
              <motion.div key={tech.name} variants={itemVariants}>
                <TechCard {...tech} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Backend */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-6 text-center">Backend</h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {technologies.backend.map((tech) => (
              <motion.div key={tech.name} variants={itemVariants}>
                <TechCard {...tech} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tools & Libraries */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-6 text-center">Tools & Libraries</h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
          >
            {technologies.tools.map((tech) => (
              <motion.div key={tech.name} variants={itemVariants}>
                <TechCard {...tech} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
