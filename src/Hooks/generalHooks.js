import { useState, useEffect } from "react";
import { updateMultipleInputs } from "../domains/multipleInputUpdater";
import { pubsub } from "../infrastructure/pubsub";
import { EVENTS } from "../infrastructure/events";
const initialGeneralData = {
  firstName: "",
  lastName: "",
  residenceAddress: "",
  phoneNumber: "",
  description: "",
  emailAddress: "",
};
export default function useGeneral() {
  const [generalForm, setGeneralForm] = useState(initialGeneralData);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    pubsub.publish(EVENTS.GENERALDATA_UPDATED, generalForm);
  }, [generalForm]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    try {
      const updatedData = updateMultipleInputs(generalForm, name, value);
    setGeneralForm(updatedData);
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
    
  };
  return { generalForm, handleInputChange, errorMessage };
}
