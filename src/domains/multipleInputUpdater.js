export function updateMultipleInputs(prevForm, fieldName, value) {
  if (typeof prevForm !== "object")
    throw new Error("Form type is not an object");
  if (!Object.hasOwn(prevForm, fieldName))
    throw new Error("Invalid field, field is not part of form");
  if (Array.isArray(value) || typeof value === "object")
    throw new Error("Type of value must not be a reference data type");
  return {
    ...prevForm,
    [fieldName]: value,
  };
}
