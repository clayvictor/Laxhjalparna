import Btn from "../Btn/Btn.js";
import BtnOutline from "../Btn/BtnOutline.js";
export default function Hero() {
  return (
    <div className="hero-bg">
      <div className="container hero-text">
        <div className="text-white ">
          <h1>Läxhjälparna.</h1>
          <h1>Vi stödjer där det behövs mest!</h1>
          <h2 className="sub-titel">
            Framtida lärare från lokala samhälle är här för att hjälpa era barn{" "}
            <br />
            som behöver stöd i deras studier.
          </h2>
        </div>
        <div className="flex">
          <Btn />
          <BtnOutline />
        </div>
      </div>
    </div>
  );
}
