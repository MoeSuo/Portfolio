import Image from 'next/image'
import { Inter } from 'next/font/google'
import Summary from "./components/summary";
import Title from "./components/Title";
import Latest from "./components/Latest";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Script from "next/script"

import Education from "./components/Education";
import Courses from "./components/Courses";
import Expertise from "./components/Expertise";
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
<>
      {/* <google tags />  */}
      <div className="container">
        <Script id="google-analytics">
          {`

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NCTGK45JLT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NCTGK45JLT');
</script>
`}
        </Script>
      </div>

<div >
<Title />
  <Summary />
  <Latest />
  <Technologies />
  <Experience />
  <Education />
  <Courses />
  <Expertise />

        </div>
    </>
  )
}
