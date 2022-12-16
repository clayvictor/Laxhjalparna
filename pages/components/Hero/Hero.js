// Button component
import Btn from "../Btn/Btn.js";
import BtnOutline from "../Btn/BtnOutline.js";
export default function Hero() {
  return (
    // Hero text
    <div className="hero-bg">
      <div className="container hero-text">
        <div className="text-white ">
          <h1 className="hero-title">Läxhjälparna.</h1>
          <h1 className="hero-title">Vi stödjer där det behövs mest!</h1>
          <h2 className="sub-titel">
            Framtida lärare från lokala samhälle är här för att hjälpa era barn
            som behöver stöd i deras studier.
          </h2>
        </div>
        {/* CTA buttons */}
        <div className="flex">
          <Btn />
          <BtnOutline />
        </div>
      </div>
    </div>
  );
}
