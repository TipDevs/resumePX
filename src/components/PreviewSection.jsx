import "../styles/PreviewSection.css";
import GeneralPreview from "./CV/GeneralPreview";
import EducationPreview from "./CV/EducationPreview";
import JobExperiencePreview from "./CV/JobExperiencePreview";
import SkillsPreview from "./CV/SkillsPreview";
export default function PreviewSection({
  storedEducation,
  storedJobs,
  contentRef,
  skills,
  generalData
}) {
  return (
    <section id="preview">
      <h2>Preview</h2>
      <section id="CV" ref={contentRef}>
        <GeneralPreview generalData={generalData} />
        <EducationPreview storedEducation={storedEducation} />
        <JobExperiencePreview storedJobs={storedJobs} />
        <SkillsPreview skills={skills} />
      </section>
    </section>
  );
}
