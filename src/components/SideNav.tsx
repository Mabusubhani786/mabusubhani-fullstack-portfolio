import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const socialLinks = [
  { href: "https://github.com", icon: <Github className="w-5 h-5" />, label: "GitHub" },
  { href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
  { href: "https://twitter.com", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
  { href: "mailto:mabusubhanishaik566@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" },
];

const SideNav = () => {
  return (
    <>
      {/* Desktop Side Nav - Social Icons Only */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 p-3 glass-card">
        {/* Social Links with dull opacity */}
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center opacity-40 hover:opacity-100 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 group"
            aria-label={link.label}
          >
            {link.icon}
            <span className="absolute left-14 px-2 py-1 rounded-lg bg-card text-foreground text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {link.label}
            </span>
          </a>
        ))}

        {/* Divider */}
        <div className="w-full h-px bg-border/50 my-1" />

        {/* Theme Toggle */}
        <ThemeToggle />
      </nav>

      {/* Mobile Bottom Nav - Minimal */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-3 p-2 glass-card">
        {socialLinks.slice(0, 3).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-primary/20 transition-all duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </>
  );
};

export default SideNav;
