import React from "react";
import { CONTACT } from "../constants";

export default function Contact() {
  return (
    <div className="border-b  border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.name}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {" "}
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
