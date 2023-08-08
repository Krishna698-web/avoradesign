import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";

const logoStyles = "text-slate-600 text-2xl hover:text-slate-800 transition";

const Footer = () => {
  return (
    <div className="w-full bg-slate-300 p-4">
      <h2 className="font-bold text-xl">Avora Design</h2>
      <ul className="flex gap-6 w-full justify-center my-8">
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/avoradesignandprints"
            className={logoStyles}>
            <BsFacebook />
          </a>
        </li>
        <li>
          <a target="_blank" href="#" className={logoStyles}>
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/avoradesignandprints/"
            className={logoStyles}>
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://wa.me/+917022204986"
            className={logoStyles}>
            <BsWhatsapp />
          </a>
        </li>
      </ul>
      <div className="">
        © 2023 Avora Design and Prints. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
