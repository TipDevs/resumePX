import "../styles/Header.css";
import resumePX from "../../public/svgs/resumePX.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <>
      <header>
        <img src={resumePX} alt="résuméPX logo" />
        <nav>
          <button>
            Export <FontAwesomeIcon icon={faFileExport} bounce size="xl" />
          </button>
        </nav>
      </header>
    </>
  );
}
