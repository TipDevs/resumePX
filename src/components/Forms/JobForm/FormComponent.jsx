import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function JobForm({handleInputChange, toggleStillWorking, jobForm, onSubmit, cancelForm, errorMessage}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        id="jobExperienceForm">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="xl"
          onClick={cancelForm}
          style={{ cursor: "pointer" }}
        />
        <label htmlFor="companyName">
          Company Name:{" "}
          <input
            type="text"
            name="company"
            value={jobForm.company}
            id="companyName"
            placeholder="Enter the name of company worked for..."
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="employmentYear">
          Employment Year:{" "}
          <input
            type="text"
            name="employmentYear"
            value={jobForm.employmentYear}
            id="employmentYear"
            placeholder="Enter employment year"
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="endYear">
          End Year:{" "}
          <input
            type="text"
            name="endYear"
            value={jobForm.endYear}
            id="endYear"
            placeholder="Enter year of leaving job"
            onChange={handleInputChange}
            disabled={jobForm.stillWorking}
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
            onChange={toggleStillWorking}
            checked={jobForm.stillWorking}
          />
        </label>
        <label htmlFor="contributions">
          Contribution:{" "}
          <textarea
            type="text"
            name="contributions"
            value={jobForm.contributions}
            id="contributions"
            placeholder="List your contributions to the company with # seperator e.g: Oversaw ingredient sourcing#Managed Inventory control#Assisted in cost management"
            onChange={(e) => {
              handleInputChange(e)
              }}
            style={{
              maxHeight: "7em",
              height: "7em",
              outline: "none",
              border: "none",
              padding: "5px",
              maxWidth: "100%",
            }}></textarea>
        </label>
        <p style={{display: errorMessage === "" && "none", color: "red"}}>{errorMessage}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
