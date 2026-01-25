import { useState } from "react";
const initialSkills = "";
export default function useSkills() {
  const [skillsForm, setSkillsForm] = useState(initialSkills);
  const handleInputChange = (e) => {
    const {value} = e.target;
    setSkillsForm(value);
  }
  return { skillsForm, handleInputChange };
}
