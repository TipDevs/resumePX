import { useState, useEffect } from "react";
import { pubsub } from "../../infrastructure/pubsub";
import { EVENTS } from "../../infrastructure/events";
export default function SkillsPreview() {
  const [skills, setSkills] = useState("");
  useEffect(() => {
    const token = pubsub.subscribe(EVENTS.SKILLS_UPDATED, (data, topic) => {
      const updatedData = data;
      setSkills(updatedData);
      console.log(skills);
    });
    return () => pubsub.unsubscribe(token);
  });
  return skills !== "" ? (
    <div id="skillsPreview">
      <h4 style={{ color: "green" }}>Skills(Soft and Technical)</h4>
      <hr
        style={{
          width: "90%",
          height: "3px",
          background: "#000000",
          alignSelf: "center",
        }}
      />
      <ul style={{ padding: "5px 15px", paddingRight: "0" }}>
        {skills[0] !== "#" &&
          skills.split("#").map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  ) : null;
}
