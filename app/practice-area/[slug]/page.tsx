"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import LegalServices from "../_components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";

// Service data
const services: Record<
  string,
  { title: string; description: string; image: string }
> = {
  "civil-litigation-property-matters": {
    title: "Civil Litigation & Property Matters",
    description: `
      <p>Mr. Sarthak Mittal is one of the <strong>Best Civil Litigation Lawyers in Delhi</strong> has his hands set in the arena of Civil Litigation since decades and is also known as the ‘<em>Civil Wizard</em>’ by many members of the Bar. His expertise in this field makes him has helped him achieve a tremendous success rate with cases pertaining to property settlements, contract law, family law, administrative law, etc.</p>
      <p>Our team of Advocates and consultants are the Best Civil Litigation Lawyers in Delhi and provide you with speedy, innovative, and tailor-made legal solutions and services for your diverse civil concerns.</p>`,
    image: "/civil-litigation.jpg",
  },
  "service-law-administrative-law": {
    title: "Service Law & Administrative Law",
    description: `
      <p>Our Team of Lawyers at Chambers of Sarthak Mittal has an in-depth knowledge of the various rules and guidelines laid down by the DoPT to regulate the conditions of service. With the help of research on set precedents and landmark judgments, we try to arrive at a strategic proposition so as to help our clients to get the appropriate remedy to their grievances. Our advocates represent our clients against the Union of India and various of its Ministries/departments, Institutions, or PSUs and with the help of our research-oriented, strong approach give our clients the redressal of their issues.</p>`,
    image: "/service-law.jpg",
  },
  "family-matrimonial-law": {
    title: "Family & Matrimonial Law",
    description: `
      <p>Whenever a dispute in a marriage arises, it does not involve only two parties, but affects the entire family and brings about a myriad of civil and criminal litigations that can cause physical and emotional distress to the parties.</p>
      <p>Our team of Advocates and consultants provide you with speedy, innovative, and tailor-made legal solutions and services for your diverse concerns in family and matrimonial matters.</p>
      <p>We also provide a full range of mediation services that allow parties to the dispute to put forth their grievances in a safe and healthy environment. The mediator employs a subjective approach to facilitate the parties to work towards a productive solution at minimal costs and time.</p>`,
    image: "/family-law.jpg",
  },
  "alternate-disputes-resolution": {
    title: "Alternate Disputes Resolution",
    description: `<p>Specializing in arbitration, mediation, and negotiation to resolve conflicts outside of court.</p>`,
    image: "/adr.jpg",
  },
  "labour-employment-laws": {
    title: "Labour & Employment Laws",
    description: `
      <p>The Indian job and labour market is extremely unstable and uncertain and plagued with several issues related to wrongful termination, exploitative contract terms, harsh conditions of work, inadequate compensation, low wages, discrimination and harassment, and lack of proper mechanism for redressal of workers’ grievances, etc. Women in workplaces also have to bear the additional brunt of sexual harassment and favours from the employees.</p>
      <p>Our team of Advocates and consultants provide you with speedy, innovative, and tailor-made legal solutions and services for your diverse labour and employment concerns.</p>`,
    image: "/labour-law.jpg",
  },
  "criminal-litigation-trial-advocacy": {
    title: "Criminal Litigation & Trial Advocacy",
    description: `
      <p>Our firm has a team of lawyers who are fully capable and trained to assist our clients from the stage of lodging of the FIR to the conclusion of Trial and beyond, by way of filing of appeals. At the national level in India, our firm has represented numerous clients in various types of criminal cases. From Lower Trial Courts to the Honorable Supreme Court of India, the firm has a strategy of offering prompt, effective assistance that is also affordable.</p>
      <p>Experienced attorneys who excel at handling cases of a criminal and quasi-criminal nature, including but not limited to White Collar Crimes, Offenses under the Indian Penal Code, Economic Offenses, Corporate Frauds, CBI, Enforcement Directorate (ED), etc., make up the firm’s Criminal Litigation team.</p>`,
    image: "/criminal-litigation.jpg",
  },
};

const PracticeAreaPage: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter(); // For navigation (e.g., for the back button)
  const slug = pathname.split("/").pop(); // Extract slug from the URL path

  const [practiceArea, setPracticeArea] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    if (slug && typeof slug === "string") {
      setPracticeArea(services[slug]);
    }
  }, [slug]);

  if (!practiceArea) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center text-xl text-slate-800">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className=" justify-center flex flex-col mx-auto ">
        <div className="gap-10 flex flex-col">
          <section className="flex flex-col">
            <h1
              className="h-auto text-white text-4xl font-bold flex items-center justify-center"
              style={{
                backgroundImage: 'url("/law-slider-2.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "350px",
              }}
            >
              <span className="flex flex-col items-center">
                <h1 className="text-center ">{practiceArea.title}</h1>
                <Breadcrumb />
              </span>
            </h1>
          </section>
          <div className="max-w-6xl px-4  w-full mx-auto justify-center flex flex-col">
            {/* <motion.h1
              className="text-5xl font-bold text-center text-[#b8967e]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {practiceArea.title}
            </motion.h1> */}
            <div className="flex lg:flex-row  flex-col py-5 mx-auto items-center justify-center gap-10">
              <motion.img
                src={practiceArea.image}
                alt={practiceArea.title}
                className="rounded-md lg:w-1/2 w-auto object-contain h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div
                className="text-lg/relaxed text-gray-700"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                dangerouslySetInnerHTML={{ __html: practiceArea.description }}
              ></motion.div>
            </div>
            <div className="text-center">
              <Button
                onClick={() => router.push("/practice-area")}
                className="text-white bg-[#b8967e] hover:bg-[#a57865] font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                Back to Practice Areas
              </Button>
            </div>
          </div>
          <hr />
          <LegalServices />
          <hr />
          <ContactForm />
          <hr />
        </div>
      </div>
    </>
  );
};

export default PracticeAreaPage;
