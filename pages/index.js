import Head from "next/head";
import Navbar from "../pages/components/Navbar/Navbar.js";
import Hero from "../pages/components/Hero/Hero.js";

export default function Home() {
  return (
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/8a6f793172.js"
          crossorigin="anonymous"
        ></script>
        <title>Läxhjälparna</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  );
}
