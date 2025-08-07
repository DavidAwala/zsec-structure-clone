import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, FileText } from "lucide-react";

export const Training = () => {
  const trainingOptions = [
    {
      title: "Online Courses",
      description: "Learn ethical hacking and cybersecurity through comprehensive online courses with hands-on labs.",
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

  return (
    <section id="training" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            zSecurity is a leading provider of ethical hacking and cyber security training. 
            Learn the most up to date skills, tools and techniques to hack systems like black-hat hackers 
            and secure them like security experts!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trainingOptions.map((option, index) => (
            <Card 
              key={option.title}
              className="group hover:shadow-cyber transition-all duration-500 hover:-translate-y-2 bg-card border-border hover:border-primary/50"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <option.icon className="w-full h-full text-primary group-hover:text-primary-glow" />
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};