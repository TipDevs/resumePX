export default function EducationPreview({ storedEducation }) {
  return storedEducation.length <= 0 ? (
    " "
  ) : (
    <div id="educationPreview">
      <h4>Education</h4>
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
          education.convocationYear + " - " + education.graduationYear;
        return (
          <ul
            id={education.certification + education.convocationYear}
            key={education.certification + education.convocationYear}>
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
