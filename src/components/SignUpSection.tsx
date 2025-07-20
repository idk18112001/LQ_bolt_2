"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowLeft } from "lucide-react";

const SignUpSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalView, setModalView] = useState<"signup" | "login">("signup");
  const [email, setEmail] = useState("");

  const handleSignUpClick = () => {
    setShowModal(true);
    setModalView("signup");
  };

  const handleLoginClick = () => {
    setModalView("login");
  };

  const handleBackToSignup = () => {
    setModalView("signup");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmail("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(`${modalView}:`, email);
    handleCloseModal();
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleSignUpClick}
              className="group text-3xl md:text-4xl font-light text-navy hover:text-navy-alt transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative">
                Sign up
                <motion.span
                  className="inline-block ml-4"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-glow transition-all duration-300 group-hover:w-full opacity-20"></span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy/20 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-ivory rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-navy/60 hover:text-navy transition-colors"
              >
                <X size={24} />
              </button>

              <AnimatePresence mode="wait">
                {modalView === "signup" ? (
                  <motion.div
                    key="signup"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-light text-navy mb-8 text-center">
                      Begin Your Journey
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email to begin"
                          className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-glow focus:outline-none transition-colors bg-ivory text-navy placeholder-navy/60"
                          autoFocus
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-navy text-ivory py-3 rounded-lg hover:bg-navy-alt transition-colors font-medium"
                      >
                        Continue
                      </button>
                    </form>

                    <div className="my-6 text-center">
                      <span className="text-navy/40 text-sm">or</span>
                    </div>

                    {/* Third-party providers */}
                    <div className="space-y-3">
                      <button className="w-full border border-navy/20 text-navy py-3 rounded-lg hover:bg-navy/5 transition-colors font-medium">
                        Continue with Google
                      </button>
                      <button className="w-full border border-navy/20 text-navy py-3 rounded-lg hover:bg-navy/5 transition-colors font-medium">
                        Continue with Apple
                      </button>
                      <button className="w-full border border-navy/20 text-navy py-3 rounded-lg hover:bg-navy/5 transition-colors font-medium">
                        Continue with Microsoft
                      </button>
                    </div>

                    <div className="mt-8 text-center">
                      <button
                        onClick={handleLoginClick}
                        className="text-navy/60 hover:text-navy transition-colors text-sm"
                      >
                        Already have an account? Log in →
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={handleBackToSignup}
                      className="flex items-center text-navy/60 hover:text-navy transition-colors mb-6"
                    >
                      <ArrowLeft size={20} className="mr-2" />
                      Back
                    </button>

                    <h2 className="text-3xl font-light text-navy mb-8 text-center">
                      Welcome Back
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email address"
                          className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-glow focus:outline-none transition-colors bg-ivory text-navy placeholder-navy/60"
                          autoFocus
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-4 py-3 border-2 border-navy/20 rounded-lg focus:border-glow focus:outline-none transition-colors bg-ivory text-navy placeholder-navy/60"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-navy text-ivory py-3 rounded-lg hover:bg-navy-alt transition-colors font-medium"
                      >
                        Log In
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SignUpSection;
