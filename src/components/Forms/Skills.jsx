export default function Skills({onChange, skills}) {
  return (
    <section id="skills">
      <form action="">
        <label htmlFor="skills">
          Skills:{" "}
          <textarea
            type="text"
            id="skills"
            name="skills"
            value={skills}
            placeholder="List your skills with # seperator e.g Communication skill#JavaScript#Recipe Management"
            onChange={onChange}
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
