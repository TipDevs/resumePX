export function addJobToList(storedJobs, newJob) {
  if (!Array.isArray(storedJobs))
    throw new Error("storeJobs must be of array type");
  if (typeof newJob !== "object")
    throw new Error("type of job must be an object");
  if (Object.hasOwn(newJob, "contribution"))
    throw new Error("Property name must be contributions instead.");
  if (
    newJob.contributions.length >= 1 &&
    (newJob.contributions[0] === "#" ||
      newJob.contributions[newJob.contributions.length - 1] === "#")
  )
    throw new Error(`Contributions can't start or end with "#"`);
  return [...storedJobs, newJob];
}

export function editJobInlist(storedJobs, editedJob) {
  if (!Array.isArray(storedJobs))
    throw new Error("storeJobs must be of array type");
  if (typeof editedJob !== "object")
    throw new Error("type of job must be an object");
  return storedJobs.map((job) => (job.id === editedJob.id ? editedJob : job));
}

export function removeJobFromList(storedJobs, id) {
  if (!Array.isArray(storedJobs))
    throw new Error("storeJobs must be of array type");
  return storedJobs.filter((job) => job.id !== id);
}

export function stillWorkingField(prevForm) {
  if (typeof prevForm !== "object")
    throw new Error("Form type is not an object");
  return { ...prevForm, stillWorking: !prevForm.stillWorking, endYear: "" };
}
