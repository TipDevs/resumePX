import { useState } from "react";
const initialEducation = {
    institution: "",
    certification: "",
    admissionYear: "",
    graduationYear: "",
}
export default function useEducation() {
    const [educationForm, setEducationForm] = useState(initialEducation);
    const [storedEducations, setStoredEducation] = useState([]);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEducationForm((prev) => ({
            ...prev,
            [name] : value,
        }));
    }
    return {
        handleInputChange,
    }
}