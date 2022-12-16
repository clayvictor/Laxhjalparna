import Head from "next/head";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero.js";
import Content from "./components/Content/Content.js";
import Footer from "./components/Footer/Footer";
import Faq from "./components/Faq/Faq";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Läxhjälparna</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Fontawesome */}
        <script src="https://kit.fontawesome.com/8a6f793172.js"></script>
      </Head>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Content Section */}
      <Content />
      {/* FAQ Section */}
      <Faq />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
