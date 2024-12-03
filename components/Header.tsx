"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, Search, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    {
      title: "Home",
      dropdownItems: [],
      link: "/",
    },
    {
      title: "Shop",
      dropdownItems: [
        { name: "All Products", link: "/shop/all" },
        { name: "Categories", link: "/shop/categories" },
        { name: "New Arrivals", link: "/shop/new" },
        { name: "Sale Items", link: "/shop/sale" },
      ],
    },
    {
      title: "Pages",
      dropdownItems: [
        { name: "About Us", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "FAQ", link: "/faq" },
        { name: "Terms", link: "/terms" },
      ],
    },
    {
      title: "Blog",
      dropdownItems: [
        { name: "Latest Posts", link: "/blog/latest" },
        { name: "Categories", link: "/blog/categories" },
        { name: "Authors", link: "/blog/authors" },
      ],
    },
  ];

  return (
    <header className="fixed w-full font-bold bg-white  shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center h-16 gap-10 lg:h-20">
          {/* Logo */}
          <div className="flex gap-5 items-center">
            <div className="">
              <a href="/">
                <img src="/logo.png" alt="Logo" className="h-8 md:h-10" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item) =>
                item.dropdownItems.length > 0 ? (
                  <DropdownMenu
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
            <button className="p-2 gap-2 flex flex-row">
              <PhoneCall size={20} />
              <span>8477081261</span>
            </button>
            <button className="p-2">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <button className="p-2">
              <PhoneCall size={20} />
            </button>
            <button className="p-2">
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
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 h-full overflow-y-auto">
            {menuItems.map((item) =>
              item.dropdownItems.length > 0 ? (
                <div key={item.title} className="py-2">
                  <MobileDropdown
                    title={item.title}
                    items={item.dropdownItems}
                    activePath={pathname}
                  />
                </div>
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
    </header>
  );
}

function DropdownMenu({
  title,
  items,
  activePath,
}: {
  title: string;
  items: { name: string; link: string }[];
  activePath: string;
}) {
  return (
    <div className="relative group">
      <a
        href={items[0].link} // First item link or you can use your desired link
        className="text-lg flex items-center space-x-2"
      >
        <span>{title}</span>
        <ChevronDown
          size={16}
          className="transform transition-transform group-hover:rotate-180"
        />
      </a>
      <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className={`block px-4 py-2 ${
              activePath === item.link ? "text-[#b8967e]" : ""
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
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
      <a
        href={items[0].link} // First item link or you can use your desired link
        className="w-full flex items-center justify-between py-2"
      >
        <span className="text-lg font-medium">{title}</span>
        <ChevronDown
          size={20}
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </a>
      {isOpen && (
        <div className="pl-4 py-2 space-y-2">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`block py-2 hover:text-black ${
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
