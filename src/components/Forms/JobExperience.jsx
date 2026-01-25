import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import JobForm from "./JobForm/FormComponent"
export default function JobExperience({jobFormat}) {
  return (
    <>
      <section id="jobExperience">
        <h2>Job Experience</h2>
        {jobFormat.formMode === "off" ? (
          <div id="jobs_list_table">
            <div id="jobs_list">
              {jobFormat.storedJobs.length === 0 ? (
                <FontAwesomeIcon
                  icon={faBriefcase}
                  beatFade
                  size="5x"
                  style={{ color: "#da6752", alignSelf: "center" }}
                />
              ) : (
                jobFormat.storedJobs.map((job) => {
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
                              onClick={() => {jobFormat.editJob(job.id)}}
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
                          onClick={() => {jobFormat.deleteJob(job.id)}}
                          style={{ cursor: "pointer", color: "#fee2d8ff" }}
                        />
                      </li>
                    </ul>
                  );
                })
              )}
            </div>
            <button onClick={jobFormat.addNewJob}>Add Job</button>
          </div>
        ) : (<JobForm jobFormat={jobFormat}/>)}
      </section>
    </>
  );
}
