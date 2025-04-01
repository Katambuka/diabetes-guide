
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-neutral-900 text-white py-12" aria-label="Website footer">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="max-w-xs">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-primary-500">FlellaHarvest</span> & DiabetesHealth
          </h2>
          <p className="mt-4 text-gray-200"> {/* Changed from gray-300 to gray-200 */}
            Empowering individuals with the latest diabetes health insights and support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <nav aria-label="Footer navigation">
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
                  aria-label="Go to home page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
                  aria-label="View our blog articles"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
                  aria-label="Learn about our organization"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
                  aria-label="Contact our team"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <Link 
                href="/faq" 
                className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
                aria-label="Frequently asked questions"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link 
                href="/privacy" 
                className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
                aria-label="Privacy policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                href="/terms" 
                className="text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
                aria-label="Terms of service"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <address className="not-italic text-gray-200 space-y-3"> {/* Changed from gray-300 to gray-200 */}
            <p>
              <span className="sr-only">Email:</span>
              <a 
                href="mailto:support@diabeteshealth.com" 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
              >
                support@diabeteshealth.com
              </a>
            </p>
            <p>
              <span className="sr-only">Phone:</span>
              <a 
                href="tel:+971555598261" 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded"
              >
                +971 555 598 261
              </a>
            </p>
          </address>

          {/* Social Media */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="bg-neutral-800 p-2 rounded-full hover:bg-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                <FaFacebookF className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="bg-neutral-800 p-2 rounded-full hover:bg-sky-500 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                <FaTwitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="bg-neutral-800 p-2 rounded-full hover:bg-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="bg-neutral-800 p-2 rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-700 mt-10 pt-6 text-center">
        <p className="text-gray-300 text-sm"> {/* Kept gray-300 for less important text */}
          &copy; {currentYear || new Date().getFullYear()} FlellaHarvest & DiabetesHealth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
