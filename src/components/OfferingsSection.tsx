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
      content: "LucidQuant analyzes the data points everyone else overlooks. We find correlations in unexpected places and surface patterns before they become market consensus. Get early signals from sources others don't track."
    },
    {
      title: "Go beyond the usual checks", 
      content: "While others focus on earnings and price charts, we explore alternative indicators that might tell a different story. Discover unconventional metrics that could reveal new investment angles you hadn't considered."
    },
    {
      title: "Take the boldest risk reason allows",
      content: "Smart risk isn't about gambling—it's about having better information. LucidQuant gives you the conviction to act on opportunities that appear risky to others. Make calculated moves with uncommon insight."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" }
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
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress more smoothly
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewportHeight)));
      
      // Calculate which card should be shown based on scroll progress
      const totalCards = offerings.length;
      const cardIndex = Math.min(totalCards - 1, Math.floor(scrollProgress * totalCards));
      setCurrentCard(cardIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView, offerings.length]);

  return (
    <section 
      ref={sectionRef}
      className="h-[400vh] bg-ivory relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-light text-navy mb-8 leading-tight">
                {offerings[currentCard].title}
              </h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-navy/80 leading-relaxed max-w-3xl mx-auto"
              >
                {offerings[currentCard].content}
              </motion.p>
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
