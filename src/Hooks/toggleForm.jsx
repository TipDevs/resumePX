import { useState } from "react";
export default function useToggleForm(initial = false) {
  const [showForm, setShowForm] = useState(initial);
  const toggleForm = () => setShowForm((prev) => !prev);
  return { showForm, toggleForm };
}
