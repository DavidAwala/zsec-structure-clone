import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const winH = window.innerHeight;
      const docH = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      // treat as "bottom" when within 80px of bottom
      setAtBottom(scrollTop + winH >= docH - 80);
    };

    // run once on mount
    checkPosition();

    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("resize", checkPosition);
    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  const handleClick = () => {
    if (!atBottom) {
      // scroll to bottom
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    } else {
      // scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const dotAnimation = {
    down: { y: [0, 14], transition: { y: { duration: 0.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } } },
    up:   { y: [14, 0], transition: { y: { duration: 0.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } } },
  };

  return (
    <div className="fixed bottom-8 right-3 transform -translate-x-1/2 z-50">
      <motion.button
        onClick={handleClick}
        aria-label={atBottom ? "Scroll to top" : "Scroll to bottom"}
        className="w-8 h-12 border-2 border-primary rounded-full flex items-start justify-center bg-transparent focus:outline-none"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span
          className="block w-1.5 h-3 bg-primary rounded-full mt-2"
          variants={dotAnimation}
          animate={atBottom ? "up" : "down"}
        />
      </motion.button>
    </div>
  );
}
