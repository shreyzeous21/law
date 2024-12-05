"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Topbar from "./Topbar";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);
  const pathname = usePathname();

  const menuItems = [
    { title: "Home", dropdownItems: [], link: "/" },
    { title: "About Us", dropdownItems: [], link: "/about-us" },
    {
      title: "Practice Area",
      dropdownItems: [
        { name: "Civil Litigation & Property Matters", link: "/5" },
        { name: "Service Law & Administrative Law", link: "/1" },
        { name: "Family & Matrimonial Law", link: "/2" },
        { name: "Labour & Employment Laws", link: "/3" },
        { name: "Criminal Litigation & Trial Advocacy", link: "/4" },
      ],
      link: "/practice-area",
    },
    {
      title: "Contact Us",
      dropdownItems: [],
      link: "/contact-us",
    },
  ];

  const isActive = (link: string, dropdownItems: { link: string }[]) => {
    if (link === pathname) return true;
    return dropdownItems.some((item) => item.link === pathname);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  return (
    <header className="fixed w-full text-white bg-black shadow-sm z-50 top-0">
      <Topbar />
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex justify-between items-center h-16 gap-10 lg:h-20">
          {/* Logo */}
          <div className="flex gap-5 items-center">
            <div>
              <a href="/">
                <img
                  src="/logo.webp"
                  alt="Logo"
                  className="h-14 w-auto lg:h-16"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-4">
              {menuItems.map((item, index) =>
                item.dropdownItems.length > 0 ? (
                  <DesktopDropdownMenu
                    key={index}
                    title={item.title}
                    link={item.link}
                    items={item.dropdownItems}
                    activePath={pathname}
                    isActive={isActive(item.link, item.dropdownItems)}
                  />
                ) : (
                  <a
                    key={index}
                    href={item.link}
                    className={`text-xl hover:text-[#b8967e] ${
                      pathname === item.link ? "text-[#b8967e]" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="p-2 flex items-center justify-center bg-[#b8967e] text-white font-semibold rounded-lg shadow-md hover:bg-[#a57865] transition duration-300">
              Request a callback
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="text-sm p-2 flex items-center justify-center bg-[#b8967e] text-white font-semibold rounded-lg shadow-md hover:bg-[#a57865] transition duration-300">
              Request a callback
            </button>

            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 top-16 z-40 md:hidden text-black bg-white shadow-lg overflow-hidden`}
      >
        {isMenuOpen && (
          <div className="px-4 pt-2 pb-3 space-y-1 h-full overflow-y-auto">
            {menuItems.map((item, index) =>
              item.dropdownItems.length > 0 ? (
                <MobileDropdown
                  key={index}
                  index={index}
                  title={item.title}
                  link={item.link}
                  items={item.dropdownItems}
                  activePath={pathname}
                  isActive={isActive(item.link, item.dropdownItems)}
                  toggleDropdown={toggleDropdown}
                  isOpen={openDropdowns.includes(index)}
                />
              ) : (
                <a
                  key={index}
                  href={item.link}
                  className={`block py-2 text-lg ${
                    pathname === item.link ? "text-[#b8967e]" : ""
                  }`}
                >
                  {item.title}
                </a>
              )
            )}
          </div>
        )}
      </motion.div>
    </header>
  );
}

function DesktopDropdownMenu({
  title,
  link,
  items,
  activePath,
  isActive,
}: {
  title: string;
  link: string;
  items: { name: string; link: string }[];
  activePath: string;
  isActive: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={link}
        className={`flex items-center text-lg ${
          isActive ? "text-[#b8967e]" : ""
        }`}
      >
        {title} <ChevronDown size={16} className="ml-1" />
      </a>
      {isOpen && (
        <div className="absolute left-0 w-52 bg-white text-black shadow-lg rounded-md">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`block hover:text-[#b8967e] px-4 py-2 hover:bg-gray-100 ${
                activePath === item.link ? "text-[#b8967e]" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({
  index,
  title,
  link,
  items,
  activePath,
  isActive,
  toggleDropdown,
  isOpen,
}: {
  index: number;
  title: string;
  link: string;
  items: { name: string; link: string }[];
  activePath: string;
  isActive: boolean;
  toggleDropdown: (index: number) => void;
  isOpen: boolean;
}) {
  return (
    <div>
      <button
        onClick={() => toggleDropdown(index)}
        className={`w-full flex justify-between py-2 ${
          isActive ? "text-[#b8967e]" : ""
        }`}
      >
        <span className="text-lg font-medium">{title}</span>
        <ChevronDown
          size={20}
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-2">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`block py-2 hover:bg-gray-100 ${
                activePath === item.link ? "text-[#b8967e]" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
