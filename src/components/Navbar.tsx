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
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 glass-card px-3 py-2 flex gap-1 justify-center w-auto">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="p-2 rounded-lg hover:bg-primary/10 transition-colors group relative"
          title={item.label}
        >
          <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      ))}

      {/* Divider */}
      <div className="w-px h-5 bg-border mx-0.5 self-center" />

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-primary/10 transition-colors group"
        title={isDark ? "Light mode" : "Dark mode"}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
