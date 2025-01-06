import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex item-center justify-between gap-4 text-2xl ">
        <a
          href="https://www.linkedin.com/in/rajendra-bansod06"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
