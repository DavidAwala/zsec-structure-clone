import { Button } from "@/components/ui/button";
import cyberDnaImage from "@/assets/cyber-dna.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 opacity-30">
        <img 
          src={cyberDnaImage} 
          alt="Cyber DNA" 
          className="w-full h-full object-contain animate-cyber-float"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-primary animate-glow-pulse">zSec</span>
            <span className="text-muted-foreground">.... </span>
            <span className="text-primary animate-glow-pulse">what?!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Everything related to ethical hacking & cyber security in one place.
          </p>

          <p className="text-lg md:text-xl text-primary mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Cyber Security is in our DNA!
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button variant="hero" size="lg" className="shadow-glow">
              Tell me more
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};