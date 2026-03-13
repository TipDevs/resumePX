import useSkills from "../../Hooks/skillsHooks";
import DisplayError from "../displayError";
export default function Skills() {
  const {skillsForm, handleInputChange, errorMessage} = useSkills();
  return (
    <section id="skills">
      <form action="">
        <label htmlFor="skillsForm">
          Skills:{" "}
          <textarea
            type="text"
            id="skillsForm"
            name="skill"
            value={skillsForm}
            placeholder="List your skills with # seperator e.g Communication skill#JavaScript#Recipe Management"
            onChange={(e) => {
              handleInputChange(e);
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
      </form>
      <DisplayError errorMessage={errorMessage}/>
    </section>
  );
}
