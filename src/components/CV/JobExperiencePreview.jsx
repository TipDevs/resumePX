export default function JobExperiencePreview({ storedJobs }) {
  return storedJobs.length <= 0 ? (
    null
  ) : (
    <div id="jobExperiencePreview">
      <h4 style={{color: "green"}}>Work Experience</h4>
      <hr
        style={{
          width: "90%",
          height: "3px",
          background: "#000000",
          alignSelf: "center",
        }}
      />
      {storedJobs.map((job) => {
        const yearWorked = job.employmentYear + " - " + job.endYear;
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
