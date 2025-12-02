import "../styles/PreviewSection.css"
import GeneralPreview from "./CV/GeneralPreview";
import EducationPreview from "./CV/EducationPreview";
import JobExperiencePreview from "./CV/JobExperiencePreview";
export default function PreviewSection({storedEducation, storedJobs, ...props}) {
  return (
    <section id="preview">
      <h2>Preview</h2>
      <GeneralPreview generalData={props.generalData}/>
      <EducationPreview storedEducation={storedEducation}/>
      <JobExperiencePreview storedJobs={storedJobs}/>
    </section>
  );
}
