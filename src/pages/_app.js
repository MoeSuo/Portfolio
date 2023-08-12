import "../styles/globals.css";
import   NavBar   from "../pages/components/nav/nav";

import Footer from "./components/Footer";

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);


  return (<>
  <div className="max-w-[1200px] mx-auto h-screen">
  <NavBar />
  <Component {...pageProps} />
  
  <Footer />
  {/* https://coolors.co/0f3e52-b4e6f1-fbf6f3-f0f4f5-f8673b-feb464-d8f3fa */}
  </div>
  </>
  );
}

export default  App


