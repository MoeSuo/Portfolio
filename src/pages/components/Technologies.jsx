import Link from "next/link";
import Image from "next/image";

export default function Technologies() {
  return (
    <>
      <div>
        <div className="my-8 ">
          <div className="flex w-[90%] m-auto  px-8 flex-col md:flex-row justify-center items-center md:max-w-[100%] mt-10  text-left">
            <div>
              <p className="my-3">
                As a software developer, I am dedicated to self-improvement and I am constantly learning new tools and technologies. Within a month, I was able to build a working web app from scratch. It's pretty cool how much progress I've made so far. <br></br>
              </p>
              <br></br>
              <strong>My evolving tech stack includes:</strong>
              <br></br>
              <br></br>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="bg-[#F4FDFF]  my-2 p-4 md:w-[30%] shadow-sm  opacity-100 transition duration-300 ease-in-out hover:bg-opacity-10 ">
                  <strong >Frontend:</strong>
                  <ul className=" my-2">
                    <li> - JavaScript</li>
                    <li> - React js</li>
                    <li> - NEXT.js</li>
                    <li> - HTML</li>
                    <li> - Tailwind CSS</li>
                    <li> - CSS</li>
                  </ul>
                </div>

                <div  className="bg-[#F4FDFF]  my-2 p-4  md:w-[30%] shadow-sm  opacity-100 transition duration-300 ease-in-out hover:bg-opacity-10 ">
                  <strong >Backend:</strong>
                  <ul className=" my-2">
                    <li> - Prisma</li>
                    <li> - MongoDB</li>
                    <li> - OpenAPI specifications</li>
                    <li> - PHP</li>
                  </ul>
                </div>
                <div  className="bg-[#F4FDFF]  my-2 p-4 md:w-[30%] shadow-sm  opacity-100 transition duration-300 ease-in-out hover:bg-opacity-10 ">
                  <strong >Other Tools:</strong>
                  <ul className=" my-2">
                  <div><li> - Swagger</li> </div>  
                    <li> - Three js</li>
                    <li> - Three fiber</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex m-auto flex-col md:flex-row justify-center items-center max-w-[90%] mt-10 px-8 text-left">
        <div className="flex  justify-evenly items-center gap-2 my-3 mx-3 ">
          <Image
            src="/swagger.webp"
            alt="tech"
            width={75}
            height={75}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/prisma-logo_sm.jpg"
            alt="tech"
            width={75}
            height={75}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex  justify-evenly items-center gap-2 my-3 mx-3 ">
          <Image
            src="/tailwindcss.png"
            alt="tech"
            width={120}
            height={120}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/nextjs-logo.png"
            alt="tech"
            width={75}
            height={75}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex  justify-evenly items-center gap-7 my-3 mx-3 ">
          <Image
            src="/js.png"
            alt="tech"
            width={35}
            height={35}
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src="/MongoDB-Logo.jpg"
            alt="tech"
            width={75}
            height={75}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
