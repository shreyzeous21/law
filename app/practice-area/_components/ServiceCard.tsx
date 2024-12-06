"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Civil Litigation & Property Matters",
    description:
      "Assisting clients in civil lawsuits, property disputes, and legal procedures to ensure fair resolution.",
    link: "/5",
  },
  {
    title: "Service Law & Administrative Law",
    description:
      "Expertise in handling disputes related to service laws and administrative procedures affecting individuals and entities.",
    link: "/1",
  },
  {
    title: "Family & Matrimonial Law",
    description:
      "Providing compassionate support and guidance for family disputes, divorce, child custody, and matrimonial issues.",
    link: "/2",
  },
  {
    title: "Alternate Disputes Resolution",
    description:
      "Specializing in arbitration, mediation, and negotiation to resolve conflicts outside of court.",
    link: "#",
  },
  {
    title: "Labour & Employment Laws",
    description:
      "Guiding employers and employees through the complexities of labor and employment regulations.",
    link: "/3",
  },
  {
    title: "Criminal Litigation & Trial Advocacy",
    description:
      "Experienced in defending and prosecuting criminal cases, providing strong representation in court.",
    link: "/4",
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
}) => (
  <motion.div
    className="bg-gradient-to-r  from-gray-900 to-[#b8967e] text-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full min-h-[18rem]"
    whileHover={{ scale: 1.05 }}
  >
    <div className="mb-4 flex-1">
      <h3 className="text-3xl font-semibold mb-2 border-b pb-2">{title}</h3>
      <p className="">{description}</p>
    </div>
    <a
      href={link}
      className="text-white flex text-lg items-center hover:text-gray-200 mt-auto"
    >
      Learn More <ArrowRight className="ml-2" />
    </a>
  </motion.div>
);

const LegalServicesTitle = () => (
  <div className=" text-[#b8967e]">
    <h2 className="text-5xl font-bold text-center">Our Legal Services</h2>
  </div>
);

const LegalServicesCards = () => (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
    {services.map((service) => (
      <ServiceCard key={service.title} {...service} />
    ))}
  </div>
);

const LegalServices = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <LegalServicesTitle />
      <div className="flex justify-center">
        <LegalServicesCards />
      </div>
    </div>
  );
};

export default LegalServices;
