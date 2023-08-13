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
<Script >
      {`
        (function(d, w, c) {
          w.BrevoConversationsID = '64d8b8873ecdf44215688032';
          w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
          };
          var s = d.createElement('script');
          s.async = true;
          s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
          if (d.head) d.head.appendChild(s);
      })(document, window, 'BrevoConversations');
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


