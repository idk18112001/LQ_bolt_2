"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const navLinks = [
    { href: "/indicators", label: "Indicators" },
    { href: "/metrics", label: "Metrics" },
    { href: "/about", label: "About Us" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ];

  return (
    <footer className="bg-navy text-ivory py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-3xl font-bold text-ivory hover:text-glow transition-colors">
                LucidQuant
              </Link>
              <p className="mt-4 text-ivory/70 max-w-md leading-relaxed">
                Early-stage, unconventional, and underexplored investment signals. 
                Surface indicators and metrics that traditional platforms overlook.
              </p>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-ivory/70 hover:text-glow transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact and Legal */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block text-ivory/70 hover:text-glow transition-colors"
                >
                  Contact Us
                </Link>
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-ivory/70 hover:text-glow transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-ivory/20 mt-12 pt-8 text-center"
        >
          <p className="text-ivory/50 text-sm">
            © {new Date().getFullYear()} LucidQuant. Crafted for the unconventional.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
