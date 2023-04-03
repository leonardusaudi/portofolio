import Head from "next/head";

import Navbar from "../components/navbar";
import Main from "../components/main";
import About from "../components/about";
import Portofolio from "@/components/portofolio";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portofolio Leo</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="relative z-10">
        <Navbar />
      </div>
        <Main />
        <About />
        <Portofolio />
        <Contact />
    </>
  );
}
