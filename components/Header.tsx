"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, Search, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";
import Topbar from "./Topbar";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For search modal
  const [searchQuery, setSearchQuery] = useState(""); // For search input
  const pathname = usePathname();

  const menuItems = [
    { title: "Home", dropdownItems: [], link: "/" },
    { title: "About Us", dropdownItems: [], link: "/about" },
    {
      title: "Practice Area",
      dropdownItems: [
        { name: "About Us", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "FAQ", link: "/faq" },
        { name: "Terms", link: "/terms" },
      ],
    },
    {
      title: "Contact Us",
      dropdownItems: [
        { name: "Latest Posts", link: "/blog/latest" },
        { name: "Categories", link: "/blog/categories" },
        { name: "Authors", link: "/blog/authors" },
      ],
    },
    { title: "Careers", dropdownItems: [], link: "/careers" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // You can redirect to a search results page or filter content dynamically
  };

  return (
    <header className="fixed w-full text-black  bg-slate-100 shadow-sm z-50 top-0">
      <Topbar />
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex justify-between items-center h-16 gap-10 lg:h-20">
          {/* Logo */}
          <div className="flex gap-5 items-center">
            <div>
              <a href="/">
                <img src="/logo.webp" alt="Logo" className="h-8 md:h-10" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-4">
              {menuItems.map((item) =>
                item.dropdownItems.length > 0 ? (
                  <DesktopDropdownMenu
                    key={item.title}
                    title={item.title}
                    items={item.dropdownItems}
                    activePath={pathname}
                  />
                ) : (
                  <a
                    key={item.title}
                    href={item.link}
                    className={`text-lg ${
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
            {/* <button className="p-2 gap-2 hover:text-[#b8967e]  items-center transition duration-300  flex flex-row">
              <PhoneCall size={20} />
              <span>+91 9582678877</span>
            </button> */}
            <button
              className="p-2 flex items-center"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="p-2">
              <PhoneCall size={20} />
            </button>
            <button
              className="p-2 flex  items-center"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1 h-full overflow-y-auto">
            {menuItems.map((item) =>
              item.dropdownItems.length > 0 ? (
                <MobileDropdown
                  key={item.title}
                  title={item.title}
                  items={item.dropdownItems}
                  activePath={pathname}
                />
              ) : (
                <a
                  key={item.title}
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
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-lg w-full max-w-md">
            <button
              className="absolute top-2 right-2 p-2"
              onClick={() => setIsSearchOpen(false)}
            >
              <X size={24} />
            </button>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full p-2 border rounded-md"
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopDropdownMenu({
  title,
  items,
  activePath,
}: {
  title: string;
  items: { name: string; link: string }[];
  activePath: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-lg">
        {title} <ChevronDown size={16} className="ml-1" />
      </button>
      {isOpen && (
        <div className="absolute left-0 w-52 bg-white shadow-lg rounded-md">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`block px-4 py-2 hover:bg-gray-100 ${
                activePath === item.link ? "text-[#b8967e] " : ""
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
  title,
  items,
  activePath,
}: {
  title: string;
  items: { name: string; link: string }[];
  activePath: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex justify-between py-2"
        onClick={() => setIsOpen(!isOpen)}
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
