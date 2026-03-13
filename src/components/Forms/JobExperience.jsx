import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import useJobExperience from "../../Hooks/jobHooks";
import JobForm from "./JobForm/FormComponent";
import DisplayError from "../displayError";
export default function JobExperience() {
  const {
    handleInputChange,
    toggleStillWorking,
    addNewJob,
    editJob,
    jobForm,
    onSubmit,
    formMode,
    storedJobs,
    cancelForm,
    deleteJob,
    errorMessage,
  } = useJobExperience();
  return (
    <>
      <section id="jobExperience">
        <h2>Job Experience</h2>
        {formMode === "off" ? (
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
                              onClick={() => {
                                editJob(job.id);
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
                          onClick={() => {
                            deleteJob(job.id);
                          }}
                          style={{ cursor: "pointer", color: "#fee2d8ff" }}
                        />
                      </li>
                    </ul>
                  );
                })
              )}
            </div>
            <button onClick={addNewJob}>Add Job</button>
          </div>
        ) : (
          <JobForm handleInputChange={handleInputChange} toggleStillWorking={toggleStillWorking} jobForm={jobForm} onSubmit={onSubmit} cancelForm={cancelForm} errorMessage={errorMessage} />
        )}
        <DisplayError errorMessage={errorMessage}/>
      </section>
    </>
  );
}
