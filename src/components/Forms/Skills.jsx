export default function Skills({skillsFormat}) {
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
            onChange={skillsFormat.handleInputChange}
            style={{
              maxHeight: "7em",
              height: "4em",
              outline: "none",
              border: "none",
              padding: "5px",
              maxWidth: "510.500px",
            }}></textarea>
        </label>
      </form>
    </section>
  );
}
