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
            
            <p className="w-full ">I am a passionate individual driven by an endless curiosity to learn new technologies. 

              My goal is to combine my past experiences and education with my programming skills to create dynamic and interactive digital experiences that have a lasting impact. 
            
              With my unique mix of design and technical expertise, along with a strong commitment to constant learning, I am well-prepared to be a valuable asset and a positive influence for any forward-thinking company.
              </p>
          </div>
 </>
  );
}
