import Link from "next/link";
import Image from "next/image";

export default function Yle() {
  return (
    <>
      <div className=" m-auto my-8  flex flex-col ">
          <h2 className="text-gray-800 font-bold text-left  mb-4">Latest Project</h2>
        <div className="flex items-center mb-8">
          <Link href="https://www.aalto.fi/en/news/can-i-vote-an-online-tool-for-spreading-the-word-about-local-democracy-in-finland">
            <Image
              className="latestImg mr-8"
              src="/yle.svg.png"
              width={100}
              height={100}
              alt=""
            />
          </Link>
          <div className="latestImg ">
          <Link href="https://www.aalto.fi/en/news/can-i-vote-an-online-tool-for-spreading-the-word-about-local-democracy-in-finland">
            CAN I VOTE
          </Link>
          <p className="">
            A tool to help vote in the local elections.
          </p>
          </div>
        </div>


        <div className="flex items-center mb-8">
          <Link href="https://www.aalto.fi/en/news/can-i-vote-an-online-tool-for-spreading-the-word-about-local-democracy-in-finland">
            <Image
              className="latestImg mr-8"
              src="/garden-app.png"
              width={75}
              height={75}
              alt="garden-app"
            />
          </Link>
          <div className="latestImg">
          <Link href="https://www.aalto.fi/en/news/can-i-vote-an-online-tool-for-spreading-the-word-about-local-democracy-in-finland">
          Garden App
          </Link>
          <p className="">
          Smart App for plants care 
          </p>
          </div>
        </div>

        
      </div>
    </>
  );
}