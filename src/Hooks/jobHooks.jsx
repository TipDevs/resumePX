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
    return {
        handleInputChange,
        toggleStillWorking,
    }
}