import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ];

  const links = {
    services: [
      { label: "Penetration Testing", href: "#pentesting" },
      { label: "Code Review", href: "#code-review" },
      { label: "Consulting", href: "#consulting" },
    ],
    training: [
      { label: "Online Courses", href: "#courses" },
      { label: "One-on-One", href: "#personal-training" },
      { label: "Community", href: "#community" },
    ],
    products: [
      { label: "Bug Bounty", href: "#bug-bounty" },
      { label: "ZSVPN", href: "#vpn" },
    ],
  };

  return (
    <footer className="bg-cyber-darker border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">z</span>
              <span className="text-foreground">Security</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Everything related to ethical hacking & cyber security in one place. 
              Cyber Security is in our DNA!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Training</h3>
            <ul className="space-y-2">
              {links.training.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {links.products.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} zSecurity. All rights reserved. | Cyber Security is in our DNA!
          </p>
        </div>
      </div>
    </footer>
  );
};