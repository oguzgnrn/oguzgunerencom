'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-[#FFFDD0] hover:text-white transition-colors p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
          />
          <div className="fixed top-16 right-0 w-64 h-full bg-[#013220] shadow-lg z-50 mobile-nav-menu">
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                About
              </Link>
              <Link
                href="/experience"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Projects
              </Link>
              <Link
                href="/certifications"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Certifications
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
