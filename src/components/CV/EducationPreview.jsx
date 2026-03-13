import { useState, useEffect } from "react";
import { pubsub } from "../../infrastructure/pubsub";
import { EVENTS } from "../../infrastructure/events";
export default function EducationPreview() {
  const [storedEducation, setStoredEducation] = useState([]);
  useEffect(() => {
    const token = pubsub.subscribe(EVENTS.EDUCATIONS_UPDATED, (data, topic) => {
      setStoredEducation(data);
    });
    return () => pubsub.unsubscribe(token);
  });
  return storedEducation.length <= 0 ? null : (
    <div id="educationPreview">
      <h4 style={{ color: "green" }}>Education</h4>
      <hr
        style={{
          width: "85%",
          height: "3px",
          background: "#000000",
          alignSelf: "center",
        }}
      />
      {storedEducation.map((education) => {
        const wholeSession =
          education.admissionYear + " - " + education.graduationYear;
        return (
          <ul key={education.id + "education"}>
            <li id="certification">
              <h5>{education.certification}</h5>
            </li>
            <li id="institution">
              <p>{education.institution}</p>
            </li>
            <li id="wholeSession">
              <p>{wholeSession}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
