import Image from 'next/image'
import { Inter } from 'next/font/google'
import Summary from "./components/summary";
import Title from "./components/Title";
import Latest from "./components/Latest";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";

import Education from "./components/Education";
import Expertise from "./components/Expertise";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<div>
<Title />
  <Summary />
  <Latest />
  <Technologies />
  <Experience />
  <Education />
  <Expertise />
        </div>
    </>
  )
}
