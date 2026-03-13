import { useState, useEffect } from "react";
import { updateMultipleInputs } from "../domains/multipleInputUpdater";
import * as educationDomain from "../domains/educationDomain";
import { pubsub } from "../infrastructure/pubsub";
import { EVENTS } from "../infrastructure/events";
const initialEducation = {
  institution: "",
  certification: "",
  admissionYear: "",
  graduationYear: "",
};
export default function useEducation() {
  const [educationForm, setEducationForm] = useState(initialEducation);
  const [storedEducations, setStoredEducation] = useState([]);
  const [formMode, setFormMode] = useState("off");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    pubsub.publish(EVENTS.EDUCATIONS_UPDATED, storedEducations);
  }, [storedEducations]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    try {
      setEducationForm(updateMultipleInputs(educationForm, name, value));
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };
  const addNewEducation = () => {
    setFormMode("Add");
    setEducationForm((prev) => ({
      ...prev,
      id: crypto.randomUUID(),
    }));
  };
  const editEducation = (id) => {
    setFormMode("Edit");
    const educationToEdit = storedEducations.find(
      (education) => education.id === id,
    );
    setEducationForm(educationToEdit);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    try {
      if (formMode === "Add") {
        setStoredEducation((prev) =>
          educationDomain.addEducationToList(prev, educationForm),
        );
      } else if (formMode === "Edit") {
        setStoredEducation((prev) =>
          educationDomain.editEducationInlist(prev, educationForm),
        );
      }
      setEducationForm(initialEducation);
      setFormMode("off");
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };
  const deleteEducation = (id) => {
    try {
      setStoredEducation((prev) =>
        educationDomain.removeEducationFromList(prev, id),
      );
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };
  const cancelForm = () => {
    setFormMode("off");
    setEducationForm(initialEducation);
  };
  return {
    handleInputChange,
    addNewEducation,
    editEducation,
    onSubmit,
    deleteEducation,
    cancelForm,
    formMode,
    educationForm,
    storedEducations,
    errorMessage,
  };
}
