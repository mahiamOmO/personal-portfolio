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
    <section id="extras" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Extra <span className="text-gradient">Curricular Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            My involvement in campus activities and leadership roles
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ambassadors.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover:border-primary/50 transition-colors border border-border"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {a.title}
                  </h3>
                  <p className="text-xs text-primary">{a.organization}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Extras;
