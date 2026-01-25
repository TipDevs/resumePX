import { useState } from "react";
import JobForm from "../components/Forms/JobForm/FormComponent";
const initialEducation = {
    institution: "",
    certification: "",
    admissionYear: "",
    graduationYear: "",
}
export default function useEducation() {
    const [educationForm, setEducationForm] = useState(initialEducation);
    const [storedEducations, setStoredEducation] = useState([]);
    const [formMode, setFormMode] = useState("off");
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEducationForm((prev) => ({
            ...prev,
            [name] : value,
        }));
    }
    const addNewEducation = () => {
        setFormMode("Add");
        setEducationForm((prev) => ({
            ...prev,
            id: crypto.randomUUID(),
        }))
    }
    const editEducation = (id) => {
        setFormMode("Edit");
        const educationToEdit = storedEducations.find((education) => education.id === id);
        setEducationForm(educationToEdit);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(formMode === "Add") {
            setStoredEducation((prev) => ([
                ...prev,
                educationForm,
            ]))
        }
        else if(formMode === "Edit") {
            setStoredEducation((prev) => prev.map((education) => education.id === educationForm.id ? educationForm : education));
        }
        setEducationForm(initialEducation);
        setFormMode("off");
    }
    const deleteEducation = (id) => {
        setStoredEducation((prev) => prev.filter((education) => education.id !== id))
    }
    const cancelForm = () => {
        setFormMode("off");
        setEducationForm(initialEducation);
    }
    return {
        handleInputChange,
        addNewEducation,
        editEducation,
        onSubmit,
        deleteEducation,
        cancelForm,
        formMode,
        educationForm,
        storedEducations,
    }
}