import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bug, Shield } from "lucide-react";

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bug Bounty */}
          <Card className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border hover:border-primary/50">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all">
                <Bug className="w-full h-full text-primary group-hover:text-primary-glow" />
              </div>
              <CardTitle className="text-2xl text-primary group-hover:text-primary-glow transition-colors">
                Bug Bounty
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground mb-6 text-lg">
                Bug-Bounty is a crowd-sourced vulnerability disclosure platform designed to 
                affordably keep software secure and bug free.
              </CardDescription>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                Learn more
              </Button>
            </CardContent>
          </Card>

          {/* VPN Service */}
          <Card className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card border-border hover:border-primary/50">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all">
                <Shield className="w-full h-full text-primary group-hover:text-primary-glow" />
              </div>
              <CardTitle className="text-2xl text-primary group-hover:text-primary-glow transition-colors">
                ZSVPN
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground mb-6 text-lg">
                ZSVPN allows us to take another step towards a safer internet that is free from 
                censorship and surveillance. Protect your privacy using our state of the art VPN servers.
              </CardDescription>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                Learn more
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};