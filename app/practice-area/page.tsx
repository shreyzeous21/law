import React from "react";
import { Metadata } from "next";

import TestimonialsSection from "@/components/Testimonials";
import ServiceCard from "./_components/ServiceCard";
import ParallexBanner from "./_components/ParallexBanner";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Practice Area - Law",
    description: "Discover more about us.",
  };
}

const Practice = () => {
  return (
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
          Practice Area
        </h1>
      </section>
      <ServiceCard />

      <ParallexBanner />

      <TestimonialsSection />
      <hr />
    </div>
  );
};

export default Practice;
