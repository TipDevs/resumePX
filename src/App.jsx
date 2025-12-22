import Header from "./components/header";
import Editor from "./pages/Editor";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
function App() {
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: document.querySelector("#fullName").textContent || "mycv",
  });
  return (
    <>
      <Header reactToPrintFn={reactToPrintFn} />
      <main>
        <Editor contentRef={contentRef} />
      </main>
    </>
  );
}

export default App;
