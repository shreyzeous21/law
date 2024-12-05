import React from "react";
import { Metadata } from "next";

import TestimonialsSection from "@/components/Testimonials";

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
      <hr />
      <hr />
      <hr />
      <TestimonialsSection />
      <hr />
    </div>
  );
};

export default Practice;
