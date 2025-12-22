import "../styles/PreviewSection.css";
import GeneralPreview from "./CV/GeneralPreview";
import EducationPreview from "./CV/EducationPreview";
import JobExperiencePreview from "./CV/JobExperiencePreview";
import SkillsPreview from "./CV/SkillsPreview";
export default function PreviewSection({
  storedEducation,
  storedJobs,
  ...props
}) {
  return (
    <section id="preview">
      <h2>Preview</h2>
      <section id="CV">
        <GeneralPreview generalData={props.generalData} />
        <EducationPreview storedEducation={storedEducation} />
        <JobExperiencePreview storedJobs={storedJobs} />
        <SkillsPreview skills={props.skills} />
      </section>
    </section>
  );
}
