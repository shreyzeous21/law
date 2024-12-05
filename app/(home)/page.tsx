import React from "react";
import Hero from "./_components/Hero";
import AboutHome from "./_components/AboutHome";
import PracticeArea from "./_components/PracticeArea";
import Testimonials from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";

const Home = () => {
  return (
    <div className="gap-10 flex flex-col">
      <Hero />
      <hr />
      <AboutHome />
      <hr />
      <PracticeArea />
      <hr />
      <Testimonials />
      <hr />
      <ContactForm />
      <hr />
    </div>
  );
};

export default Home;
