import Image from "next/image";
import Btn from "../Btn/Btn.js";
export default function Navbar() {
  return (
    <div class="flex-between">
      <div class="flex">
        <Image src="/logo.svg" alt="An SVG of logo" height={50} width={50} />
        <h1>Läxhjälparna</h1>
      </div>
      <ul class="flex gap">
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
    </div>
  );
}
