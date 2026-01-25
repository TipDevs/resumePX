import Header from "./components/header";
import Editor from "./pages/Editor";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useState } from "react";
function App() {
  const [showPreview, setShowPreview] = useState(false);
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle:"mycv",
  });
  const toggleShowPreview = () => {
    setShowPreview(prev => !prev);
  }
  return (
    <>
      <Header reactToPrintFn={reactToPrintFn} showPreview={showPreview} toggleShowPreview={toggleShowPreview}/>
      <main>
        <Editor contentRef={contentRef} toggleShowPreview={toggleShowPreview} showPreview={showPreview}/>
      </main>
    </>
  );
}

export default App;
