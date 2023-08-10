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

export default function Technologies() {
  return (
    <>
      {/* <h1 className="text-gray-900 font-bold   my-5 text-center"> Learning Technologies</h1> */}
      <div className="flex m-auto flex-col md:flex-row justify-center items-center max-w-[90%] mt-10 px-8 text-left">

          <div className="flex  justify-evenly items-center gap-7 my-3 mx-3">
            <Image src="/swagger.webp" alt="tech" width={75} height={75} />
            <Image src="/prisma.svg" alt="tech" width={75} height={75} />
            <Image src="/tailwindcss.png" alt="tech" width={120} height={120} />
          </div>
          <div className="flex  justify-evenly items-center gap-7 my-3 mx-3">
            <Image src="/next.svg" alt="tech" width={75} height={75} />
            <Image src="/js.png" alt="tech" width={45} height={45} />
            <Image src="/MongoDB-Logo.jpg" alt="tech" width={75} height={75} />
          </div>
     
      </div>
    </>
  );
}
