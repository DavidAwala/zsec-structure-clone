import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const Training = () => {
  const trainingOptions = [
    {
      title: "Online Courses",
      description: "Learn ethical hacking and cybersecurity through comprehensive online courses.",
      icon: BookOpen,
      href: "#courses",
    },
    {
      title: "One-On-One Training",
      description: "Personalized training sessions tailored to your specific needs and skill level.",
      icon: Users,
      href: "#personal-training",
    },
    {
      title: "Community Articles & Tutorials",
      description: "Access our extensive library of articles, tutorials, and community-driven content.",
      icon: FileText,
      href: "#community",
    },
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Icon pop effect
  const iconVariants = {
    hidden: { scale: 1 },
    visible: { scale: [1, 1.2, 0.85, 1], transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <section id="training" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Title + description */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            zSecurity is a leading provider of ethical hacking and cyber security training.
            Learn the most up to date skills, tools and techniques to hack systems like black-hat hackers
            and secure them like security experts!
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trainingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-cyber transition-all duration-500 hover:-translate-y-2 bg-card border-border hover:border-primary/50">
                <CardHeader className="text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all"
                    variants={iconVariants}
                  >
                    <option.icon className="w-full h-full text-primary group-hover:text-primary-glow" />
                  </motion.div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-6">
                    {option.description}
                  </CardDescription>
                  <Button variant="cyber" className="w-full">
                    Get Started
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
