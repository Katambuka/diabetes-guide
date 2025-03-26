// src/components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <span>DiabetesHealth</span>
        </Link>

        {/* Hamburger Menu Button (Visible only on small screens) */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation (Hidden on small screens) */}
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

export default Header;