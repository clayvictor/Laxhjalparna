import Image from "next/image";
import Btn from "../Btn/Btn.js";

// Navbar
export default function Navbar() {
  return (
    <div className="lh-10 flex flex-between container">
      <div className="flex">
        <a className="flex" href="">
          {/* Logo */}
          <Image
            className="verticle"
            src="/logo.svg"
            alt="Läxhjälparna logo"
            height={50}
            width={50}
          />
          <div className="logo">Läxhjälparna</div>
        </a>
      </div>
      {/* Nav links */}
      <nav>
        <ul className="nav flex">
          <a className="links" href="#">
            <li>Om Oss</li>
          </a>
          <a className="links" href="#">
            <li>Vår Tjänst</li>
          </a>
          <a className="links" href="#">
            <li>Kontakta Oss</li>
          </a>
          <li>
            <Btn />
          </li>
        </ul>
      </nav>
      <i className="fa-6x fa-solid fa-bars mobile-nav"></i>
    </div>
  );
}
