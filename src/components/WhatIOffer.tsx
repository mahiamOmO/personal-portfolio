import { motion } from "framer-motion";

const WhatIOffer = () => {
  const services = [
    "fullstack-development",
    "n8n-automation",
    "frontend-dev",
    "backend-dev",
    "ai-ml-solutions",
    "api-integration",
    "state-mgmt",
    "mobile-responsive",
    "database-design",
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            What I <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gray-900 dark:bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-primary/20">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-muted-foreground font-mono">services.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 font-mono text-sm">
            <div className="mb-6">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground ml-2">ls -la services/</span>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <span className="text-primary">→</span>
                  <a href="#" className="text-primary ml-2 hover:text-primary/80 transition-colors hover:underline">
                    {service}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="border-t border-border/20 pt-6">
              <span className="text-primary">$</span>
              <span className="text-muted-foreground ml-2 animate-pulse">Select a service to view details...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIOffer;
