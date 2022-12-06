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
            alt="Läxhjälparna logo"
            height={50}
            width={50}
          />
          <div className="logo">Läxhjälparna</div>
        </a>
      </div>
      <nav>
        <ul className="flex">
          <a className="links" href="#">
            <li>Om Oss</li>
          </a>
          <a className="links" href="#">
            {" "}
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
    </div>
  );
}
