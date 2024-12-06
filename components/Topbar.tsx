import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="border-b border-b-slate-800 lg:block hidden">
      {/* Adding border to the bottom of the entire topbar */}
      <div className="max-w-6xl px-3 py-2 w-full items-center flex justify-center mx-auto">
        <div className="flex flex-row justify-between items-center w-full">
          <a
            href="mailto:info@advsarthakmittal.com"
            className="hover:text-[#d7a179] flex items-center  gap-2 transition duration-300"
          >
            <Mail />
            info@advsarthakmittal.com
          </a>

          <button className="hover:text-[#d7a179] flex gap-2 items-center transition duration-300">
            <Phone className="w-5 h-5" />{" "}
            <Link href="tel:+919582678877">+91 9582678877</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
