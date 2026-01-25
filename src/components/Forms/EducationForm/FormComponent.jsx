import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function EducationForm({educationFormat}) {
  const educationForm = educationFormat.educationForm;
  return (
    <>
      <form
        onSubmit={educationFormat.onSubmit}
        id="educationForm">
        <FontAwesomeIcon
          icon={faCircleXmark}
          size="xl"
          onClick={educationFormat.cancelForm}
          style={{ cursor: "pointer" }}
        />
        <label htmlFor="certification">
          Certification:{" "}
          <input
            type="text"
            id="certification"
            name="certification"
            value={educationForm.certification}
            placeholder="Specify certificate acquired"
            onChange={educationFormat.handleInputChange}
            required
          />
        </label>
        <label htmlFor="institution">
          Institution:{" "}
          <input
            type="text"
            id="institution"
            name="institution"
            value={educationForm.institution}
            placeholder="Enter the name of your Institution"
            onChange={educationFormat.handleInputChange}
            required
          />
        </label>

        <label htmlFor="admissionYear">
          Admission Year:{" "}
          <input
            type="text"
            name="admissionYear"
            value={educationForm.admissionYear}
            id="Year"
            placeholder="Enter the year you got admission"
            onChange={educationFormat.handleInputChange}
            required
          />
        </label>
        <label htmlFor="graduationYear">
          Graduation Year:{" "}
          <input
            type="text"
            name="graduationYear"
            value={educationForm.graduationYear}
            id="graduationYear"
            placeholder="Enter the year you graduated"
            onChange={educationFormat.handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
