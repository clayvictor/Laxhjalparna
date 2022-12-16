import React, { useState } from "react";
import Btn from "../Btn/Btn.js";

export default function Faq() {
  // Awnsers for FAQ
  const faqAwnsers = {
    age: "Vår läxhjälp tjänst är utformad specifikt för elever mellan 7 och 12 år. Vi förstår att läxor samt läsning kan vara en utmanande och överväldigande uppgift för unga elever, och vårt mål är att ge dem det stöd och den vägledning de behöver för att lyckas, samt är vår läxhjälp tjänst tillgänglig via en användarvänlig webbplats, och vi erbjuder en mängd olika alternativ för att passa olika behov och budgetar.",
    trustworthy:
      "Vi på läxhjälparna förstår vi hur viktigt det är att ge korrekt och pålitlig hjälp till sina användare. Vi är noga med att säkerställa att den hjälp vi erbjuder är av högsta kvalitet och uppfyller kraven på noggrannhet och trovärdighet. För att uppnå kraven anställer vi lärarstudent som är villiga att lära andra samt själv få erfarenhet inom lärar branschen.",
    results:
      "Genom att använda vår tjänst kan du förvänta sig att förbättra sina betyg och förtroende för sina studier. Vi kan hjälpa dig att förstå svåra begrepp och förse dig med de verktyg och strategier du behöver för att lyckas i skolan. Vi erbjuder en rad tjänster, inklusive läxhjälp, hjälp med läsning och mycket mer inom en snar framtid. Vi kan också hjälpa dig att utveckla viktiga studiefärdigheter, såsom tidshantering, organisation och effektiva läs- och anteckningstekniker. Med vår hjälp kan du få förtroende för förmågor och uppnå bättre betyg.",
    apply:
      "I vissa fall kan användare få tillgång till gratis undervisning om användaren kan bevisa låg inkomst. För att kvalificera sig för gratis undervisning kan användaren behöva ställa till förfogande bevis på sin låga inkomst såsom inkomstdeklarationer eller andra finansiella dokumenten. Utifrån den informationen kommer vi att avgöra om du har rätt till gratis undervisning.",
    feedback:
      "Ja! en av fördelarna med att använda läxhjälparna är att vi ger våra användare personliga feedback på sina studier, det innebär att användarna kan få informell och specifik feedback på sitt arbete samt framsteg vilket kan på lång sikt förbättra användarens förmågor och kunnighet. Personlig feedback kan alltså ta många former beroende på uppgiften, till exempel kan lärarstudenten ge skriftliga kommentarer på elevens uppgifter och lyfta fram de starka sidor samt peka ut saker som kan förbättras.",
  };

  // Create a state variable to store the selected option
  const [selectedOption, setSelectedOption] = useState(faqAwnsers.age);

  // Create a function to handle the onChange event of the select element
  const handleChange = (event) => {
    // Update the selected option in the state when the select's value changes
    setSelectedOption(event.target.value);
  };

  return (
    <div id="faq" className="faq purple flex">
      <div className="container questions">
        <h3>Vanligt ställda frågor</h3>
        {/* FAQ frågor */}
        <select onChange={handleChange} value={selectedOption} id="faq-choice">
          <option value={faqAwnsers.age}>
            Vilken ålder erbjuder Läxhjälparna hjälp till?
          </option>
          <option value={faqAwnsers.trustworthy}>
            Hur vet jag att den hjälp jag får är korrekt och pålitlig?
          </option>
          <option value={faqAwnsers.results}>
            Vilka resultat kan jag förvänta mig?
          </option>
          <option value={faqAwnsers.apply}>
            Vad behövs för att kunna ansöka om gratis undervisning?
          </option>
          <option value={faqAwnsers.feedback}>
            Kan jag få personlig feedback och förklaringar på mitt arbete?
          </option>
        </select>
        {/* Shows the correct awnsers depending on what the user selects */}
        <h2 className="awnsers">{selectedOption}</h2>
      </div>
      {/* Newsletter */}
      <div className="container newsletter">
        <h3>Intresserad? Gå med i vårt nyhetsbrev!</h3>
        <div>
          <input
            id="email"
            className="email"
            type="text"
            placeholder="Email:"
          />
          <div>
            <Btn />
          </div>
        </div>
      </div>
    </div>
  );
}
