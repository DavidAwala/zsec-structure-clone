import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pentestingIcon from "@/assets/pentesting-icon.png";
import codeReviewIcon from "@/assets/code-review-icon.png";
import consultingIcon from "@/assets/consulting-icon.png";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      title: "PenTesting",
      description: "Comprehensive penetration testing to identify vulnerabilities in your systems and applications.",
      icon: pentestingIcon,
      href: "#pentesting",
    },
    {
      title: "Code Review",
      description: "Expert code analysis to find security flaws and improve your application's security posture.",
      icon: codeReviewIcon,
      href: "#code-review",
    },
    {
      title: "Consulting",
      description: "Strategic cybersecurity consulting to help you build robust security frameworks with everything to make it work.",
      icon: consultingIcon,
      href: "#consulting",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, delay: 0.4, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { scale: 1 },
    visible: { scale: [1, 1.2, 0.85, 1], transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Cyber</span> Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cybersecurity services to protect your digital assets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border hover:border-primary/50">
                <CardHeader className="text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-4 relative"
                    variants={iconVariants}
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:animate-glow-pulse"
                    />
                  </motion.div>
                  <CardTitle className="text-2xl text-primary group-hover:text-primary-glow transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
