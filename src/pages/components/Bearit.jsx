import Link from "next/link";
import Image from "next/image";

export default function Bearit() {
  return (
    <>
    <div className=" md:m-auto my-8 ">
        <div className="w-[100%] text-left">
        <h2 className="text-gray-800 font-bold text-left mb-4">Ongoing Education</h2>
          <Link href="https://bearit.fi">bearit.fi</Link>
          <p className="">Software Development training </p>
          <Link href="https://bearit.fi">
            <Image className="" src="/bearit.png" width={200} height={200} alt="" />{" "}
          </Link>
        </div>
       
      </div>
    </>
  );
}
