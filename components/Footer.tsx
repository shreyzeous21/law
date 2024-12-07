"use client";

import { ArrowRight, ChevronRight, Globe, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1E] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Our Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Our Address
              <motion.span
                className="h-[2px] w-12 bg-[#E5B06E]"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5 }}
              />
            </h3>
            <p className="text-gray-300 leading-relaxed">
              C-337, IIIrd Floor,
              <br />
              Bhutani Cyber Park Plot No.28-29 Industrial Area Sector-62,
              <br />
              Noida-201309, Uttar Pradesh
            </p>
          </div>

          {/* Connect with Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Connect with Us
              <motion.span
                className="h-[2px] w-12 bg-[#E5B06E]"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5 }}
              />
            </h3>
            <div className="space-y-2">
              <motion.div
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ x: 5, color: "#ffffff" }}
              >
                <Mail className="h-4 w-4" />
                <a href="mailto:info@advsarthakmittal.com">
                  info@advsarthakmittal.com
                </a>
              </motion.div>
              {/* <motion.div
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ x: 5, color: "#ffffff" }}
              >
                <Mail className="h-4 w-4" />
                <a href="mailto:support@igual.com">support@igual.com,</a>
              </motion.div> */}
              <motion.div
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ x: 5, color: "#ffffff" }}
              >
                <Globe className="h-4 w-4" />
                <span>+91 9582678877</span>
              </motion.div>
            </div>
          </div>

          {/* Quicklinks */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Quicklinks
              <motion.span
                className="h-[2px] w-12 bg-[#E5B06E]"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5 }}
              />
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Practice Area", "Contact Us"].map(
                (item) => {
                  const path =
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/ /g, "-")}`;
                  return (
                    <motion.li key={item} whileHover={{ x: 5 }}>
                      <Link
                        href={path}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                        {item}
                      </Link>
                    </motion.li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              Our Newsletter
              <motion.span
                className="h-[2px] w-12 bg-[#E5B06E]"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5 }}
              />
            </h3>
            <p className="text-gray-300">
              Signup for our latest news & articles.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-gray-700 focus:border-gray-600"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="icon" className="bg-[#E5B06E] hover:bg-[#d39f5c]">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-400 text-sm text-center">
            © Copyright 2024. All rights reserved.{" "}
            <motion.a
              href="#"
              className="text-[#E5B06E] hover:text-[#d39f5c]"
              whileHover={{ scale: 1.05 }}
            >
              Sarthak Mittal
            </motion.a>
            . Designed and developed by{" "}
            <motion.a
              href="https://www.coderxpoint.com"
              className="text-[#E5B06E] hover:text-[#d39f5c]"
              whileHover={{ scale: 1.05 }}
            >
              CoderXpoint
            </motion.a>
          </p>
        </div>
      </div>
    </footer>
  );
}
