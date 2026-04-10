import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/mahiamOmO", label: "GitHub" },
    { icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, url: "https://linkedin.com/in/mahia-akter-momo", label: "LinkedIn" },
    { icon: Mail, url: "mailto:mahia@email.com", label: "Email" },
  ];

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto text-center space-y-6">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Text */}
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm font-body flex items-center justify-center gap-1">
            Developed with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by <span className="text-foreground font-medium">Mahia Akter Momo</span>
          </p>
          <p className="text-muted-foreground text-xs">
            © 2026 Mahia Akter Momo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
