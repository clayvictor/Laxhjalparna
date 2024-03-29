import "../styles/globals.css";
import "./components/Hero/Hero.css";
import "./components/Navbar/Navbar.css";
import "./components/Btn/Btn.css";
import "./components/InfoContainer/InfoContainer.css";
import "./components/CTAParagraph/CTAParagraph.css";
import "./components/Faq/Faq.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
