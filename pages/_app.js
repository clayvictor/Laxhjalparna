import "../styles/globals.css";
import "../pages/components/Hero/Hero.css";
import "../pages/components/Navbar/Navbar.css";
import "../pages/components/Btn/Btn.css";
import "../pages/components/InfoContainer/InfoContainer.css";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false;

library.add(fas);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
