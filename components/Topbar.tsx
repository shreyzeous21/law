import React from "react";

const Topbar = () => {
  return (
    <div className="border-b lg:block hidden ">
      {/* Adding border to the bottom of the entire topbar */}
      <div className="max-w-6xl px-3 py-1 w-full items-center flex justify-center mx-auto">
        <div className="flex justify-between w-full text-sm ">
          {/* Adjusted spacing and text size */}
          <span className=" text-lg">
            {/* Added border to the right side of the left section */}
            Mon – Sun: 9.00 am – 8.00pm
          </span>
          <div className="flex flex-row gap-4 text-lg">
            <a
              href="mailto:info@igual.com"
              className="hover:text-[#d7a179] transition duration-300"
            >
              info@igual.com
            </a>
            <span>4b, Walse Street, USA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
