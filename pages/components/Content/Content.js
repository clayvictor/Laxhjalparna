import InfoContainer from "../InfoContainer/InfoContainer.js";

const student = {
  title: "LOKALA LÄRARSTUDENTER",
  text: "Vi anställer framtida lärare för att hjälpa barnen med deras läxor. Lärarstudenterna får både känna på hur det är att lära och erfarenhet.",
  icon: "fa-6x fa-sharp fa-solid fa-graduation-cap",
  bg: "purple",
};
const place = {
  title: "PÅ PLATS & ONLINE",
  text: "Läxhjälparna erbjuder dig chansen att både kunna ha undervisningen på plats eller distans beroende på var i Sverige du bor.",
  icon: "fa-6x fa-sharp fa-solid fa-house-signal",
  bg: "orange",
};
const apply = {
  title: "ANSÖK OM LÄXHJÄLP",
  text: "Vi erbjuder även gratis undervisning för de som inte har råd eller möjlighet till ytterligare undervisning.",
  icon: "fa-6x fa-sharp fa-solid fa-paper-plane",
  bg: "yellow",
};
export default function Content() {
  return (
    <div className="content-container container flex flex-between">
      <InfoContainer
        title={student.title}
        text={student.text}
        icon={student.icon}
        bg={student.bg}
      />
      <InfoContainer
        title={place.title}
        text={place.text}
        icon={place.icon}
        bg={place.bg}
      />
      <InfoContainer
        title={apply.title}
        text={apply.text}
        icon={apply.icon}
        bg={apply.bg}
      />
    </div>
  );
}
