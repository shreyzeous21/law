import React from "react";
import { Metadata } from "next";
import Philosophy from "./_components/Philosophy";
import CounterBand from "./_components/CounterBand";
import Place from "./_components/Place";
import { ContactForm } from "@/components/ContactForm";
import Breadcrumb from "@/components/ui/breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us - Law",
    description: "Discover more about us.",
  };
}

const AboutUs = () => {
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
          About Us
          <Breadcrumb />
        </h1>
      </section>
      <Philosophy />
      <hr />
      <CounterBand />
      <hr />
      <Place />
      <hr />
      <ContactForm />
      <hr />
    </div>
  );
};

export default AboutUs;
