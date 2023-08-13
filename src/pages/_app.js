import "../styles/globals.css";
import   NavBar   from "../pages/components/nav/nav";
import Script from "next/script"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "gtag"
import Head from "next/head";
import Footer from "./components/Footer";

function App({ Component, pageProps }) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  
  return (<>

<Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Head>
        <title>Welcome!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      
  <div className="w-full mx-auto h-screen">
  <NavBar />
  <Component {...pageProps} />
  
  <Footer />
  {/* https://coolors.co/0f3e52-b4e6f1-fbf6f3-f0f4f5-f8673b-feb464-d8f3fa */}
  </div>
  </>
  );
}

export default  App


