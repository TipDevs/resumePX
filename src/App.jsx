import Header from "./components/header";
import Editor from "./pages/Editor";
import { useRef } from "react";
import usePreview from "./Hooks/previewHooks";
function App() {
  const contentRef = useRef();
  const { showPreview, toggleShowPreview } = usePreview();
  return (
    <>
      <Header
        contentRef={contentRef}
        showPreview={showPreview}
        toggleShowPreview={toggleShowPreview}
      />
      <main>
        <Editor
          contentRef={contentRef}
          toggleShowPreview={toggleShowPreview}
          showPreview={showPreview}
        />
      </main>
    </>
  );
}

export default App;
