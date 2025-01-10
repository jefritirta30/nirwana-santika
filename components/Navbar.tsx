"use client";
// components/Navbar.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#8B0000] fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>
          
          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-[#FFD700] hover:text-white">Beranda</a>
            <a href="#" className="text-[#FFD700] hover:text-white">Produk</a>
            <Link className="text-[#FFD700] hover:text-white" href="/tentang-kami">
              Tentang Kami
            </Link>
            <a href="#" className="text-[#FFD700] hover:text-white">Kontak</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FFD700] hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-[#FFD700] hover:text-white">Beranda</a>
            <a href="#" className="block text-[#FFD700] hover:text-white">Produk</a>
            <a href="#" className="block text-[#FFD700] hover:text-white">Tentang Kami</a>
            <a href="#" className="block text-[#FFD700] hover:text-white">Kontak</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
