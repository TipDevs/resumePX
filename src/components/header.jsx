import "../styles/Header.css";
import resumePX from "../../public/svgs/resumePX.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Header({reactToPrintFn, toggleShowPreview, showPreview}) {
  return (
    <>
      <header>
        <img src={resumePX} alt="résuméPX logo" />
        <nav>
          <button disabled={showPreview} onClick={toggleShowPreview} id="preview_button"><FontAwesomeIcon icon={faEye} size="xl" /></button>
          <button onClick={reactToPrintFn} disabled={showPreview}>
            Export <FontAwesomeIcon icon={faFileExport} bounce size="xl" />
          </button>
        </nav>
      </header>
    </>
  );
}
