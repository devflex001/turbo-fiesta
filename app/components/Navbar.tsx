"use client";

import React, { useState, useEffect } from "react";
import { Shield, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "calculator", label: "Flex Configurator" },
    { id: "subscriptions", label: "Pricing" },
    { id: "about", label: "Our DNA" },
    { id: "faq", label: "FAQs" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-zinc-950/95 border-b border-zinc-800 shadow-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded bg-zinc-800 border border-zinc-700">
              <Shield className="w-4 h-4 text-zinc-300" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Bet<span className="text-zinc-400">Flexx</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors hover:text-white cursor-pointer ${
                  activeTab === link.id ? "text-white relative" : "text-zinc-400"
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-zinc-400" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2 rounded text-xs font-bold text-black bg-white hover:bg-zinc-200 transition-colors cursor-pointer flex items-center gap-1"
            >
              Consultation <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen border-b border-zinc-800 bg-zinc-950" : "max-h-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 flex flex-col items-stretch">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block text-left px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-zinc-900 ${
                activeTab === link.id ? "text-white bg-zinc-900" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-4 border-t border-zinc-900 flex flex-col gap-3 px-3">
            <button
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="w-full py-3 text-center rounded text-xs font-bold text-black bg-white hover:bg-zinc-200"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
