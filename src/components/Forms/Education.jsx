import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EducationForm from "./EducationForm/FormComponent";
import {
  faSchool,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import useEducation from "../../Hooks/educationHooks";
import DisplayError from "../displayError";
export default function Education() {
  const {
    handleInputChange,
    addNewEducation,
    editEducation,
    onSubmit,
    deleteEducation,
    cancelForm,
    formMode,
    educationForm,
    storedEducations,
    errorMessage,
  } = useEducation();
  return (
    <>
      <section id="education">
        <h2>Education</h2>
        {formMode !== "off" ? (
          <EducationForm
            handleInputChange={handleInputChange}
            onSubmit={onSubmit}
            cancelForm={cancelForm}
            educationForm={educationForm}
          />
        ) : (
          <div id="education_list_table">
            <div id="education_list">
              {storedEducations.length === 0 ? (
                <FontAwesomeIcon
                  icon={faSchool}
                  beatFade
                  size="5x"
                  style={{ color: "#da6752", alignSelf: "center" }}
                />
              ) : (
                storedEducations.map((education) => {
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
                                editEducation(education.id);
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
                            deleteEducation(education.id);
                          }}
                          style={{ cursor: "pointer", color: "#fee2d8ff" }}
                        />
                      </li>
                    </ul>
                  );
                })
              )}
            </div>
            <button onClick={addNewEducation}>Add Education</button>
          </div>
        )}
        <DisplayError errorMessage={errorMessage} />
      </section>
    </>
  );
}
