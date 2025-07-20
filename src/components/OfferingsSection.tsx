"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OfferingsSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const offerings = [
    {
      title: "Act before it's everywhere",
      content: [
        "LucidQuant analyzes the data points everyone else overlooks.",
        "We find correlations in unexpected places and surface patterns before they become market consensus.",
        "Get early signals from sources others don't track."
      ]
    },
    {
      title: "Go beyond the usual checks",
      content: [
        "While others focus on earnings and price charts, we explore alternative indicators that might tell a different story.",
        "Discover unconventional metrics that could reveal new investment angles you hadn't considered."
      ]
    },
    {
      title: "Take the boldest risk reason allows",
      content: [
        "Smart risk isn't about gambling—it's about having better information. LucidQuant gives you the conviction to act on opportunities that appear risky to others.",
        "Make calculated moves with uncommon insight."
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, -rect.top / (sectionHeight - window.innerHeight));
      
      // Calculate which card should be shown based on scroll progress
      const cardIndex = Math.min(2, Math.floor(scrollProgress * 4));
      setCurrentCard(cardIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-[300vh] bg-ivory relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-light text-navy mb-8 leading-tight">
                {offerings[currentCard].title}
              </h2>
              
              <div className="space-y-6">
                {offerings[currentCard].content.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-lg md:text-xl text-navy/80 leading-relaxed max-w-3xl mx-auto"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {offerings.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentCard 
                    ? "bg-glow w-8" 
                    : "bg-navy/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
