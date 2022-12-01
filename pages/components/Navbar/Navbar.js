import Image from "next/image";
import Btn from "../Btn/Btn.js";
export default function Navbar() {
  return (
    <div className="lh-10 flex flex-between container">
      <div className="flex">
        <a className="flex" href="">
          <Image
            className="verticle"
            src="/logo.svg"
            alt="An SVG of logo"
            height={50}
            width={50}
          />
          <div className="logo">Läxhjälparna</div>
        </a>
      </div>
      <nav>
        <ul className="flex gap">
          <li>
            <a href="#">Om Oss</a>
          </li>
          <li>
            <a href="#">Vår Tjänst</a>
          </li>
          <li>
            <a href="#">Kontakta Oss</a>
          </li>
          <li>
            <Btn />
          </li>
        </ul>
      </nav>
    </div>
  );
}
