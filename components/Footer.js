import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:px-[70px] sm:px-12 px-5 bg-[#191919] flex sm:flex-row flex-col justify-between items-center text-white py-3 space-y-4 sm:space-y-0">
      <div className="sm:w-1/4 w-full text-center sm:text-left">
        <p>Copyright © 2021 The5starz. All Rights Reserved.</p>
      </div>
      <div className="flex sm:flex-row flex-col justify-end items-center sm:space-x-32 sm:w-3/4 w-full space-y-4 sm:space-y-0">
        <div className="flex divide-x">
          <Link href="/reviewz">
            <a className="px-5 py-3 text-sm">Join our community</a>
          </Link>
          <Link href="/reviewz">
            <a className="px-5 py-3 text-sm">Content creator tips</a>
          </Link>
          <Link href="/reviewz">
            <a className="px-5 py-3 text-sm">Privacy Policy</a>
          </Link>
          <Link href="/reviewz">
            <a className="px-5 py-3 text-sm">Terms & Conditions</a>
          </Link>
        </div>
        <div className="flex space-x-2.5">
          <Link href="/reviewz">
            <a className="p-1.5 rounded-full bg-white">
              <FaFacebook size={18} className="fill-black" />
            </a>
          </Link>
          <Link href="/reviewz">
            <a className="p-1.5 rounded-full bg-white">
              <FaInstagram size={18} className="fill-black" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
