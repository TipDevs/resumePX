import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <>
      <header>
        <h1 id="page_title">
          <span id="résumé">résumé</span>
          PX
        </h1>
        <nav>
          <button>
            Export <FontAwesomeIcon icon={faFileExport} bounce size="xl" />
          </button>
        </nav>
      </header>
    </>
  );
}
