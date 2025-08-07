import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pentestingIcon from "@/assets/pentesting-icon.png";
import codeReviewIcon from "@/assets/code-review-icon.png";
import consultingIcon from "@/assets/consulting-icon.png";

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
      description: "Strategic cybersecurity consulting to help you build robust security frameworks.",
      icon: consultingIcon,
      href: "#consulting",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Cyber</span> Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cybersecurity services to protect your digital assets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border hover:border-primary/50"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-contain group-hover:animate-glow-pulse"
                  />
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};