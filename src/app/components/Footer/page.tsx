"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear()); // Set only after component mounts
  }, []);

  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-primary">FlellaHarvest & DiabetesHealth</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Empowering individuals with the latest diabetes health insights and support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p className="mt-3 text-gray-300 text-sm">📧 support@diabeteshealth.com</p>
          <p className="text-gray-300 text-sm">📞 +971 555 598 261 </p>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-6 h-6 text-gray-400 hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 text-gray-400 hover:text-sky-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-gray-400 hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="w-6 h-6 text-gray-400 hover:text-blue-700 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear ? currentYear : "Loading..."} FlellaHarvest & DiabetesHealth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
