import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import ScrollIndicator from "@/components/scrollindicator";
import { Services } from "@/components/Services";
import { Training } from "@/components/Training";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


import React from "react";
import { motion, useSpring, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        originX: 0,
        backgroundColor: "#ff3434ff",
        zIndex: 9999,
      }}
    />
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Scroll bar at the top */}
      <ScrollProgress />
      <ScrollIndicator />
      <Header />
      <Hero />

      {/* Section divider */}
      <div
        style={{
          margin: 0,
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "1px",
          backgroundColor: "white",
          zIndex: 0,
        }}
      >
        <div
          style={{
            width: "6px",
            height: "6rem",
            borderRadius: "20%",
            backgroundColor: "#ff3434ff",
          }}
        ></div>
      </div>

      <Services />

      {/* Section divider */}
      <div
        style={{
          margin: 0,
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "1px",
          backgroundColor: "white",
          zIndex: 0,
        }}
      >
        <div
          style={{
            width: "6px",
            height: "6rem",
            borderRadius: "20%",
            backgroundColor: "#ff3434ff",
          }}
        ></div>
      </div>

      <Training />

      {/* Section divider */}
      <div
        style={{
          margin: 0,
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "1px",
          backgroundColor: "white",
          zIndex: 0,
        }}
      >
        <div
          style={{
            width: "6px",
            height: "6rem",
            borderRadius: "20%",
            backgroundColor: "#ff3434ff",
          }}
        ></div>
      </div>

      <Products />

      {/* Section divider */}
      <div
        style={{
          margin: 0,
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "1px",
          backgroundColor: "white",
          zIndex: 0,
        }}
      >
        <div
          style={{
            width: "6px",
            height: "6rem",
            borderRadius: "20%",
            backgroundColor: "#ff3434ff",
          }}
        ></div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
