import { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Experience() {
  return (
    <>
      <div className="max-w-[90%] mt-10 m-auto  px-8 text-left ">
        <div className="experience">
          <h2 className="text-[#F8673B] font-bold text-2xl text-left">
            Experience
          </h2>
          <div className="my-8">
            <div className="where">
              <p className="text-[#2a272c86] text-sm">2010 - Current</p>
              <p className="text-[#2a272c86] text-sm">Finalnd</p>
              <p className="text-[#F8673B] text-sm text-left">
                {/* <strong> */}
                Interactive media designer {/* </strong> */}
              </p>
              <div>
                <p className="my-3">
                  Throughout my recent experiences, I have focused on personal
                  projects and freelance engagements encompassing diverse areas
                  such as 3D/360 architectural visualization, virtual tours for
                  real estate, web design, and product visualizations. These
                  ventures have significantly enriched my expertise and provided
                  insights into cutting-edge technologies and trends, propelling
                  me to continuously enhance my capabilities. <br></br>
                  <br></br>
                  <strong>
                    Some higshlights of my accomplishments include:{" "}
                  </strong>
                  <br></br>
                  <br></br>
                </p>

                <div className="flex items-start  ">
                  <div>
                    <FaChevronCircleRight className="mr-2 my-1" />
                  </div>
                  <div>
                    Developing a comprehensive visual identity for a startup,
                    encompassing a fully-fledged website, logo design, printable
                    assets, and an immersive 360 VR experience showcasing the
                    company's product. This endeavor contributed to the
                    company's recognition, leading to its prestigious win of the
                    GIFA Best Invention of the Year award. Furthermore, the
                    company received commendation Email from President Sauli
                    Niinistö office, further emphasizing the impact of the
                    project.
                    <br></br>
                    <br></br>
                  </div>
                </div>

                <div className="flex items-start  ">
                  <div>
                    <FaChevronCircleRight className="mr-2 my-1" />
                  </div>
                  <div>
                    Crafting an interactive walk-through for the UAE Ministry of
                    Investment's new headquarters in the Abu Dhabi. This project
                    showcased my ability to seamlessly merge creativity and
                    functionality to deliver a compelling user experience.
                    <br></br>
                    <br></br>
                  </div>
                  </div>
                  <div className="flex items-start  ">
                    <div>
                      <FaChevronCircleRight className="mr-2 my-1" />
                    </div>
                    <div>
                      In addition to these accomplishments, I have undertaken
                      various personal practice projects, including the creation
                      of 3D renderings for interior and architectural spaces,
                      and an interactive sales application tailored for real
                      estate purposes.
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
           
          </div>
          <div className="my-8">
            <div className="where">
              <p className="text-[#2a272c86] text-sm">2001 - 2010</p>
              <p className="text-[#2a272c86] text-sm">
                Egypt - Oman - Kuwait - UAE
              </p>
              <p className="text-[#F8673B] text-sm text-left">
                {/* <strong> */}
                Architect
                {/* </strong> */}
              </p>
              <p className="my-3">
                In my previous roles in architecture, I developed a range of
                skills that are highly relevant to software development,
                including collaboration, teamwork, problem-solving, critical
                thinking, and project management expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
