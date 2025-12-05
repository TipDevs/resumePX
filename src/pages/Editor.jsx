import FormSection from "../components/FormSection";
import PreviewSection from "../components/PreviewSection";
import { useState } from "react";
export default function Editor() {
  const formData = {
    generalData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      description: "",
    },
    education: {
      certification: "",
      institution: "",
      convocationYear: "",
      graduationYear: "",
    },
    jobExperience: {
      company: "",
      employmentYear: "",
      endYear: "",
      contribution: "",
    },
  };
  const [form, setForm] = useState(formData);
  const [storedEducation, setStoredEducation] = useState([]);
  const [storedJobs, setStoredJobs] = useState([]);
  const eventHandler = {
    // method(s) which handle general form explicity
    generalFormInput(e) {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        generalData: {
          ...prev.generalData,
          [name]: value,
        },
      }));
    },
    // method(s) which handle education form explicitly
    educationFormInput(e) {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          [name]: value,
        },
      }));
    },
    addNewEducation(callBack) {
      setStoredEducation((prev) => [...prev, { ...form.education }]);
      setForm((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          ...formData.education,
        },
      }));
      callBack();
      console.log(Array.isArray(storedEducation));
    },
    // method(s) which handle job experience form explicitly
    jobExperienceFormInput(e) {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        jobExperience: {
          ...prev.jobExperience,
          [name]: value,
        },
      }));
    },
    addNewJob(callBack) {
      setStoredJobs((prev) => [...prev, { ...form.jobExperience }]);
      setForm((prev) => ({
        ...prev,
        jobExperience: {
          ...prev.jobExperience,
          ...formData.jobExperience,
        },
      }));
      callBack();
    },

    // globally used method
    cancelForm(target, callBack) {
      const parentElement = target.parentElement;
      switch (true) {
        case parentElement.id === "educationForm":
          setForm((prev) => ({
            ...prev,
            education: {
              ...prev.education,
              ...formData.education,
            },
          }));
          break;
        case parentElement.id === "jobExperienceForm":
          setForm((prev) => ({
            ...prev,
            jobExperience: {
              ...prev.jobExperience,
              ...formData.jobExperience,
            },
          }));
          break;

        default:
          break;
      }
      parentElement.reset();
      callBack();
    },
  };
  return (
    <>
      <FormSection
        {...form}
        eventHandler={eventHandler}
        storedEducation={storedEducation}
        storedJobs={storedJobs}
      />
      <PreviewSection {...form} storedEducation={storedEducation} storedJobs={storedJobs} />
    </>
  );
}
