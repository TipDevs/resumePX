export function updateSkillInput(newValue) {
  if (newValue[0] === "#")
    throw new Error(`Skills section can't start "#"`);
  return newValue;
}
