import { motion } from "framer-motion";
import { Trophy, Users, Lightbulb } from "lucide-react";

interface CompetitionItem {
  title: string;
  issuer: string;
  achievement: string;
  icon: React.ReactNode;
}

const competitions: CompetitionItem[] = [
  {
    title: "Solvio AI Hackathon",
    issuer: "Sheba Platform Ltd",
    achievement: "Phase 2 Selected - Top 394 rank out of 3,259+ teams",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: "Technovation25 Hackathon",
    issuer: "Josephite IT Club (In Collaboration With Programming Hero)",
    achievement: "Team BlockX - Top 10 position out of 55 teams",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: "INNOVATEX 2025 Hackathon",
    issuer: "Software & Hardware Club, CSE UAP",
    achievement: "Team Asgardian - Top 20 in Final round",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: "IDEA Season 4.0",
    issuer: "Entrepreneurship and Career Development Club of UAP",
    achievement: "Team Innovators - Top 10 out of 42 submissions",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    title: "MIST Hackathon – Inventious 4.1",
    issuer: "MIST Innovation Club",
    achievement: "Finalist round selection",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    title: "UAP Intra University Collaborative Programming Contest 1.0",
    issuer: "UAP Programming Contest Club",
    achievement: "Top 40 out of 70+ teams",
    icon: <Users className="w-5 h-5" />,
  },
];

const Competitions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="competitions" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Competition <span className="text-gradient">Participation</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            My journey through hackathons, contests, and idea competitions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {competitions.map((competition, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 hover:border-primary/50 transition-colors border border-border"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {competition.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {competition.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{competition.issuer}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {competition.achievement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Competitions;
