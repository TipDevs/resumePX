export default function JobExperiencePreview({ storedJobs }) {
  return storedJobs.length <= 0 ? (
    " "
  ) : (
    <div id="jobExperiencePreview">
      <hr style={{ width: "100%" }}/>
      <h4>Experience</h4>
      {storedJobs.map((jobs) => {
        const yearWorked =
          jobs.employmentYear + " - " + jobs.endYear;
        return (
          <ul
            id={jobs.company + jobs.employmentYear}
            key={jobs.company + jobs.employmentYear}>
            <li id="company">
              <h5>{jobs.company}</h5>
            </li>
            <li id="yearWorked">
              <p>{yearWorked}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
