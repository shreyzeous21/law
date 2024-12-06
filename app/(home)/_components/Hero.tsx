"use client";
import { ArrowDown } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  // Content data for dynamic changes
  const slides = [
    {
      title: "Leave Court to us",
      subtitle: "The Legal Advice Need Phone Call Away",
      description: "We will givev you proper solutions for cases.",
      image: "/law-slider-1.jpg",
    },
    {
      title: "Experienced Lawyers",
      subtitle: "Your Justice, Our Commitment",
      description:
        "Experienced lawyers at your service to ensure justice is served. We stand by your side through thick and thin.",
      image: "/law-slider-2.jpg",
    },
  ];

  return (
    <div className="h-[90vh]  w-full flex mx-auto justify-center relative">
      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full px-4  mx-auto justify-center flex bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="max-w-6xl gap-[2rem] flex items-center lg:h-[80vh] flex-col lg:flex-row justify-center lg:justify-start w-full mx-auto relative z-10">
                {/* Badge Section */}
                <div className="hidden lg:flex flex-col items-center text-white space-y-10">
                  {/* Circular Badge */}
                  <div className="relative flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-gray-500">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-300">
                        25
                      </span>
                      <span className="text-xs sm:text-sm text-gray-400">
                        Years
                      </span>
                    </div>
                  </div>

                  {/* Downward Arrow */}
                  <div className="animate-bounce">
                    <ArrowDown size={24} className="text-gray-300" />
                  </div>
                  <div className="flex flex-col items-center">
                    {/* Vertical Text */}
                    <span className="mt-2 text-xs sm:text-sm text-gray-500 tracking-[0.25em] rotate-90">
                      LAW FIRM
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full h-full justify-center gap-2 lg:w-1/2 p-4  flex flex-col text-white">
                  <span className="uppercase text-lg text-[#b8967e]">
                    {slide.title}
                  </span>
                  <p className="leading-tight font-bold text-4xl lg:text-5xl">
                    {slide.subtitle.split(" ")[0]}{" "}
                    <span className="text-[#b8967e]">
                      {slide.subtitle.split(" ")[1]}
                    </span>{" "}
                    {slide.subtitle.split(" ").slice(2).join(" ")}
                  </p>
                  <span className="text-sm">{slide.description}</span>
                  <button className="learn-more mt-3">
                    <span aria-hidden="true" className="circle">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
