import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bug, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const Products = () => {
  // Card entrance from left or right
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // Icon spin + pop
  const iconVariants = {
    hidden: { rotate: 0, scale: 0.8, opacity: 0 },
    visible: {
      rotate: 360,
      scale: [0.8, 1.2, 1],
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bug Bounty */}
          <motion.div
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Card className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border hover:border-primary/50">
              <CardHeader className="text-center">
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all"
                  variants={iconVariants}
                >
                  <Bug className="w-full h-full text-primary group-hover:text-primary-glow" />
                </motion.div>
                <CardTitle className="text-2xl text-primary group-hover:text-primary-glow transition-colors">
                  Bug Bounty
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 text-lg">
                  Bug-Bounty is a crowd-sourced vulnerability disclosure platform designed to
                  affordably keep software secure and bug free.
                </CardDescription>
                <Button
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* VPN Service */}
          <motion.div
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Card className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border hover:border-primary/50">
              <CardHeader className="text-center">
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all"
                  variants={iconVariants}
                >
                  <Shield className="w-full h-full text-primary group-hover:text-primary-glow" />
                </motion.div>
                <CardTitle className="text-2xl text-primary group-hover:text-primary-glow transition-colors">
                  ZSVPN
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 text-lg">
                  ZSVPN allows us to take another step towards a safer internet that is free from
                  censorship and surveillance. Protect your privacy using our state of the art VPN servers.
                </CardDescription>
                <Button
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
