import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ProductCard = ({
  Icon,
  heading,
  description,
  bgColor = "#18dc59",
}: {
  Icon: any;
  heading: string;
  description: string;
  bgColor?: string;
}) => {
  return (
    <div className=" flex flex-col items-center gap-2.5 py-12 px-7 text-center bg-[#f9fcff] transition-all hover:rounded hover:bg-white hover:shadow-[0 0 35px 0 rgba(0,0,0,0.05)] ">
      <span
        style={{ backgroundColor: bgColor }}
        className={` w-[70px] aspect-square rounded-full flex items-center justify-center `}
      >
        <Icon size={32} />
      </span>
      <h6 className="text-[22px] leading-[36px] font-semibold">{heading}</h6>
      <p className="text-footerBlack mb-5 text-justify">{description}</p>
      <Link
        className="text-green font-medium hover:text-[#2b1bbb] flex gap-2 items-center"
        href="#"
      >
        Read More
        <span>
          <BsArrowRight size={18} />
        </span>
      </Link>
    </div>
  );
};

export default ProductCard;
