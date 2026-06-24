import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Github, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2 sm:mb-3 md:mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            I'm always open to discussing new projects, opportunities, and ideas. Let's connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <a href="mailto:mahiamomo12@gmail.com" className="text-xs sm:text-sm text-foreground hover:text-primary transition-colors font-body break-all">mahiamomo12@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/mahiamomo12/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-foreground hover:text-primary transition-colors font-body break-all">
                    linkedin.com/in/mahiamomo12
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">GitHub</p>
                  <a href="https://github.com/mahiamOmO" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-foreground hover:text-primary transition-colors font-body break-all">
                    github.com/mahiamOmO
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                  <p className="text-xs sm:text-sm text-foreground font-body">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-xs sm:text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-xs sm:text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-xs sm:text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="w-full py-2 sm:py-3 rounded-lg bg-primary text-primary-foreground font-heading font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
