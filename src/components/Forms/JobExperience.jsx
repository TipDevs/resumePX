import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import useToggleForm from "../../Hooks/toggleForm";
import JobForm from "./JobForm/FormComponent";
export default function JobExperience({
  cancelForm,
  onChange,
  stillWorkingCheckedForNewJob,
  storedJobs,
  addNewJob,
  jobExperience,
  deleteJobExperience,
  editJobExperience,
}) {
  const {
    showNewEntryForm,
    toggleNewEntryForm,
    showEditEntryForm,
    toggleEditEntryForm,
  } = useToggleForm(false);
  const [jobToBeEdit, setJobToBeEdit] = useState(null);
  return (
    <>
      <section id="jobExperience">
        <h2>Job Experience</h2>
        {showNewEntryForm ? (
          <JobForm
            jobExperience={jobExperience}
            toggler={toggleNewEntryForm}
            cancelForm={cancelForm}
            onChange={onChange}
            checked={jobExperience.stillWorking}
            onChecked={stillWorkingCheckedForNewJob}
            callback={() => {
              addNewJob({ callBack: toggleNewEntryForm });
            }}></JobForm>
        ) : showEditEntryForm ? (
          <JobForm
            jobExperience={jobToBeEdit}
            callback={() => {
              editJobExperience({
                jobToBeEdit: jobToBeEdit,
                callBack: toggleEditEntryForm,
              });
            }}
            checked={jobToBeEdit.stillWorking}
            onChecked={() => {
              setJobToBeEdit((prev) => ({
                ...prev,
                stillWorking: !prev.stillWorking,
              }));
            }}
            toggler={toggleEditEntryForm}
            onChange={(e) => {
              const { name, value } = e.target;
              setJobToBeEdit((prev) => ({
                ...prev,
                [name]: value,
              }));
            }}></JobForm>
        ) : (
          <div id="jobs_list_table">
            <div id="jobs_list">
              {storedJobs.length === 0 ? (
                <FontAwesomeIcon
                  icon={faBriefcase}
                  beatFade
                  size="5x"
                  style={{ color: "#da6752", alignSelf: "center" }}
                />
              ) : (
                storedJobs.map((job) => {
                  return (
                    <ul key={job.id}>
                      <li className="info">
                        <ul>
                          <li>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              Company Name:
                            </h6>{" "}
                            {job.company}{" "}
                            <FontAwesomeIcon
                              icon={faEdit}
                              id={job.id}
                              size="xl"
                              onClick={(e) => {
                                e.currentTarget;
                                setJobToBeEdit(() => job);
                                toggleEditEntryForm();
                              }}
                              style={{ cursor: "pointer", color: "#fee2d8ff" }}
                            />
                          </li>
                          <li>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              Employment Year:
                            </h6>{" "}
                            {job.employmentYear}
                          </li>
                          {job.stillWorking ? null : (
                            <li>
                              <h6
                                style={{ display: "inline", fontSize: "1rem" }}>
                                End Year:
                              </h6>{" "}
                              {job.endYear}
                            </li>
                          )}
                          <li style={{ maxWidth: "30ch" }}>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              Contriubtion:
                            </h6>{" "}
                            <details>
                              <ul>
                                {job.contributions
                                  .split("#")
                                  .map((contribution) => (
                                    <li key={job.company + contribution}>
                                      {contribution}
                                    </li>
                                  ))}
                              </ul>
                            </details>
                          </li>
                        </ul>
                      </li>
                      <li id="delete">
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          size="xl"
                          onClick={(e) => {
                            e.currentTarget;
                            deleteJobExperience(job.id);
                          }}
                          style={{ cursor: "pointer", color: "#fee2d8ff" }}
                        />
                      </li>
                    </ul>
                  );
                })
              )}
            </div>
            <button onClick={toggleNewEntryForm}>Add Job</button>
          </div>
        )}
      </section>
    </>
  );
}
