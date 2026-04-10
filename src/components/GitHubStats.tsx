import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const GitHubStats = () => {
  const contributionDays = Array.from({ length: 7 * 26 }, (_, i) => ({
    id: i,
    contributions: Math.floor(Math.random() * 5),
  }));

  const stats = [
    { icon: Github, label: "Contributions This Year", value: "500+", color: "text-primary" },
    { icon: Linkedin, label: "LinkedIn Followers", value: "5k+", color: "text-blue-500" },
  ];

  return (
    <section id="stats" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Activity</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            GitHub <span className="text-gradient">Contribution</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">Contribution Activity</h3>
            <div className="overflow-x-auto">
              <div className="flex gap-1 min-w-min">
                {Array.from({ length: 26 }).map((_, week) => (
                  <div key={week} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, day) => {
                      const intensity = Math.floor(Math.random() * 5);
                      const colors = [
                        "bg-secondary/30",
                        "bg-primary/40",
                        "bg-primary/60",
                        "bg-primary/80",
                        "bg-primary",
                      ];
                      return (
                        <div
                          key={`${week}-${day}`}
                          className={`w-3 h-3 rounded ${colors[intensity]} hover:ring-2 hover:ring-primary cursor-pointer transition-all`}
                          title={`${intensity} contributions`}
                        ></div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Darker color = more contributions</p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 flex items-center gap-4 hover:border-primary/30 transition-all"
                >
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <h3 className="text-2xl font-heading font-bold text-foreground">{stat.value}</h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
