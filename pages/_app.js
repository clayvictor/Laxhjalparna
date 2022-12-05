import "../styles/globals.css";
import "../pages/components/Hero/Hero.css";
import "../pages/components/Navbar/Navbar.css";
import "../pages/components/Btn/Btn.css";
import "../pages/components/InfoContainer/InfoContainer.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
