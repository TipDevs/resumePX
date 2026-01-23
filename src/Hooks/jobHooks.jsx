import {useState} from "react";
const initialJobExperience = {
    company: "",
    contribution: "",
    employmentYear: "",
    endYear: "",
    location: "",
    stillWorking: false,
}
export default function useJobExperience() {
    const [jobForm, setJobForm] = useState(initialJobExperience);
    const [storedJobs, setStoredJobs] = useState([]);
    const [formMode, setFormMode] = useState("off");
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setJobForm((prev) => ({
            ...prev,
            [name]:value
        }));
    }
    const toggleStillWorking = () => {
        setJobForm((prev) => ({
            ...prev, 
            stillWorking: !prev.stillWorking,
            endYear: "",
        }));
    }
    const addNewJob = () => {
        setFormMode("Add");
        setJobForm((prev) => ({
            ...prev,
            id: crypto.randomUUID(),
        }));
    }
    const editJob = (id) => {
        setFormMode("Edit");
        const jobToEdit = storedJobs.filter((job) => job.id === id);
        setJobForm(jobToEdit[0]);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(formMode === "Add") {
            setStoredJobs((prev) => ([
                ...prev,
                jobForm,
            ]))
        }
        else if (formMode === "Edit") {
            setStoredJobs((prev) => prev.map((job) => job.id === jobForm.id ? jobForm : job));
        }
        setJobForm(initialJobExperience);
        setFormMode("off");
    }
    const cancelForm = () => {
        setFormMode("off");
        setJobForm(initialJobExperience);
    }
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
    }
}