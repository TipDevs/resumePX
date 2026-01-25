import General from "./Forms/General";
import Education from "./Forms/Education";
import JobExperience from "./Forms/JobExperience";
import Skills from "./Forms/Skills";
import "../styles/FormSection.css";
export default function FormSection({general, educationFormat, jobFormat, skillsFormat}) {
  return (
    <section id="input_field">
      <h2>Input Field</h2>
      <General generalData={general.generalForm} onChange={general.handleInputChange}/>
      <Education educationFormat={educationFormat}/>
      <JobExperience jobFormat={jobFormat}/>
      <Skills skillsFormat={skillsFormat}/>
    </section>
  );
}
