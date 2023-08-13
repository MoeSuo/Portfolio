import Link from "next/link";
import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {
  
  return (
    <>
      <div id="expertise" className="max-w-[90%] mt-10 m-auto px-8 text-left">
        <h1 className="text-[#F8673B] font-bold text-2xl text-left my-3">
          Expertise
        </h1>

        <Accordion >
          <AccordionItem >
            <AccordionItemHeading>
              <AccordionItemButton>Coding Skills:</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                As a dedicated software development trainee, my coding skills
                are rapidly advancing. Starting with minimal knowledge, I've
                built a functional web app from scratch in just a month. My
                evolving tech stack includes{" "}
                <strong>
                  {" "}
                  JavaScript, React js, NEXT.js, HTML, CSS, Tailwind CSS,
                  Prisma, MongoDB, OpenAPI specifications, PHP, Three fiber,
                  Three js, and Swagger.
                </strong>{" "}
                This journey reflects the power of passion and persistence in
                mastering a diverse range of tools and technologies.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>CAD software:</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                As an experienced professional well-versed in CAD software and
                BIM, including{" "}
                <strong>
                  Archicad, AutoCAD, 3ds Max, and Blender, Corona renderer,
                  Keyshot
                </strong>{" "}
                I excel in translating architectural concepts into detailed
                designs. My proficiency spans accurate schematics with Archicad
                and AutoCAD, captivating visualizations using 3ds Max, and
                occasional creative explorations through Blender. My expertise
                ensures precise designs, seamless collaboration, and the ability
                to bring architectural visions to life.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Prototypes:</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Proficient in the art of prototyping, I seamlessly navigate
                <strong>
                  {" "}
                  Adobe XD, Figma, </strong> and even  <strong>Paper Prototyes.
                </strong>{" "}
                This skill set empowers me to translate abstract concepts into
                tangible prototypes, fostering effective communication and
                refining designs with precision. Whether crafting interactive
                digital prototypes or sketching rudimentary layouts on paper, my
                adeptness in prototyping facilitates seamless design iterations
                and collaborative innovation.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>UX Design:</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <h2 className="text-[#F8673B] text-md font-bold my-4">
                Complete UX project - Virtual Gallery
              </h2>
              <p>
                ARTGUARD is a specialized online platform catering to the
                distinct needs of museums and art galleries, offering strategic
                solutions to navigate the challenges posed by the ongoing
                Covid-19 pandemic. <br></br>
                <br></br>Our services extend beyond crisis management, aiding
                institutions in crafting a robust digital framework to broaden
                their global reach and fortify their preparedness against
                potential future adversities.<br></br>
                <br></br> My comprehensive research underscores ARTGUARD as a
                potent business prospect, addressing a pressing issue for nearly
                1000 museums and art galleries. Its viability is underscored by
                its targeted focus on a niche demographic that possesses both
                the demand and financial capacity. <br></br><br></br>Leveraging an
                ingeniously designed website, we deliver in-demand services
                tailored to the contemporary landscape, including: - Digitally
                safeguarding artifacts of cultural significance. - Guiding
                museums in establishing their digital presence. - Facilitating
                expansive engagement with diverse global audiences.<br></br><br></br>
              </p>
              <iframe
                src="/pdf/cuxp.pdf" // Replace with the actual path to your PDF file
                className="w-full h-[70vh]"
                title="Embedded PDF"
              />
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Service Design:
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Acquiring Service Design and UX Fundamentals during my studies
                at TAMK has been transformative. Armed with these skills, I've
                embarked on a journey of crafting remarkable user experiences.
                Seamlessly navigating principles learned, I guide users through
                intuitive journeys. My expertise encompasses{" "}
                <strong>
                  {" "}
                  user research, wireframing, and iterative testing.{" "}
                </strong>{" "}
                Applying these newfound proficiencies, I've woven impactful
                projects, exemplified in the attached screenshots. These visual
                representations embody my ability to infuse user-centric designs
                into any endeavor,
                <strong> post-TAMK, </strong> ensuring seamless interactions and
                delightful experiences.
              </p>
              <h2 className="text-[#F8673B] text-md font-bold my-4">
                Business Model Canvas
              </h2>
              <iframe
                src="/pdf/bmc.pdf" // Replace with the actual path to your PDF file
                className="w-full h-[70vh]"
                title="Embedded PDF"
              />
              <br></br>
              <br></br>
              <h2 className="text-[#F8673B] text-md font-bold my-4">
                Service Blueprint
              </h2>
              <iframe
                src="/pdf/sda.pdf" // Replace with the actual path to your PDF file
                className="w-full h-[70vh]"
                title="Embedded PDF"
              />
              <br></br>
              <br></br>
              
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                3D, 360, VR content creation:
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                During last 10 years, I learned how to create 3D, 360, and VR
                stuff. Now, I can make cool web 3D things and manuplate 3d
                models using my coding skills. I use these skills to make
                amazing virtual tours with 360 views, some made with computers
                (CGI) and some with real photos.
                <br></br> <br></br>
                <Link href="/Virtual_Architecture" className="text-blue-500">
                  You can see examples of my work here{" "}
                </Link>
                <br></br>
                <br></br> My goal is to make things that people enjoy and
                remember for a long time.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
