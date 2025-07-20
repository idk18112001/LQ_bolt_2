"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ExplorePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      {/* Logo at top center */}
      <div className="flex justify-center pt-8 pb-4">
        <Link href="/" className="text-3xl font-bold text-navy hover:text-navy-alt transition-colors">
          LucidQuant
        </Link>
      </div>

      {/* Split view */}
      <div className="flex-1 flex">
        {/* Left Half - Indicators */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-1/2 flex items-center justify-center bg-ivory hover:bg-ivory/90 transition-all duration-300 cursor-pointer group"
          onClick={() => router.push("/indicators")}
        >
          <div className="text-center">
            <motion.h2
              className="text-6xl md:text-8xl font-light text-navy group-hover:text-navy-alt transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Indicators
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-navy/60 text-lg font-light"
            >
              Early signals from unconventional sources
            </motion.p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-px bg-navy/10"></div>

        {/* Right Half - Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-1/2 flex items-center justify-center bg-ivory hover:bg-ivory/90 transition-all duration-300 cursor-pointer group"
          onClick={() => router.push("/metrics")}
        >
          <div className="text-center">
            <motion.h2
              className="text-6xl md:text-8xl font-light text-navy group-hover:text-navy-alt transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Metrics
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-navy/60 text-lg font-light"
            >
              Alternative measurements that matter
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExplorePage;
