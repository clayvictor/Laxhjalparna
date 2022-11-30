import Head from "next/head";
import Navbar from "../pages/components/Navbar/Navbar.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Läxhjälparna</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar></Navbar>
    </div>
  );
}
