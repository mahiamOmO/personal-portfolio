import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
  description: string;
  image?: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Break the Barrier - Public Speaking Workshop",
    issuer: "UAP Central English Language Club",
    date: "Apr 2023",
    credentialLink: "https://drive.google.com/drive/folders/1euFckpJwaFSXtYM9h1PQajd83XYScY94",
    description: "Certificate of Participation for mastering the art of public speaking. Grateful for the experience and knowledge gained.",
  },
  {
    title: "UAP Intra University Collaborative Programming Contest 1.0",
    issuer: "UAP Programming Contest Club",
    date: "Jan 2024",
    credentialLink: "https://drive.google.com/drive/folders/1euFckpJwaFSXtYM9h1PQajd83XYScY94",
    description: "Participated and earned certificate in the inter-university collaborative programming contest with talented peers from various universities.",
  },
  {
    title: "Hackathon INNOVATEX 2025",
    issuer: "Software & Hardware Club, CSE UAP",
    date: "May 2025",
    credentialLink: "https://drive.google.com/drive/folders/1euFckpJwaFSXtYM9h1PQajd83XYScY94",
    description: "Participated in the first inter-university hackathon INNOVATEX 2025. Team Asgardian reached Top 20 in the final round.",
  },
  {
    title: "Hackathon Training Session",
    issuer: "Innovative Skills LTD",
    date: "Dec 2024",
    credentialLink: "https://drive.google.com/drive/folders/1euFckpJwaFSXtYM9h1PQajd83XYScY94",
    description: "Completed hackathon training session focusing on teamwork and practical problem-solving skills.",
  },
];

const Certifications = () => {
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
    <section id="certifications" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Professional certifications and course completions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden hover:border-primary/50 transition-colors border border-border"
            >
              {cert.image && (
                <div className="relative h-40 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground text-sm">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-primary mt-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.date}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                {cert.credentialLink && (
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View Credential →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
