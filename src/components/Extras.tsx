import { motion } from "framer-motion";
import { Award } from "lucide-react";

const ambassadors = [
  {
    title: "Phitron",
    organization: "Campus Ambassador",
    description: "Served as campus ambassador for Phitron, promoting their initiatives and supporting community engagement.",
  },
  {
    title: "International Leadership Competition",
    organization: "Campus Associate",
    description: "Represented the institution in international leadership competitions, fostering global academic connections.",
  },
  {
    title: "English Carnival Bangladesh",
    organization: "Campus Ambassador",
    description: "Served as campus ambassador for English Carnival Bangladesh, promoting language and cultural activities.",
  },
  {
    title: "Creative IT Institute",
    organization: "Campus Ambassador",
    description: "Represented Creative IT Institute on campus, promoting technical education and skill development initiatives.",
  },
  {
    title: "Interactive Cares",
    organization: "Campus Ambassador",
    description: "Engaged with Interactive Cares community initiatives, promoting social responsibility and care programs.",
  },
];

const Extras = () => {
  return (
    <section id="extras" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2 sm:mb-3 md:mb-4">
            Extra <span className="text-gradient">Curricular Activity</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            My involvement in campus activities and leadership roles
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {ambassadors.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-4 sm:p-6 hover:border-primary/50 transition-colors border border-border"
            >
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-foreground text-xs sm:text-sm mb-1">
                    {a.title}
                  </h3>
                  <p className="text-xs text-primary">{a.organization}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Extras;
