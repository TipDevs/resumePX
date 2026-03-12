import { useState } from "react";
export default function usePreview() {
  const [showPreview, setShowPreview] = useState(false);
  const toggleShowPreview = () => {
    setShowPreview((prev) => !prev);
  };
  return { showPreview, toggleShowPreview };
}
