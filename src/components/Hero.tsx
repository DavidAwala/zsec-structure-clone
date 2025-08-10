import { Button } from "@/components/ui/button";
import cyberDnaImage from "@/assets/cyber-dna.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background black → gradient glow */}
      <div className="absolute inset-0 bg-gradient-glow animate-gradient-fade-pulse"></div>

      {/* Right-side floating image with scroll animation */}
      <div className="absolute top-0 right-0 h-full w-1/2 flex items-center justify-end pointer-events-none">
        <motion.img
          src={cyberDnaImage}
          alt="Cyber DNA"
          style={{
            width: "90rem",
            height: "32rem",
            marginTop: "2vh",
            marginRight: "2vw",
            maxWidth: "600px",
            maxHeight: "90rem",
          }}
          className="animate-cyber-float"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4, delay: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-8 py-20 flex flex-col md:flex-row items-center md:items-start relative z-10">
        <div className="w-full md:w-1/2 md:text-left text-center">
          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <span className="text-primary animate-glow-pulse">zSec</span>
            <span className="text-muted-foreground">.... </span>
            <span className="text-primary animate-glow-pulse">what?!</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: false }}
          >
            Everything related to ethical hacking & cyber security in one place.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-primary mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: false }}
          >
            Cyber Security is in our DNA!
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <Button variant="hero" size="lg" className="shadow-glow">
              Tell me more
            </Button>
          </motion.div>
        </div>

        {/* Optional spacing on desktop */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </section>
  );
};
