import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import useToggleForm from "../../Hooks/toggleForm";
export default function Education({
  cancelForm,
  onChange,
  storedEducation,
  addNewEducation,
  education,
}) {
  const { showForm, toggleForm } = useToggleForm(false);
  return (
    <>
      <section id="education">
        <h2>Education</h2>
        {showForm ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addNewEducation(toggleForm);
              e.target.reset();
            }}
            id="educationForm">
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="xl"
              onClick={(e) => {
                const targetElement = e.currentTarget;
                cancelForm(targetElement, toggleForm);
              }}
              style={{ cursor: "pointer" }}
            />
            <label htmlFor="certification">
              Certification:{" "}
              <input
                type="text"
                name="certification"
                value={education.certification}
                placeholder="Specify certificate acquired"
                onChange={onChange}
                required
              />
            </label>
            <label htmlFor="institution">
              Institution:{" "}
              <input
                type="text"
                name="institution"
                value={education.institution}
                placeholder="Enter the name of your Institution"
                onChange={onChange}
                required
              />
            </label>

            <label htmlFor="convocationYear">
              Admission Year:{" "}
              <input
                type="text"
                name="convocationYear"
                value={education.convocationYear.trim()}
                id="convocationYear"
                placeholder="Enter the year you got admission"
                onChange={onChange}
                required
              />
            </label>
            <label htmlFor="graduationYear">
              Graduation Year:{" "}
              <input
                type="text"
                name="graduationYear"
                value={education.graduationYear.trim()}
                id="graduationYear"
                placeholder="Enter the year you graduated"
                onChange={onChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div id="education_list_table">
            <div id="education_list">
              {storedEducation.length === 0 ? (
                <FontAwesomeIcon
                  icon={faSchool}
                  beatFade
                  size="5x"
                  style={{ color: "#da6752", alignSelf: "center" }}
                />
              ) : (
                storedEducation.map((education) => {
                  return (
                    <ul
                      key={education.certification + education.convocationYear}>
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
                              onClick={(e) => {
                                const targetElement = e.currentTarget;
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
                            {education.convocationYear}
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
                          onClick={(e) => {
                            const targetElement = e.currentTarget;
                          }}
                          style={{ cursor: "pointer", color: "#fee2d8ff" }}
                        />
                      </li>
                    </ul>
                  );
                })
              )}
            </div>
            <button onClick={toggleForm}>Add Education</button>
          </div>
        )}
      </section>
    </>
  );
}
