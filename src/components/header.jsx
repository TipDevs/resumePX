import "../styles/Header.css";
import resumePX from "/svgs/resumePX.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExport, faEye } from "@fortawesome/free-solid-svg-icons";
import { useReactToPrint } from "react-to-print";
export default function Header({ contentRef, toggleShowPreview, showPreview }) {
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "mycv",
  });
  return (
    <>
      <header>
        <img src={resumePX} alt="résuméPX logo" />
        <nav>
          <button
            disabled={showPreview}
            onClick={toggleShowPreview}
            id="preview_button">
            <FontAwesomeIcon icon={faEye} size="xl" />
          </button>
          <button onClick={reactToPrintFn} disabled={showPreview}>
            Export <FontAwesomeIcon icon={faFileExport} bounce size="xl" />
          </button>
        </nav>
      </header>
    </>
  );
}
