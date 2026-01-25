import FormSection from "../components/FormSection";
import PreviewSection from "../components/PreviewSection";
import useGeneral from "../Hooks/generalHooks";
import useJobExperience from "../Hooks/jobHooks";
import useEducation from "../Hooks/educationHooks";
import useSkills from "../Hooks/skillsHooks";
export default function Editor({contentRef, showPreview, toggleShowPreview}) {
    const general = useGeneral();
    const jobFormat = useJobExperience();
    const educationFormat = useEducation();
    const skillsFormat = useSkills();
    return <>
    <FormSection general={general} jobFormat={jobFormat} educationFormat={educationFormat} skillsFormat={skillsFormat} showPreview={showPreview}/>
    <PreviewSection generalData={general.generalForm} storedEducation={educationFormat.storedEducations} storedJobs={jobFormat.storedJobs} skills={skillsFormat.skillsForm} contentRef={contentRef} showPreview={showPreview} toggleShowPreview={toggleShowPreview}/>
    </>
}