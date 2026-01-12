import FormSection from "../components/FormSection";
import PreviewSection from "../components/PreviewSection";
import { useState } from "react";
export default function Editor({ contentRef }) {
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
      id() {
        return crypto.randomUUID();
      },
    },
    jobExperience: {
      company: "",
      contributions: "",
      employmentYear: "",
      endYear: "",
      id() {
        return crypto.randomUUID();
      },
      location: "",
      stillWorking: false,
    },
    skills: "",
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
    addNewEducation({ callBack }) {
      setStoredEducation((prev) => [
        ...prev,
        {
          ...form.education,
          id: form.education.id(),
        },
      ]);
      setForm((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          ...formData.education,
        },
      }));
      callBack();
    },
    deleteEducation(id) {
      setStoredEducation((prev) =>
        prev.filter((education) => education.id !== id)
      );
    },
    editEducation({ educationToBeEdit, callBack }) {
      setStoredEducation((prev) =>
        prev.map((education) =>
          education.id === educationToBeEdit.id
            ? (education = educationToBeEdit)
            : education
        )
      );
      callBack();
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
    stillWorkingCheckedForNewJob() {
      setForm((prev) => ({
        ...prev,
        jobExperience: {
          ...prev.jobExperience,
          stillWorking: !prev.jobExperience.stillWorking,
          endYear: "",
        },
      }))
    },
    addNewJob({ callBack }) {
      setStoredJobs((prev) => [
        ...prev,
        { ...form.jobExperience, id: form.jobExperience.id() },
      ]);
      setForm((prev) => ({
        ...prev,
        jobExperience: {
          ...prev.jobExperience,
          ...formData.jobExperience,
        },
      }));
      callBack();
    },
    deleteJobExperience(id) {
      setStoredJobs((prev) => prev.filter((job) => job.id !== id));
    },
    editJobExperience({ jobToBeEdit, callBack }) {
      setStoredJobs((prev) =>
        prev.map((job) =>
          job.id === jobToBeEdit.id ? (job = jobToBeEdit) : job
        )
      );
      callBack();
    },
    skillFormInput(e) {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
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
      <PreviewSection
        {...form}
        storedEducation={storedEducation}
        storedJobs={storedJobs}
        contentRef={contentRef}
      />
    </>
  );
}
