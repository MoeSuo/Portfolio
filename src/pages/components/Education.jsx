import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { IoIosSchool } from "react-icons/io";

export default function Education() {
  return (
    <>
      <div className="max-w-[90%] mt-10 m-auto px-8 text-left">
        <div className="education">
          <h2 className="text-[#F8673B] font-bold text-2xl text-left">
            Education
          </h2>
          <div className="abroad">
            <ul>
              <div className="flex flex-row items-center">
              <IoIosSchool className="mx-2 md:w-4 md:h-4 w-10 h-10" />
              <li className="bg-gray-50 my-2 flex flex-col md:flex-row leading-1 md:items-center items-baseline w-full">
                 Training program LearnIT -
                Coding and Finnish Language.
                <Link
                  target="_blank"
                  className="mx-2 flex items-center text-blue-800"
                  href="https://bearit.fi"
                >
                  BearIT.fi <HiExternalLink className="mx-2" />
                </Link>
              </li>
              </div>
              <div className="flex flex-row items-center">
              <IoIosSchool className="mx-2 md:w-4 md:h-4 w-10 h-10" />
              <li className="bg-gray-50 my-2 flex flex-col md:flex-row leading-1 md:items-center items-baseline w-full ">
                [1.5 years] Program in Media
                and Arts / Interactive Media.{" "}
                <Link
                  target="_blank"
                  className="mx-2 flex items-center text-blue-800"
                  href="https://www.tuni.fi/en"
                >
                  TAMK <HiExternalLink className="mx-2" />
                </Link>
              </li>
              </div>
              <div className="flex flex-row items-center">
              <IoIosSchool className="mx-2 md:w-4 md:h-4 w-10 h-10" />
              <li className="bg-gray-50 my-2 flex flex-col md:flex-row leading-1 md:items-center items-baseline w-full">
                Energia-asiantuntija-koulutus.{" "}
                <Link
                  target="_blank"
                  className="mx-2 flex items-center text-blue-800"
                  href="https://www.arffman.fi/primetieto-osaksi-arffman%02groupia/"
                >
                  PRIMETIETO <HiExternalLink className="mx-2" />
                </Link>
              </li>
              </div>
              <div className="flex flex-row items-center">
              <IoIosSchool className="mx-2 md:w-4 md:h-4 w-10 h-10" />
              <li className="bg-gray-50 my-2 flex flex-col md:flex-row leading-1 md:items-center items-baseline w-full">
                 CAD paja (CAD-ohjelmistojen
                käyttö / 3D mallin tekeminen).{" "}
                <Link
                  target="_blank"
                  className="mx-2 flex items-center text-blue-800"
                  href="https://www.hyria.fi"
                >
                  Hyria Koulutus <HiExternalLink className="mx-2" />
                </Link>
              </li>
              </div>
              <div className="flex flex-row items-center">
              <IoIosSchool className="mx-2 md:w-4 md:h-4 w-10 h-10" />
              <li className="bg-gray-50 my-2 flex flex-col md:flex-row leading-1 md:items-center items-baseline w-full">
                Architecture Visualization.{" "}
                <Link
                  target="_blank"
                  className="mx-2 flex items-center text-blue-800"
                  href="https://www.tuni.fi"
                >
                  Avoin Yliopisto <HiExternalLink className="mx-2" />
                </Link>
              </li>
              </div>
              <div className="flex flex-row items-center">
              <IoIosSchool className="mx-2 md:w-4 md:h-4 w-10 h-10" />
              <li className="bg-gray-50 my-2 flex flex-col md:flex-row leading-1 md:items-center items-baseline w-full">
                Bachelor's Degree Program in
                Media and Arts / Architecture. Alexandria-Egypt
              </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
