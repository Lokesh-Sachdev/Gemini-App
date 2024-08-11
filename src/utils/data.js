import { BiSupport } from "react-icons/bi";
import {
  FaFacebook,
  FaLinkedin,
  FaPhoneVolume,
  FaTwitter,
  FaUsers,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import {
  MdOutlineLocalPharmacy,
  MdOutlineScreenSearchDesktop,
} from "react-icons/md";
import { PiBooksLight } from "react-icons/pi";
import { SiAwssecretsmanager } from "react-icons/si";

export const products = [
  {
    bgColor: "#a4b575",
    id: 1,
    title: "HOSPITAL INFORMATION MANAGEMENT SYSTEM",
    Icon: SiAwssecretsmanager,
    description:
      "Modern health systems tend to become increasingly complex with stakeholders interconnected and constantly changing environments. Any well-managed institution needs information across the length and breadth of health information systems. In many respects; there is a need to monitor what health care services are achieving across the range of basic values and directing principles.",
  },
  {
    bgColor: "#ff930e",
    id: 2,
    title: "TELEMEDICINE MANAGEMENT SYSTEM",
    Icon: GiMedicines,
    description:
      "Telemedicine Management System With social distancing and lockdowns in place, telemedicine is playing a large role today in making healthcare accessible to everyone. With the help of The Gemini Telemedicine software, doctors will be able to provide all-round services to OPD patients. What we do is virtualize your entire clinic through our software.Once you adopt The Gemini Telemedicine System,...",
  },
  {
    bgColor: "#18dc59",
    id: 3,
    title: "PHARMACY MANAGEMENT SYSTEM",
    Icon: MdOutlineLocalPharmacy,
    description:
      " E-Pharmacy is a well-integrated pharmacy management system designed by The Gemini, a reputed IT company for easy pharmacy management that can navigate the complexities of dispensing, inventory management, and daily operational functions. The Gemini E-Pharmacy is pharmacy management software that can incorporate robotic filling, barcode driven workflow, inventory management,...",
  },
  {
    bgColor: "#36bafe",
    id: 4,
    title: "EDUCATION SUPPORT SYSTEM",
    Icon: PiBooksLight,
    description:
      "Education ERP has been designed to cover the in depth functionalities of any Educational Institute/ University/ Group of Institutions, from the perspective of various users carrying different roles and responsibilities such as Students, Teachers, Staff, Principal, Management, Parents, Alumni etc. All the data is managed in a time sensitive manner along with the rules and policies applicable at that time, ",
  },
  {
    bgColor: "#ff3838",
    id: 5,
    title: "HUMAN RESOURCE MANAGEMENT SYSTEM",
    Icon: FaUsers,
    description:
      "Human Resource Management System is a complete solution for the human capital management of your business. This HR & Payroll Software helps to effectively organise and easy to manage the human resource functions and responsibility. The Gemini HRMS Solution makes the management less involved in time consuming administrative and payroll tasks. ",
  },
  {
    bgColor: "#01daba",
    id: 6,
    title: "PORTAL MANAGEMENT SYSTEM",
    Icon: MdOutlineScreenSearchDesktop,
    description:
      "The Gemini's Enterprise portal development services help deliver operational services to users and operators for end-to-end insights across the entire business. It provides deep visibility into log-ins, workflows, operational activities, configurations, and the security of your server & network elements, customer insights whether in traditional datacenters or distributed cloud infrastructures.",
  },
];

export const socials = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/www.thegemini.in/",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/TheGemini_India",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/the-gemini-057686114?trk=nav_responsive_tab_profile",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCQNFW6KodxfQg6_tssUe29A",
  },
];

export const locations = [
  {
    title: "Development Cell",
    locations: ["Ahmedabad", "Ajmer", "Kolkata"],
  },
  {
    title: "Technical Support",
    locations: [
      "Udaipur",
      "Mumbai",
      "Bangalore",
      "Noida",
      "Pune",
      "Kolkata",
      "Bhubaneswar",
      "Hydrabad",
      "Surat",
    ],
  },
  { title: "Business Address", locations: ["Berlin, Germany"] },
  {
    title: "The Gemini Partner",
    locations: ["Nigeria", "Kenya", "Uganda", "UAE", "Trinidad"],
  },
  { title: "Branch Office", locations: ["Bangalore", "UAE"] },
];

export const contacts = [
  { icon: <FaPhoneVolume />, title: "Phone", value: "+91 9265562676" },
  { icon: <BiSupport />, title: "Skype", value: "thegemini-india" },
  {
    icon: <FaWhatsapp />,
    title: "Connect to Whatsapp",
    value: "+91 9265562676",
    link: "https://api.whatsapp.com/send?phone=919265562676&text=Hello%20The%20Gemini%20India%20!",
  },
  {
    icon: <BiSupport />,
    title: "Technical Support",
    value: "techsupport@thegemini.co.in",
  },
  {
    icon: <BiSupport />,
    title: "Director",
    value: "director@thegemini.co.in",
  },
];

export const footerProducts = [
  "Hospital Information System",
  "Telemedicine Management System",
  "Pharmacy Management System",
  "Education Support System",
  "HRMS System",
  "Contractor Management System",
  "Patient Portal",
  "CRM",
];
