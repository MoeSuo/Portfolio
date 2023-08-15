import Link from "next/link";
import Image from "next/image";

export default function Yle() {
  return (
    <>
      <div className="my-8  flex flex-col ">

          <h2 className="text-gray-800 font-bold text-left   mb-4">Latest Project</h2>
        <div className="flex md:flex-row flex-col ">
          <Link href="https://www.aalto.fi/en/news/can-i-vote-an-online-tool-for-spreading-the-word-about-local-democracy-in-finland">
            <Image
              className="  md:mr-8  "
              src="/yle.svg.png"
              width={100}
              height={100}
              style={{ width: 'auto', height: 'auto' }}
              alt=""
            />
          </Link>
          <div className="flex flex-col items-left mb-8">
          <Link className="ml-4" href="https://www.aalto.fi/en/news/can-i-vote-an-online-tool-for-spreading-the-word-about-local-democracy-in-finland">
            CAN I VOTE
          </Link>
          <p className="ml-4">
            A tool to help vote in the local elections.
          </p>
          </div>
        </div>


        <div className="flex md:flex-row flex-col">
          <Link  href="https://main.dps6886imp1cr.amplifyapp.com/">
            <Image
             className="  md:mr-8  "
              src="/garden_logo.png"
              width={100}
              height={100}
              style={{ width: 'auto', height: 'auto' }}
              alt="garden-app"
            />
          </Link>
          <div className="flex flex-col items-left mb-8">
          <Link className="ml-4" href="https://main.dps6886imp1cr.amplifyapp.com/">
          Garden App
          </Link>
          <p className="ml-4">
          Smart App for plants care 
          </p>
          </div>
        </div>

        
      </div>
    </>
  );
}
