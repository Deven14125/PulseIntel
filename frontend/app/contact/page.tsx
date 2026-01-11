"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen py-16 px-4 bg-transparent relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
             <span className="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-semibold tracking-wider uppercase mb-4 inline-block">
                Contact Support
            </span>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 pb-2">
                Let's Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Have questions about the AI model or need assistance? We are here to help you around the clock.
            </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Cards */}
            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-6"
            >
                <motion.div variants={item} whileHover={{ scale: 1.02 }} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 group">
                    <div className="flex items-center gap-6">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Email Support</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">deven81281298@gmail.com</p>
                            <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={item} whileHover={{ scale: 1.02 }} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 group">
                    <div className="flex items-center gap-6">
                         <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Direct Line</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">+91 99790 83277</p>
                            <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am - 6pm</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={item} whileHover={{ scale: 1.02 }} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:border-pink-500/30 transition-all duration-300 group">
                    <div className="flex items-center gap-6">
                         <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-4 rounded-2xl shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">HQ Location</h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">Morbi, Gujarat, India</p>
                            <p className="text-sm text-gray-500 mt-1">Innovation Hub</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-gray-700/50 relative overflow-hidden"
            >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

                {submitted ? (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center p-8 min-h-[400px]"
                    >
                        <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 shadow-inner animate-bounce">
                            <Send className="w-10 h-10 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                        <button 
                            onClick={() => setSubmitted(false)} 
                            className="px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 relative">
                        <div className="flex items-center gap-3 mb-2">
                             <MessageSquare className="text-blue-600" />
                             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send a Message</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Name</label>
                                <input type="text" required className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                                <input type="email" required className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400" placeholder="john@example.com" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                             <select className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all cursor-pointer">
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Feedback</option>
                                <option>Collabortaion</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                            <textarea rows={5} required className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transform transition hover:scale-[1.02] flex items-center justify-center gap-2 relative overflow-hidden group">
                           <span className="relative z-10 flex items-center gap-2">Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
      </div>
    </main>
  );
}
