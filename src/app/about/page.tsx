"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-navy mb-8">
              About LucidQuant
            </h1>
            
            <div className="space-y-8 text-lg text-navy/80 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                LucidQuant is a web-based stock research platform that delivers 
                early-stage, unconventional, and underexplored investment signals. 
                We surface indicators and metrics that traditional platforms 
                overlook—offering users the conviction to act before the rest of 
                the market catches on.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                While others focus on the same old earnings reports and price charts, 
                we dive deep into alternative data sources. From the Men&apos;s Underwear Index 
                to global air traffic patterns, we find correlations in unexpected places 
                and surface patterns before they become market consensus.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our platform is designed for advanced retail investors who think 
                differently—those who understand that smart risk isn&apos;t about gambling, 
                it&apos;s about having better information. We give you the conviction to act 
                on opportunities that appear risky to others.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-8"
              >
                <h2 className="text-2xl font-semibold text-navy mb-4">Our Mission</h2>
                <p>
                  To democratize access to unconventional market intelligence and 
                  empower investors with insights that traditional analysis overlooks. 
                  We believe the best opportunities often hide in plain sight—you just 
                  need to know where to look.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Link
                href="/explore"
                className="inline-block bg-navy text-ivory px-8 py-3 rounded-lg hover:bg-navy-alt transition-colors font-medium"
              >
                Start Exploring
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
