"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";

// Service data
const services: Record<string, { title: string; description: string }> = {
  "civil-litigation-property-matters": {
    title: "Civil Litigation & Property Matters",
    description:
      "Assisting clients in civil lawsuits, property disputes, and legal procedures to ensure fair resolution.",
  },
  "service-law-administrative-law": {
    title: "Service Law & Administrative Law",
    description:
      "Expertise in handling disputes related to service laws and administrative procedures affecting individuals and entities.",
  },
  "family-matrimonial-law": {
    title: "Family & Matrimonial Law",
    description:
      "Providing compassionate support and guidance for family disputes, divorce, child custody, and matrimonial issues.",
  },
  "alternate-disputes-resolution": {
    title: "Alternate Disputes Resolution",
    description:
      "Specializing in arbitration, mediation, and negotiation to resolve conflicts outside of court.",
  },
  "labour-employment-laws": {
    title: "Labour & Employment Laws",
    description:
      "Guiding employers and employees through the complexities of labor and employment regulations.",
  },
  "criminal-litigation-trial-advocacy": {
    title: "Criminal Litigation & Trial Advocacy",
    description:
      "Experienced in defending and prosecuting criminal cases, providing strong representation in court.",
  },
};

const PracticeAreaPage: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter(); // For navigation (e.g., for the back button)
  const slug = pathname.split("/").pop(); // Extract slug from the URL path

  const [practiceArea, setPracticeArea] = useState<{
    title: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    if (slug && typeof slug === "string") {
      setPracticeArea(services[slug]);
    }
  }, [slug]);

  if (!practiceArea) {
    return <p className="text-center text-xl text-red-500">Practice area not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <motion.h1
        className="text-4xl font-bold mb-4 text-center text-gray-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {practiceArea.title}
      </motion.h1>
      <motion.p
        className="text-lg mb-8 text-gray-700 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {practiceArea.description}
      </motion.p>
      <div className="text-center">
        <motion.button
          onClick={() => router.push("/practice-area")}
          className="text-white bg-[#b8967e] hover:bg-[#a57865] font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          Back to Practice Areas
        </motion.button>
      </div>
    </div>
  );
};

export default PracticeAreaPage;
