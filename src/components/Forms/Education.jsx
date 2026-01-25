import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EducationForm from "./EducationForm/FormComponent";
import {
  faSchool,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
export default function Education({educationFormat}) {
  return (
    <>
      <section id="education">
        <h2>Education</h2>
        {educationFormat.formMode !== "off" ? (
          <EducationForm educationFormat={educationFormat}/>
        ) : (
          <div id="education_list_table">
            <div id="education_list">
              {educationFormat.storedEducations.length === 0 ? (
                <FontAwesomeIcon
                  icon={faSchool}
                  beatFade
                  size="5x"
                  style={{ color: "#da6752", alignSelf: "center" }}
                />
              ) : (
                educationFormat.storedEducations.map((education) => {
                  return (
                    <ul key={education.id}>
                      <li>
                        <ul>
                          <li>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              Degree:
                            </h6>{" "}
                            {education.certification}{" "}
                            <FontAwesomeIcon
                              icon={faEdit}
                              size="xl"
                              onClick={() => {
                                educationFormat.editEducation(education.id);
                              }}
                              style={{ cursor: "pointer", color: "#fee2d8ff" }}
                            />
                          </li>
                          <li>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              School Name:{" "}
                            </h6>{" "}
                            {education.institution}
                          </li>
                          <li>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              Admission Year:
                            </h6>{" "}
                            {education.admissionYear}
                          </li>
                          <li>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              Graduation Year:
                            </h6>{" "}
                            {education.graduationYear}
                          </li>
                        </ul>
                      </li>
                      <li id="delete">
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          size="xl"
                          onClick={() => {
                            educationFormat.deleteEducation(education.id);
                          }}
                          style={{ cursor: "pointer", color: "#fee2d8ff" }}
                        />
                      </li>
                    </ul>
                  );
                })
              )}
            </div>
            <button onClick={educationFormat.addNewEducation}>Add Education</button>
          </div>
        )}
      </section>
    </>
  );
}
