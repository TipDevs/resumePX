import { useState } from "react";
export default function useToggleForm(initial = false) {
  const [showNewEntryForm, setshowNewEntryForm] = useState(initial);
  const [showEditEntryForm, setShowEditEntryForm] = useState(initial);
  const toggleNewEntryForm = () => setshowNewEntryForm((prev) => !prev);
  const toggleEditEntryForm = () => setShowEditEntryForm((prev) => !prev);
  return { showNewEntryForm, toggleNewEntryForm, showEditEntryForm, toggleEditEntryForm };
}
