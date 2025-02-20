import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-between gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rajendra-bansod06"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 "
        >
          <FaLinkedin size={45} />
        </a>
        <a
          href="https://flowcv.com/resume/p9f5bs1p3d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all mx-2 "
          >
            View CV
          </button>
        </a>
      </div>
    </nav>
  );
}
