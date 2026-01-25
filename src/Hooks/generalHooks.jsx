import { useState } from "react";
const initialGeneralData = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    description: "",
    email: "",
}

export default function useGeneral() {
    const [generalForm, setGeneralForm] = useState(initialGeneralData);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setGeneralForm((prev) => ({
            ...prev,
            [name] : value,
        }))
    }
    return {generalForm, handleInputChange}
}