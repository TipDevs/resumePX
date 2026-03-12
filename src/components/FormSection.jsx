import General from "./Forms/General";
import Education from "./Forms/Education";
import JobExperience from "./Forms/JobExperience";
import Skills from "./Forms/Skills";
import "../styles/FormSection.css";
export default function FormSection({showPreview}) {
  return (
    <section id="input_field" className={showPreview ? "on_preview" : ""}>
      <h2>Input Field</h2>
      <General/>
      <Education/>
      <JobExperience/>
      <Skills/>
    </section>
  );
}
