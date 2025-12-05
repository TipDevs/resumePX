import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleXmark,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import useToggleForm from "../../Hooks/toggleForm";
export default function JobExperience({
  cancelForm,
  onChange,
  storedJobs,
  addNewJob,
  jobExperience,
}) {
  const { showForm, toggleForm } = useToggleForm(false);
  const [checked, setChecked] = useState(false);
  const onChecked = () => {
    setChecked(!checked);
  };
  return (
    <>
      <section id="jobExperience">
        <h2>Job Experience</h2>
        {showForm ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addNewJob(toggleForm);
              e.target.reset();
            }}
            id="jobExperienceForm">
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="xl"
              onClick={(e) => {
                const targetElement = e.currentTarget;
                cancelForm(targetElement, toggleForm);
              }}
              style={{ cursor: "pointer" }}
            />
            <label htmlFor="companyName">
              Company Name:{" "}
              <input
                type="text"
                name="company"
                value={jobExperience.company}
                id="companyName"
                placeholder="Enter the name of company worked for..."
                onChange={onChange}
                required
              />
            </label>
            <label htmlFor="employmentYear">
              Employment Year:{" "}
              <input
                type="text"
                name="employmentYear"
                value={jobExperience.employmentYear.trim()}
                id="employmentYear"
                placeholder="Enter employment year"
                onChange={onChange}
                required
              />
            </label>
            <label htmlFor="endYear">
              End Year:{" "}
              <input
                type="text"
                name="endYear"
                value={jobExperience.endYear.trim()}
                id="endYear"
                placeholder="Enter year of leaving job"
                onChange={onChange}
                disabled={checked ? true : false}
                required
              />
            </label>
            <label
              htmlFor="stillWorking"
              style={{
                flexDirection: "row",
                gap: "4px",
                alignItems: "center",
              }}>
              Still working here?{" "}
              <input
                type="checkbox"
                name="stillWorking"
                id="stillWorking"
                onChange={onChecked}
                checked={checked}
              />
            </label>
            <label htmlFor="contributions">
              Contribution:{" "}
              <textarea
                type="text"
                name="contributions"
                id="contributions"
                placeholder="List your contributions to the company with | seperator e.g: Oversaw ingredient sourcing|Managed Inventory control|Assisted in cost management"
                onChange={onChange}
                checked={checked}
                style={{
                  height: "7em",
                  outline: "none",
                  border: "none",
                  padding: "5px",
                }}></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
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
                    <ul
                      key={job.company + job.employmentYear}
                      id={job.company + job.employmentYear}>
                      <li className="info">
                        <ul>
                          <li>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              Company Name:
                            </h6>{" "}
                            {job.company}{" "}
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
                              Employment Year:
                            </h6>{" "}
                            {job.employmentYear}
                          </li>
                          <li>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              End Year:
                            </h6>{" "}
                            {checked
                              ? (job.endYear = "Till date")
                              : job.endYear}
                          </li>
                          <li style={{ maxWidth: "30ch" }}>
                            <h6 style={{ display: "inline", fontSize: "1rem" }}>
                              Contriubtion:
                            </h6>{" "}
                            <ul>
                              {job.contributions
                                .split("|")
                                .map((contribution) => (
                                  <li>{contribution}</li>
                                ))}
                            </ul>
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
            <button onClick={toggleForm}>Add Job</button>
          </div>
        )}
      </section>
    </>
  );
}
