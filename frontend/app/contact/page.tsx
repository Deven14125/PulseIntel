"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add real submission logic here if needed
  };

  return (
    <main className="min-h-screen py-12 px-4 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
                Have questions or suggestions? We'd love to hear from you.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
            >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
                        <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                        <p className="text-gray-600 dark:text-gray-400">support@cardiopredict.com</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                        <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Call Us</h3>
                        <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full">
                        <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                        <p className="text-gray-600 dark:text-gray-400">123 Tech Avenue, Innovation City</p>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
            >
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <Send className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-600 dark:text-gray-400">Thank you for contacting us. We will get back to you shortly.</p>
                        <button onClick={() => setSubmitted(false)} className="mt-6 text-blue-600 hover:underline">Send another message</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input type="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea rows={4} required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-lg flex items-center justify-center gap-2">
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
      </div>
    </main>
  );
}
