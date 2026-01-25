import { useState } from "react";
export default function Skills({skillsFormat}) {
  const [errorMessage, setErrorMessage] = useState("");
  function handleError() {
    if(skillsFormat.skillsForm[0] === "#" && skillsFormat.skillsForm[skillsFormat.skillsForm.length - 1] === "#") {
      setErrorMessage(`Skills can't start or end with "#"`);
      
    }
    setTimeout(() => {
        setErrorMessage("");
      }, 1500);
  }
  return (
    <section id="skills">
      <form action="">
        <label htmlFor="skills">
          Skills:{" "}
          <textarea
            type="text"
            id="skills"
            name="skills"
            value={skillsFormat.skillsForm}
            placeholder="List your skills with # seperator e.g Communication skill#JavaScript#Recipe Management"
            onChange={(e) => {
              skillsFormat.handleInputChange(e);
              skillsFormat.skillsForm.length !== "" && handleError();
            }}
            style={{
              maxHeight: "7em",
              height: "4em",
              outline: "none",
              border: "none",
              padding: "5px",
              maxWidth: "100%",
            }}></textarea>
        </label>
        <p style={{display: errorMessage === "" && "none", color: "red"}}>{errorMessage}</p>
      </form>
    </section>
  );
}
