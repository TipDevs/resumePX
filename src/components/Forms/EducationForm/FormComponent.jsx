import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function EducationForm({
  education,
  callback,
  toggler,
  onChange,
  cancelForm,
}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          callback();
          e.target.reset();
        }}
        id="educationForm">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="xl"
          onClick={(e) => {
            const targetElement = e.currentTarget;
            cancelForm(targetElement, toggler);
          }}
          style={{ cursor: "pointer" }}
        />
        <label htmlFor="certification">
          Certification:{" "}
          <input
            type="text"
            id="certification"
            name="certification"
            value={education.certification}
            placeholder="Specify certificate acquired"
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="institution">
          Institution:{" "}
          <input
            type="text"
            id="institution"
            name="institution"
            value={education.institution}
            placeholder="Enter the name of your Institution"
            onChange={onChange}
            required
          />
        </label>

        <label htmlFor="convocationYear">
          Admission Year:{" "}
          <input
            type="text"
            name="convocationYear"
            value={education.convocationYear.trim()}
            id="convocationYear"
            placeholder="Enter the year you got admission"
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="graduationYear">
          Graduation Year:{" "}
          <input
            type="text"
            name="graduationYear"
            value={education.graduationYear.trim()}
            id="graduationYear"
            placeholder="Enter the year you graduated"
            onChange={onChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
