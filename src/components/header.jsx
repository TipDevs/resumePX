import "../styles/Header.css";
import jsPDF from "jspdf";
import resumePX from "../../public/svgs/resumePX.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
const generatePDF = () => {
    const CV = new jsPDF('portrait', 'pt', 'a4');
    CV.html(document.querySelector('#CV')).then(() => {
      CV.save(`${document.querySelector("#fullName").textContent}.pdf`);
    });
  };
export default function Header() {
  return (
    <>
      <header>
        <img src={resumePX} alt="résuméPX logo" />
        <nav>
          <button onClick={generatePDF}>
            Export <FontAwesomeIcon icon={faFileExport} bounce size="xl" />
          </button>
        </nav>
      </header>
    </>
  );
}
