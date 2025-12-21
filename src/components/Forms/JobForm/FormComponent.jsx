import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function JobForm({
  jobExperience,
  callback,
  toggler,
  onChange,
  cancelForm,
  checked,
  onChecked
}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          callback();
          e.target.reset();
        }}
        id="jobExperienceForm">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="xl"
          onClick={(e) => {
            const targetElement = e.currentTarget;
            cancelForm(targetElement, toggler);
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
            value={jobExperience.contributions}
            id="contributions"
            placeholder="List your contributions to the company with # seperator e.g: Oversaw ingredient sourcing#Managed Inventory control#Assisted in cost management"
            onChange={onChange}
            style={{
              height: "7em",
              outline: "none",
              border: "none",
              padding: "5px",
            }}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
