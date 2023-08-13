import "../styles/globals.css";
import   NavBar   from "../pages/components/nav/nav";
import Script from "next/script"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "gtag"
import Head from "next/head";
import Footer from "./components/Footer";
import Sendinblue from "./sendinblue";

function App({ Component, pageProps }) {
  const router = useRouter();
  // Get the pathname from the router object
  const pathname = router.pathname;
  // Define a mapping of route paths to titles
  const titleMap = {
    '/': 'Mohamed Sallam CV',
    '/visuals': 'Visuals',
    '/Virtual_Architecture': 'Virtual Architecture',
    '/Videos': 'Video Production',
    // Add more route paths and titles as needed
  };

  const pageTitle = titleMap[pathname] || 'Mohamed Sallam Portfolio';

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

      <title>{pageTitle}</title>

  <meta name="viewport" content="initial-scale=1, width=device-width" />
  <link rel="icon" href="/favicon.png" />


  {/* <Sendinblue />  */}
<Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function() {
    window.sib = {
        equeue: [],
        client_key: "c0p4p2p3l3gzyzywcltxgdsg"
    };
    /* OPTIONAL: email for identify request*/
    // window.sib.email_id = 'example@domain.com';
    window.sendinblue = {};
    for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
    (function(k) {
        window.sendinblue[k] = function() {
            var arg = Array.prototype.slice.call(arguments);
            (window.sib[k] || function() {
                    var t = {};
                    t[k] = arg;
                    window.sib.equeue.push(t);
                })(arg[0], arg[1], arg[2], arg[3]);
            };
        })(j[i]);
    }
    var n = document.createElement("script"),
        i = document.getElementsByTagName("script")[0];
    n.type = "text/javascript", n.id = "sendinblue-js", n.async = !0, n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key, i.parentNode.insertBefore(n, i), window.sendinblue.page();
})();
      `}
    </Script>
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


