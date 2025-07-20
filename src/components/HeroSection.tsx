"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [showCTA, setShowCTA] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Show CTA when user scrolls down about 20% of viewport height
      setShowCTA(scrollY > viewportHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExploreClick = () => {
    router.push("/explore");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-ivory">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-navy tracking-wide leading-tight"
        >
          Crafted for the
          <br />
          <span className="font-normal">Unconventional</span>
        </motion.h1>

        {/* CTA - Appears on scroll */}
        <AnimatePresence>
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-16 md:mt-20"
            >
              <button
                onClick={handleExploreClick}
                className="group text-2xl md:text-3xl font-light text-navy hover:text-navy-alt transition-all duration-300 cursor-pointer"
              >
                <span className="relative">
                  Explore Now
                  <motion.span
                    className="inline-block ml-3"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-glow transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {!showCTA && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-navy rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-navy rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
