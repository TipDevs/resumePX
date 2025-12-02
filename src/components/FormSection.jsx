import General from "./Forms/General";
import Education from "./Forms/Education";
import JobExperience from "./Forms/JobExperience";
import "../styles/FormSection.css";
export default function FormSection({storedEducation, storedJobs, eventHandler, ...props }) {
  return (
    <section id="input_field">
      <h2>Input Field</h2>
      <General generalData={props.generalData} onChange={eventHandler.generalFormInput} />
      <Education
        education={props.education}
        storedEducation={storedEducation}
        onChange={eventHandler.educationFormInput}
        addNewEducation={eventHandler.addNewEducation}
        cancelForm={eventHandler.cancelForm}
      />
      <JobExperience
        jobExperience={props.jobExperience}
        storedJobs={storedJobs}
        onChange={eventHandler.jobExperienceFormInput}
        addNewJob={eventHandler.addNewJob}
        cancelForm={eventHandler.cancelForm}
      />
    </section>
  );
}
