import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import Breadcrumb from "@/components/ui/breadcrumb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us - Law",
    description: "Discover more contact us.",
  };
}

const ContactUs = () => {
  return (
    <div className="gap-10 flex flex-col">
      <section className="flex flex-col">
        <h1
          className="h-auto text-white text-4xl font-bold flex items-center justify-center"
          style={{
            backgroundImage: 'url("/law-slider-1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
        >
          <span className="flex flex-col items-center">
            <h1>Contact Us</h1>
            <Breadcrumb />
          </span>
        </h1>
      </section>
      <ContactForm />

      {/* <section className="flex justify-center w-full h-auto bg-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d348.887616127158!2d77.367175!3d28.613033000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57e4c8df143%3A0x3e7993a6c3056c48!2sBhutani%20Cyberpark!5e1!3m2!1sen!2sin!4v1733387777650!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section> */}
      <hr />
    </div>
  );
};

export default ContactUs;
