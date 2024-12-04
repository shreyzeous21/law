import { ArrowRight } from "lucide-react";
import React from "react";

const PracticeArea = () => {
  return (
    <div className="justify-center mx-auto flex max-w-6xl px-4 flex-col gap-4 w-full">
      <span className="text-black bg-gray-200 text-center  py-1 px-4 justify-center items-center flex w-1/2 mx-auto  rounded-md shadow-md">
        Practice Area
      </span>
      {/* row 1 */}
      <div className="flex flex-col gap-4  lg:flex-row h-auto w-full">
        <div className="bg-[#b8967e] lg:w-1/2 gap-4 flex flex-col rounded-md p-10">
          <p className="text-white text-4xl font-semibold">
            Practice areas showcase the diverse expertise of our legal team,
            ensuring comprehensive support for a wide range of legal needs.
          </p>
          <button className="flex text-white hover:text-[#383430] duration-300 transition">
            View All Service <ArrowRight />
          </button>
        </div>

        {/* First Practice Area Card */}
        <div className="lg:w-1/4 text-4xl h-auto rounded-md p-10 text-white font-bold bg-slate-800 flex flex-col justify-between">
          <div className="flex flex-row justify-between items-center w-full">
            <span>01</span>
            <span>
              <img
                src="/logo.png"
                alt=""
                className="h-12 w-12 object-contain rounded-full"
              />
            </span>
          </div>
          <p>Civil Litigation</p>
        </div>

        {/* Second Practice Area Card */}
        <div className="lg:w-1/4 rounded-md h-auto text-xl text-white font-bold bg-slate-800 flex flex-col justify-between">
          <img
            src="/law-slider-1.jpg"
            alt=""
            className="h-full w-auto rounded-md object-cover object-right"
          />
        </div>
      </div>
      {/* row-1 */}

      {/* row-2 */}
      <div className="flex flex-col gap-4  lg:flex-row h-auto w-full">
        {/* First Practice Area Card */}
        <div className="lg:w-1/2 text-4xl lg:h-[50vh]  rounded-md p-10 text-white font-bold bg-slate-800 flex flex-col justify-between">
          <div className="flex flex-row justify-between items-center w-full">
            <span>01</span>
            <span>
              <img
                src="/logo.png"
                alt=""
                className="h-12 w-12 object-contain rounded-full"
              />
            </span>
          </div>
          <p>Civil Litigation</p>
        </div>

        {/* Second Practice Area Card */}
        <div className="lg:w-1/2 rounded-md lg:h-[50vh]  text-xl text-white font-bold bg-slate-800 flex flex-col justify-between">
          <img
            src="/law-slider-1.jpg"
            alt=""
            className="h-full w-auto rounded-md object-cover object-right"
          />
        </div>
        {/* First Practice Area Card */}
        <div className="lg:w-1/2 text-4xl lg:h-[50vh] rounded-md p-10 text-white font-bold bg-slate-800 flex flex-col justify-between">
          <div className="flex flex-row justify-between items-center w-full">
            <span>01</span>
            <span>
              <img
                src="/logo.png"
                alt=""
                className="h-12 w-12 object-contain rounded-full"
              />
            </span>
          </div>
          <p>Civil Litigation</p>
        </div>

        {/* Second Practice Area Card */}
        <div className="lg:w-1/2 rounded-md lg:h-[50vh]  text-xl text-white font-bold bg-slate-800 flex flex-col justify-between">
          <img
            src="/law-slider-1.jpg"
            alt=""
            className="h-full w-auto rounded-md object-cover object-right"
          />
        </div>
      </div>
      {/* row-2 */}

      {/* row-3 */}
      <div className="flex flex-col gap-4  lg:flex-row h-auto w-full">
        <div className="bg-[#b8967e] lg:w-1/2 gap-4 flex flex-col rounded-md p-10">
          <p className="text-white text-4xl font-semibold">
            Practice areas showcase the diverse expertise of our legal team,
            ensuring comprehensive support for a wide range of legal needs.
          </p>
          <button className="flex text-white hover:text-[#383430] duration-300 transition">
            View All Service <ArrowRight />
          </button>
        </div>

        {/* Second Practice Area Card */}
        <div className="lg:w-1/4 rounded-md h-auto text-xl text-white font-bold bg-slate-800 flex flex-col justify-between">
          <img
            src="/law-slider-1.jpg"
            alt=""
            className="h-full w-auto rounded-md object-cover object-right"
          />
        </div>
        {/* First Practice Area Card */}
        <div className="lg:w-1/4 text-4xl h-auto rounded-md p-10 text-white font-bold bg-slate-800 flex flex-col justify-between">
          <div className="flex flex-row justify-between items-center w-full">
            <span>01</span>
            <span>
              <img
                src="/logo.png"
                alt=""
                className="h-12 w-12 object-contain rounded-full"
              />
            </span>
          </div>
          <p>Civil Litigation</p>
        </div>
      </div>
      {/* row-3 */}
    </div>
  );
};

export default PracticeArea;