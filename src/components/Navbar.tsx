import { useState, useEffect } from "react";
import { Home, User, FolderOpen, BookOpen, Mail, Moon, Sun } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: BookOpen, label: "Blog", href: "#blog" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed top-2 sm:top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 glass-card px-1.5 sm:px-2 py-1.5 sm:py-2 flex gap-0.5 sm:gap-0.5 md:gap-1 justify-center sm:justify-start w-[98%] sm:w-auto">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="p-1.5 sm:p-2 md:p-2.5 rounded-lg hover:bg-primary/10 transition-colors group relative"
          title={item.label}
        >
          <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      ))}
      
      {/* Theme Toggle */}
      <div className="w-px h-4 sm:h-5 md:h-6 bg-border mx-0.5" />
      <button
        onClick={toggleTheme}
        className="p-1.5 sm:p-2 md:p-2.5 rounded-lg hover:bg-primary/10 transition-colors group"
        title={isDark ? "Light mode" : "Dark mode"}
      >
        {isDark ? (
          <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        ) : (
          <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
