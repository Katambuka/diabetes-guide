// src/components/Header.tsx
/*"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo /}
        <Link href="/" className="logo">
          <span>DiabetesHealth</span>
        </Link>

        {/* Hamburger Menu Button (Visible only on small screens) /}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation (Hidden on small screens) /}
        <nav className={`desktop-nav ${isOpen ? "open" : ""}`}>
          <Link
            href="/"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;*/

/*"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Using purple for brand color /}
        <Link 
          href="/" 
          className="text-2xl font-bold text-purple-700 hover:text-purple-600 transition-colors"
          aria-label="DiabetesHealth Home"
        >
          DiabetesHealth
        </Link>

        {/* Mobile Menu Button - Purple contrast /}
        <button
          className="md:hidden p-2 rounded-md text-purple-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X size={28} aria-hidden="true" className="text-purple-700" />
          ) : (
            <Menu size={28} aria-hidden="true" className="text-purple-700" />
          )}
        </button>

        {/* Desktop Navigation - Visible purple links /}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-800 hover:text-purple-600 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-gray-800 hover:text-purple-600 font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-purple-600 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-purple-600 font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation - Purple accents /}
        {isOpen && (
          <nav 
            id="mobile-navigation"
            className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-6 z-50 border-t border-purple-100"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-purple-700 hover:text-purple-600 font-medium py-2 transition-colors border-b border-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-purple-700 hover:text-purple-600 font-medium py-2 transition-colors border-b border-purple-50"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-purple-700 hover:text-purple-600 font-medium py-2 transition-colors border-b border-purple-50"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-purple-700 hover:text-purple-600 font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;*/

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-purple-700 hover:text-purple-600 transition-colors"
          aria-label="DiabetesHealth Home"
        >
          DiabetesHealth
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X size={28} aria-hidden="true" />
          ) : (
            <Menu size={28} aria-hidden="true" />
          )}
        </button>

        {/* Desktop Navigation - Now with DARK text */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-gray-900 hover:text-purple-600 font-medium px-3 py-2 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-gray-900 hover:text-purple-600 font-medium px-3 py-2 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-900 hover:text-purple-600 font-medium px-3 py-2 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-900 hover:text-purple-600 font-medium px-3 py-2 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation - Now with DARK text */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav 
            id="mobile-navigation"
            className="flex flex-col px-6 pb-4 space-y-3"
            aria-label="Mobile navigation"
          >
            <Link
              href="/"
              className="text-gray-900 hover:bg-purple-50 font-medium py-3 px-4 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 hover:bg-purple-50 font-medium py-3 px-4 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:bg-purple-50 font-medium py-3 px-4 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:bg-purple-50 font-medium py-3 px-4 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;