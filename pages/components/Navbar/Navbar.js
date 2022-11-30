import Image from "next/image";
export default function Navbar() {
  return (
    <div class="flex-between">
      <div class="flex">
        <Image src="/logo.svg" alt="An SVG of logo" height={60} width={60} />
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
          <a class="btn" href="#">
            Anmäl Dig!
          </a>
        </li>
      </ul>
    </div>
  );
}
