import FormSection from "../components/FormSection";
import PreviewSection from "../components/PreviewSection";
export default function Editor({ contentRef, showPreview, toggleShowPreview }) {
  return (
    <>
      <FormSection showPreview={showPreview} />
      <PreviewSection
        contentRef={contentRef}
        showPreview={showPreview}
        toggleShowPreview={toggleShowPreview}
      />
    </>
  );
}
