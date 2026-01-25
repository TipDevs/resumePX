import "../styles/PreviewSection.css";
import GeneralPreview from "./CV/GeneralPreview";
import EducationPreview from "./CV/EducationPreview";
import JobExperiencePreview from "./CV/JobExperiencePreview";
import SkillsPreview from "./CV/SkillsPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
export default function PreviewSection({
  storedEducation,
  storedJobs,
  contentRef,
  skills,
  generalData,
  showPreview,
  toggleShowPreview
}) {
  return (
    <section id="preview" className={showPreview ? "show" : ""}>
      <h2>Preview</h2>
      <FontAwesomeIcon icon={faCircleXmark} size="2xl" style={{alignSelf: "flex-start", position: "absolute", top: "3%", left: "6%"}} onClick={toggleShowPreview} id="buttonClosingPreview"/>
      <section id="CV" ref={contentRef}>
        <GeneralPreview generalData={generalData} />
        <EducationPreview storedEducation={storedEducation} />
        <JobExperiencePreview storedJobs={storedJobs} />
        <SkillsPreview skills={skills} />
      </section>
    </section>
  );
}
