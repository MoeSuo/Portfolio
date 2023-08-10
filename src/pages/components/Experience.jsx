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

export default function Experience() {
  return (
    <>
      <div className="max-w-[90%] mt-10 m-auto  px-8 text-left">
        <div className="experience">
          <h2 className="text-[#F8673B] font-bold text-2xl text-left">Experience</h2>
          <div className="my-8">
            <div className="where">
            <p className="text-[#2a272c86] text-sm">2010 - Current</p>
              <p className="text-[#2a272c86] text-sm">Finalnd</p>
              <p className="text-[#F8673B] text-sm text-left">
                {/* <strong> */}
                  Freelancer / Continuous Resilient Self-Improver{" "}
                {/* </strong> */}
              </p>
              <p className="my-3">
                While adapting to a new country, I encountered the challenge of
                unemployment for a period of time. However, I refused to let
                this hold me back. Instead, I took it as an opportunity to
                invest in myself, learning new skills through online courses,
                self-teaching, and the support of Finland's education system.
                During this time, I also worked on personal projects and
                freelance jobs in areas such as 3D architectural visualization,
                virtual tours for real estate, WordPress development,
                user-experience design, and product visualizations. These
                projects provided me with valuable experience and insights into
                the latest technologies and trends, and I continually pushed
                myself to improve and learn more.
              </p>
            </div>
          </div>
          <div className="my-8">
            <div className="where">
              <p className="text-[#2a272c86] text-sm">2001 - 2010</p>
              <p className="text-[#2a272c86] text-sm">Egypt - Oman - Kuwait - UAE</p>
              <p className="text-[#991861] font-semibold text-left">
                {/* <strong> */}
                  Architect
                  {/* </strong> */}
              </p>
              <p className="my-3">
                During my time working in various positions in architecture,
                including supervision and design roles, I developed a range of
                skills that are highly relevant to software development. These
                skills include collaboration and coordination with team members
                and stakeholders, problem-solving, critical thinking, a
                continuous learning mindset, and project management expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
