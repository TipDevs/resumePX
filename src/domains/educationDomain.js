export function addEducationToList(storedEducations, newEducation) {
  if (!Array.isArray(storedEducations))
    throw new Error("storedEducations must be of array type");
  if (typeof newEducation !== "object")
    throw new Error("type of education must be an object");
  return [...storedEducations, newEducation];
}

export function editEducationInlist(storedEducations, editedEducation) {
  if (!Array.isArray(storedEducations))
    throw new Error("storedEducations must be of array type");
  if (typeof editedEducation !== "object")
    throw new Error("type of education must be an object");
  return storedEducations.map((education) => (education.id === editedEducation.id ? editedEducation : education));
}

export function removeEducationFromList(storedEducations, id) {
  if (!Array.isArray(storedEducations))
    throw new Error("storeEducations must be of array type");
  return storedEducations.filter((education) => education.id !== id);
}
