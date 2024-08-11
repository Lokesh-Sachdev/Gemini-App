import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Logo } from "../../public/images";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav
        className={`container mx-auto px-4  flex items-center justify-between pb-0 ${
          scrolled ? "py-2.5" : "py-7"
        }`}
      >
        <div className="flex items-center">
          <Image src={Logo} alt="The Gemini Logo" className="h-14 w-40 mr-2" />
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 font-poppins uppercase font-medium border-animation"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button className="md:hidden">
          <FiMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Us", href: "#about" },
  { id: 3, title: "Products", href: "#products" },
  { id: 4, title: "Services", href: "#services" },
  { id: 5, title: "Contact", href: "#footer" },
];
