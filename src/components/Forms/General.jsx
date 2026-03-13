import useGeneral from "../../Hooks/generalHooks";
import DisplayError from "../displayError";
export default function General() {
  const { generalForm, handleInputChange, errorMessage } = useGeneral();
  return (
    <>
      <section id="general">
        <h2>General Info</h2>
        <form id="generalForm">
          <label htmlFor="firstName">
            First Name:{" "}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={generalForm.firstName}
              placeholder="Enter your first name"
              onChange={(e) => {
                handleInputChange(e);
              }}
              required
            />
          </label>
          <label htmlFor="lastName">
            Last Name:{" "}
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={generalForm.lastName}
              placeholder="Enter your last name"
              onChange={(e) => {
                handleInputChange(e);
              }}
              required
            />
          </label>
          <label htmlFor="emailAddress">
            Email:{" "}
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={generalForm.emailAddress}
              placeholder="Enter your email address"
              onChange={(e) => {
                handleInputChange(e);
              }}
              required
            />
          </label>
          <label htmlFor="phoneNumber">
            Phone Number:{" "}
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={generalForm.phoneNumber}
              placeholder="Enter your phone number"
              onChange={(e) => {
                handleInputChange(e);
              }}
              inputMode="numeric"
            />
          </label>
          <label htmlFor="residenceAddress">
            Residence Address:{" "}
            <input
              type="text"
              id="residenceAddress"
              name="residenceAddress"
              value={generalForm.residenceAddress}
              placeholder="Enter your home address"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </label>
          <label htmlFor="description">
            Description:{" "}
            <textarea
              type="text"
              id="description"
              name="description"
              value={generalForm.description}
              placeholder="Write about yourself..."
              onChange={(e) => {
                handleInputChange(e);
              }}
              style={{
                maxHeight: "7em",
                height: "7em",
                outline: "none",
                border: "none",
                padding: "5px",
                maxWidth: "100%",
              }}></textarea>
          </label>
        </form>
        <DisplayError errorMessage={errorMessage} />
      </section>
    </>
  );
}
