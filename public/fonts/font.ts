import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "500"],
  variable: "--font-poppins",
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-roboto",
});
