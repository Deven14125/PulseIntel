import Link from 'next/link';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Heart className="w-6 h-6 text-red-600 fill-red-600 transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-600">
                PulseIntel
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering you with AI-driven insights for better heart health decisions. Early detection saves lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/predict" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 text-sm transition-colors">
                  Check Health
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 text-sm transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/model-info" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 text-sm transition-colors">
                  Model Accuracy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 text-sm transition-colors">
                  Heart Health Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link href="https://github.com/Deven14125" target="_blank" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/deven-machchhar-b13287286/" target="_blank" className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4" />
              <span>deven81281298@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500 text-center md:text-left">
            © {currentYear} PulseIntel AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-400">
              Disclaimer: This tool is for educational purposes only and not a substitute for professional medical advice.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
