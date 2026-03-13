import { useState, useEffect } from "react";
import { pubsub } from "../../infrastructure/pubsub";
import { EVENTS } from "../../infrastructure/events";
export default function JobExperiencePreview() {
  const [storedJobs, setStoredJobs] = useState([]);
  useEffect(() => {
    const token = pubsub.subscribe(EVENTS.JOBS_UPDATED, (data, topic) => {
      setStoredJobs(data);
    })
    return () => pubsub.unsubscribe(token);
  })
  return storedJobs.length <= 0 ? null : (
    <div id="jobExperiencePreview">
      <h4 style={{ color: "green" }}>Work Experience</h4>
      <hr
        style={{
          width: "90%",
          height: "3px",
          background: "#000000",
          alignSelf: "center",
        }}
      />
      {storedJobs.map((job) => {
        const yearWorked =
          job.employmentYear +
          (job.stillWorking ? "" : " - " + job.endYear);
        return (
          <ul key={job.id + "job"}>
            <li id="company">
              <h5>{job.company}</h5>
            </li>
            <li id="yearWorked">
              <p>{yearWorked}</p>
            </li>
            <li id="contributions">
              <ul>
                {job.contributions.split("#").map((contribution) => (
                  <li key={job.id + contribution}>{contribution}</li>
                ))}
              </ul>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
