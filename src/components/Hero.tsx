import { products } from "@/utils/data";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoIosMailOpen } from "react-icons/io";
import { AboutImg, HeroImg } from "../../public/images";
import ProductCard from "./ProductCard";

const Hero = () => {
  return (
    <main className="container mx-auto px-4">
      <section
        className="
relative overflow-hidden min-h-screen
       pt-[120px] pb-[90px] flex flex-wrap-reverse items-center justify-between
       "
      >
        <div className="md:w-7/12 max-w-2xl">
          <h2 className="green__heading">The Gemini India</h2>

          <h1 className="text-5xl font-poppins leading-[70px] font-bold mb-1.5">
            You&apos;re Partner in Building Innovative Digital Healthcare
            Solutions
          </h1>
          <p className="text-lg mb-8">
            Get the most out of your hospital&apos;s IT investment. We work with
            healthcare leaders and providing healthcare software solutions
            across the world to care for more people, in better ways.
          </p>
          <button className="button w-64 hover:gap-5 transition-all">
            Book a Free Demo Now
            <span>
              <IoIosMailOpen />
            </span>
          </button>
        </div>
        <div className="md:w-5/12 mb-4 w-full flex justify-center">
          <Image src={HeroImg} alt="Doctor" />
        </div>
      </section>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className="md:w-1/2 mb-4 md:mb-0 md:mr-8 mark-image
          "
          >
            <Image
              src={AboutImg}
              alt="Team collaboration"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-lg text-green font-medium">About Us</h2>

            <h3 className="text-4xl leading-[50px] font-semibold mb-4">
              The Gemini India! Connecting Business Need with IT.
            </h3>
            <p className="text-footerBlack mb-4">
              Headquartered in Ahmedabad, India, The Gemini is a leading Global
              Enterprise Software Provider with a reputation for Innovative
              Products and Outstanding Services. The company provides enterprise
              software solutions to multiple verticals, including Healthcare,
              Education, Corporate Houses, Public sector and more. The Gemini is
              a premier IT services company providing offshore IT outsourcing
              solutions to businesses across the globe. The company develops
              enterprise solutions that include Software solutions, Web
              solutions, Hospital Branding and an extensive range of IT
              solutions and products, focusing on the client specifications all
              on an affordable range.
            </p>
            <button className="button w-40 hover:gap-5 transition-all">
              Read More
              <span>
                <BsArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="pt-[70px] pb-[30px]">
        <div className="mb-14">
          <h2 className="font-poppins text-4xl text-center mb-4 font-bold">
            Our Products
          </h2>
          <p className="mx-auto max-w-xl text-footerBlack text-center ">
            Driving Business With Innovation & Authentic Integrity. Take a sneak
            peek into the value-driven Products we offer!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              heading={product.title}
              description={product.description}
              Icon={product.Icon}
              bgColor={product.bgColor}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hero;
