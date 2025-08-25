"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={70}
              height={40}
              className="object-contain"
            />
          </Link>
          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-8 font-medium">
            <li>
              <Link
                href="#about"
                className="relative text-gray-800 hover:text-yellow-500 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="relative text-gray-800 hover:text-yellow-500 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6"> 
           <Link
               href="https://admin-dashboard.shopneo.in/"
                className="relative text-gray-800 hover:text-yellow-500 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                Seller Login
              </Link>
          <Button
  label="Register as Seller"
  href="https://admin-dashboard.shopneo.in/"
  target="_blank"
  className="bg-yellow-500 text-white hover:bg-yellow-400"
/>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col p-4 gap-4 font-medium">
            <li>
              <Link
                href="#about"
                className="text-gray-800 hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-800 hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="https://admin-dashboard.shopneo.in/"
                target="_blank"
                className="text-gray-800 hover:text-yellow-500"
              >
                Seller Login
              </Link>
            </li>
            <li>
              <Link
                href="https://admin-dashboard.shopneo.in/"
                target="_blank"
                className="px-4 py-2 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition inline-block"
              >
                Register as Seller
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
