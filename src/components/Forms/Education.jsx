import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EducationForm from "./EducationForm/FormComponent";
import {
  faSchool,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import useToggleForm from "../../Hooks/toggleForm";
import { useState } from "react";
export default function Education({
  cancelForm,
  onChange,
  storedEducation,
  addNewEducation,
  education,
  deleteEducation,
  editEducation,
}) {
  const [educationToBeEdit, setEducationToBeEdit] = useState(null);
  const {
    showNewEntryForm,
    toggleNewEntryForm,
    showEditEntryForm,
    toggleEditEntryForm,
  } = useToggleForm(false);
  return (
    <>
      <section id="education">
        <h2>Education</h2>
        {showNewEntryForm ? (
          <EducationForm
            education={education}
            toggler={toggleNewEntryForm}
            callback={() => {
              addNewEducation({ callBack: toggleNewEntryForm });
            }}
            onChange={(e) => {
              onChange(e);
            }}
            cancelForm={cancelForm}></EducationForm>
        ) : showEditEntryForm ? (
          <EducationForm
            education={educationToBeEdit}
            callback={() => {
              editEducation({
                educationToBeEdit: educationToBeEdit,
                callBack: toggleEditEntryForm,
              });
            }}
            toggler={toggleEditEntryForm}
            onChange={(e) => {
              const { name, value } = e.target;
              setEducationToBeEdit((prev) => ({
                ...prev,
                [name]: value,
              }));
            }}
            cancelForm={cancelForm}></EducationForm>
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
                              onClick={(e) => {
                                e.currentTarget;
                                setEducationToBeEdit(() => education);
                                toggleEditEntryForm();
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
                            e.currentTarget;
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
            <button onClick={toggleNewEntryForm}>Add Education</button>
          </div>
        )}
      </section>
    </>
  );
}
