import { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
const navigation = [
  { name: "Summary", href: "#", current: true },
  { name: "Experience", href: "#", current: false },
  { name: "Education", href: "#", current: false },
  { name: "Expertise", href: "#", current: false },
];


export default function Summary() {
  return (
    <>

 <div className="max-w-[90%] m-auto mt-10  px-8 text-left">
  <h1 className="text-[#F8673B] font-bold text-2xl text-left">Summary</h1>
            
            <p className="w-full ">I'm a highly skilled interactive media designer with a unique professional journey. My background in architecture, alongside my ongoing studies in 360-degree, VR/AR, and UX/UI, has shaped me into a well-rounded generalist. While these form the core of my skills and expertise, I am equally capable of assuming responsibilities and providing assistance whenever required.

Currently, I'm enhancing my skills through software development training at BearIT OY. This will enable me to create even more dynamic digital experiences.

My creativity and innovative problem-solving abilities set me apart. With my expertise, I'm confident in assisting your company to create groundbreaking interactive media that leaves a lasting impression on customers.
              </p>
          </div>
 </>
  );
}
