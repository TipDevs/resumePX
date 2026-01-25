export default function SkillsPreview({ skills }) {
  return skills !== "" ? (
    <div id="skillsPreview">
      <h4 style={{color: "green"}}>Skills(Soft and Technical)</h4>
      <hr
        style={{
          width: "90%",
          height: "3px",
          background: "#000000",
          alignSelf: "center",
        }}
      />
      <ul style={{padding: "5px 15px", paddingRight: "0"}}>
        { 
        (skills[0] !== "#" && skills[skills.length - 1] !== "#") && skills.split("#").map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  ) : null;
}
