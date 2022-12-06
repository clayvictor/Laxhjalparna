import Head from "next/head";
import Script from "next/script";
import Navbar from "../pages/components/Navbar/Navbar.js";
import Hero from "../pages/components/Hero/Hero.js";
import Content from "../pages/components/Content/Content.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Läxhjälparna</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://kit.fontawesome.com/8a6f793172.js"></script>
      </Head>
      <Navbar />
      <Hero />
      <Content />
    </div>
  );
}
