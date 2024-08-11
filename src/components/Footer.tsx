import { contacts, footerProducts, locations, socials } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import { Partner1, Partner2 } from "../../public/images";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#17161c] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Marketing Partner */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Our Marketing Partner
              </h3>
              <div className="space-y-4">
                <div className="border border-gray-500 p-2">
                  <Image
                    src={Partner1}
                    alt="Partner Logo 1"
                    className="w-full h-auto"
                  />
                </div>
                <div className="border border-gray-500 p-2">
                  <Image
                    src={Partner2}
                    alt="Partner Logo 2"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                {footerProducts.map((item, index) => (
                  <div className="flex items-center gap-1 mb-2.5" key={index}>
                    <MdArrowForwardIos />
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-300 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  </div>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                {contacts.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <p className="text-sm text-gray-400">{item.title}</p>
                      </div>
                      <a
                        href={item.link || `#`}
                        className="hover:text-blue-300 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Location */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Location</h3>
              <ul className="space-y-4">
                {locations.map((item, index) => (
                  <li key={index}>
                    <p className="text-sm text-white flex items-center gap-2">
                      <CiLocationOn size={20} />
                      {item.title}
                    </p>
                    <p className="text-sm text-greyText">
                      {item.locations.join(", ")}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ul className="flex space-x-4">
                  {socials.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#727272] hover:text-white transition-colors"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" mx-auto px-4 py-5 bg-[#1b1a20]">
        <p className="text-center text-greyText">
          &copy; 2024
          <Link className="text-footerBlack" href="#">
            The Gemini India.
          </Link>{" "}
          All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
