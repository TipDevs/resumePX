import { useState, useEffect } from "react";
import { updateMultipleInputs } from "../domains/multipleInputUpdater";
import * as jobDomain from "../domains/jobDomain";
import { pubsub } from "../infrastructure/pubsub";
import { EVENTS } from "../infrastructure/events";
const initialJobExperience = {
  company: "",
  contributions: "",
  employmentYear: "",
  endYear: "",
  location: "",
  stillWorking: false,
};
export default function useJobExperience() {
  const [jobForm, setJobForm] = useState(initialJobExperience);
  const [storedJobs, setStoredJobs] = useState([]);
  const [formMode, setFormMode] = useState("off");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    pubsub.publish(EVENTS.JOBS_UPDATED, storedJobs);
  }, [storedJobs]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    try {
      setJobForm(updateMultipleInputs(jobForm, name, value));
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 1500);
    }
  };
  const toggleStillWorking = () => {
    try {
      setJobForm((prev) => jobDomain.stillWorkingField(prev));
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 1500);
    }
  };
  const addNewJob = () => {
    setFormMode("Add");
    setJobForm((prev) => ({
      ...prev,
      id: crypto.randomUUID(),
    }));
  };
  const editJob = (id) => {
    setFormMode("Edit");
    const jobToEdit = storedJobs.find((job) => job.id === id);
    setJobForm(jobToEdit);
  };
  const onSubmit = () => {
    try {
      if (formMode === "Add") {
        setStoredJobs((prev) => jobDomain.addJobToList(prev, jobForm));
      } else if (formMode === "Edit") {
        setStoredJobs((prev) => jobDomain.editJobInlist(prev, jobForm));
      }
      setJobForm(initialJobExperience);
      setFormMode("off");
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 1500);
    }
  };

  const cancelForm = () => {
    setFormMode("off");
    setJobForm(initialJobExperience);
  };
  const deleteJob = (id) => {
    try {
      setStoredJobs((prev) => jobDomain.removeJobFromList(prev, id));
    } catch (error) {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };
  return {
    handleInputChange,
    toggleStillWorking,
    addNewJob,
    editJob,
    jobForm,
    onSubmit,
    formMode,
    storedJobs,
    cancelForm,
    deleteJob,
    errorMessage,
  };
}
