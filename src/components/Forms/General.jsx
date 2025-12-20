// import { useState } from "react";
export default function General({ onChange, generalData }) {
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
              value={generalData.firstName.trim()}
              placeholder="Enter your first name"
              onChange={onChange}
              required
            />
          </label>
          <label htmlFor="lastName">
            Last Name:{" "}
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={generalData.lastName.trim()}
              placeholder="Enter your last name"
              onChange={onChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email:{" "}
            <input
              type="email"
              id="email"
              name="email"
              value={generalData.email.trim()}
              placeholder="Enter your email address"
              onChange={onChange}
              required
            />
          </label>
          <label htmlFor="phone">
            Phone Number:{" "}
            <input
              type="tel"
              id="phone"
              name="phone"
              value={generalData.phone.trim()}
              placeholder="Enter your phone number"
              onChange={onChange}
              inputMode="numeric"
            />
          </label>
          <label htmlFor="address">
            Home Address:{" "}
            <input
              type="text"
              id="address"
              name="address"
              value={generalData.address}
              placeholder="Enter your home address"
              onChange={onChange}
            />
          </label>
          <label htmlFor="description">
            Description:{" "}
            <textarea
              type="text"
              id="description"
              name="description"
              value={generalData.description}
              placeholder="Write about yourself..."
              onChange={onChange}
              style={{maxHeight: "7em", outline: "none", border: "none", padding: "5px", maxWidth: "552.500px",}}></textarea>
          </label>
        </form>
      </section>
    </>
  );
}
