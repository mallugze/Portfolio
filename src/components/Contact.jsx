import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';
import { AnimatedGithub, AnimatedLinkedin, AnimatedMail } from '@/components/ui/AnimatedSocialIcon';
import SocialFlipButton from '@/components/ui/SocialFlipButton';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      // Reset success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center bg-black dots-bg border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col justify-between h-full">
        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Side: Details & Form */}
          <div className="w-full text-left">
            {/* Section Header */}
            <span className="text-xs font-mono tracking-widest text-neonPink uppercase">// Let's Connect</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-2 mb-4">
              Contact Me
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-md">
              Have an exciting project, opening, or question? Send me a message and I'll get back to you as soon as possible.
            </p>

            {/* Deoxy Sliding Black Background Contact Form */}
            <div className="max-w-xl">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    onSubmit={handleSubmit}
                    className="deoxy-form"
                  >
                    <p className="font-display">
                      Welcome,<span>send a message to continue</span>
                    </p>

                    {/* OAuth Quick Connect Buttons */}
                    <a
                      href="mailto:mallikarjunpx@gmail.com"
                      className="deoxy-button group"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      Direct Email Contact
                    </a>

                    <a
                      href="https://github.com/mallugze"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="deoxy-button group"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      Connect via Github
                    </a>

                    <div className="deoxy-separator">
                      <div />
                      <span>OR SEND MESSAGE</span>
                      <div />
                    </div>

                    {/* Inputs */}
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="deoxy-input"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="deoxy-input"
                    />

                    <textarea
                      name="message"
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Type your message..."
                      className="deoxy-textarea"
                    />

                    {/* Sliding Black Hover Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="deoxy-button"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Continue</span>
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 17 5-5-5-5" />
                            <path d="m13 17 5-5-5-5" />
                          </svg>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="deoxy-form text-center flex flex-col items-center py-10"
                  >
                    <div className="p-4 rounded-full bg-black/10 border-2 border-[#323232] mb-4">
                      <CheckCircle className="w-12 h-12 text-[#323232]" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#323232] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#555] text-sm max-w-xs mb-6">
                      Thank you for reaching out. I will respond to your message shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="deoxy-button max-w-xs"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Interactive 3D Robot Whobee with Social Flip Button */}
          <div className="w-full flex flex-col items-center justify-center">
            <SocialFlipButton className="mb-2 z-20" />
            <div className="w-full h-[450px] lg:h-[500px] relative pointer-events-auto mix-blend-screen">
              <InteractiveRobotSpline
                scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

        {/* Footer & Social Directories */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
          <span className="text-xs text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} Mallikarjun. All rights reserved.
          </span>
          <div className="flex gap-6 text-gray-400">
            <a href="https://github.com/mallugze" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition-colors flex items-center gap-1.5 text-xs font-mono">
              <AnimatedGithub className="w-4 h-4" /> Github
            </a>
            <a href="https://www.linkedin.com/in/mallikarjun-842509326" target="_blank" rel="noopener noreferrer" className="hover:text-neonPurple transition-colors flex items-center gap-1.5 text-xs font-mono">
              <AnimatedLinkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="mailto:mallikarjunpx@gmail.com" className="hover:text-neonPink transition-colors flex items-center gap-1.5 text-xs font-mono">
              <AnimatedMail className="w-4 h-4" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
