import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Mabusubhani786",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/mabusubhani-shaik-839b561b1",
      label: "LinkedIn",
    },
    // {
    //   icon: <Twitter className="w-5 h-5" />,
    //   href: "https://twitter.com",
    //   label: "Twitter",
    // },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:mabusubhanishaik566@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 text-center">
            {/* Logo/Name */}
            <h3 className="text-2xl font-bold font-display gradient-text mb-4">
              Mabusubhani Shaik
            </h3>
            <p className="text-muted-foreground mb-6">
              Full Stack Developer • Designing and building end-to-end web
              solutions
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

            {/* Copyright */}
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} Made with{" "}
              <Heart className="w-4 h-4 text-accent fill-accent" /> by
              Mabusubhani Shaik
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
