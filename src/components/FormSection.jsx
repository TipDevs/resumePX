import General from "./Forms/General";
import Education from "./Forms/Education";
import JobExperience from "./Forms/JobExperience";
import Skills from "./Forms/Skills";
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
        deleteEducation={eventHandler.deleteEducation}
        editEducation={eventHandler.editEducation}
      />
      <JobExperience
        jobExperience={props.jobExperience}
        storedJobs={storedJobs}
        onChange={eventHandler.jobExperienceFormInput}
        addNewJob={eventHandler.addNewJob}
        cancelForm={eventHandler.cancelForm}
        deleteJobExperience={eventHandler.deleteJobExperience}
        editJobExperience={eventHandler.editJobExperience}
      />
      <Skills skills={props.skills} onChange={eventHandler.skillFormInput}/>
    </section>
  );
}
