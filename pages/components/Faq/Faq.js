import Btn from "../Btn/Btn.js";
export default function Faq() {
  return (
    <div id="faq" className="faq purple flex">
      <div className="container questions">
        <h3>Vanligt ställda frågor</h3>
        <select for="faq">
          <option value="age">
            Vilken ålder erbjuder Läxhjälparna hjälp till?
          </option>
          <option value="trustworthy">
            Hur vet jag att den hjälp jag får är korrekt och pålitlig?
          </option>
          <option value="results">Vilka resultat kan jag förvänta mig?</option>
          <option value="apply">
            Vad behövs för att kunna ansöka om gratis undervisning?
          </option>
          <option value="feedback">
            Kan jag få personlig feedback och förklaringar på mitt arbete?
          </option>
        </select>
        <h2 id="awnsers" className="awnsers">
          Vår läxhjälp tjänst är utformad specifikt för elever mellan 7 och 12
          år. Vi förstår att läxor samt läsning kan vara en utmanande och
          överväldigande uppgift för unga elever, och vårt mål är att ge dem det
          stöd och den vägledning de behöver för att lyckas, samt är vår
          läxhjälp tjänst tillgänglig via en användarvänlig webbplats, och vi
          erbjuder en mängd olika alternativ för att passa olika behov och
          budgetar.
        </h2>
      </div>
      <div className="container newsletter">
        <h3>Intresserad? Gå med i vårt nyhetsbrev!</h3>
        <div>
          <input
            id="email"
            className="email"
            type="text"
            placeholder="Email:"
          />
          <p className="exclaimer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet.
          </p>
          <div className="mg-top-2">
            <Btn />
          </div>
        </div>
      </div>
    </div>
  );
}
