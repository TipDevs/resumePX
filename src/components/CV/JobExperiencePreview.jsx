export default function JobExperiencePreview({ storedJobs }) {
  return storedJobs.length <= 0 ? (
    " "
  ) : (
    <div id="jobExperiencePreview">
      <h4>Work Experience</h4>
      <hr
        style={{
          width: "85%",
          height: "3px",
          background: "#000000",
          alignSelf: "center",
        }}
      />
      {storedJobs.map((jobs) => {
        const yearWorked = jobs.employmentYear + " - " + jobs.endYear;
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
            <li id="contributions">
              <ul>
                {jobs.contributions.split("|").map((contribution) => (
                  <li>{contribution}</li>
                ))}
              </ul>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
