import { useState, useEffect } from "react";
import { updateSkillInput } from "../domains/skillUpdater";
import { pubsub } from "../infrastructure/pubsub";
import { EVENTS } from "../infrastructure/events";
export default function useSkills() {
  const [skillsForm, setSkillsForm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    pubsub.publish(EVENTS.SKILLS_UPDATED, skillsForm);
  }, [skillsForm]);
  const handleInputChange = (e) => {
    const { value } = e.target;
    try {
      const updatedData = updateSkillInput(value);
      setSkillsForm(updatedData);
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };
  return { skillsForm, handleInputChange, errorMessage };
}
