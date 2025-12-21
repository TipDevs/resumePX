import { Fragment } from "react";

export default function GeneralPreview({ generalData }) {
  const fullName = generalData.firstName + " " + generalData.lastName;
  return (
    <>
      <div id="generalPreview">
        {fullName !== "" ? <h3 id="fullName">{fullName}</h3> : ""}
        {generalData.email !== "" ? (
          <p id="email">
            <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
            {generalData.email}
          </p>
        ) : (
          ""
        )}
        {generalData.phone !== "" ? (
          <p id="phoneNumber">
            <span style={{ fontWeight: "bold" }}>Tel:</span> {generalData.phone}
          </p>
        ) : (
          ""
        )}

        {generalData.phone !== "" ? (
          <p
            id="address"
            style={{
              fontSize: "1.5rem",
              fontWeight: "lighter",
              marginTop: "3px",
              maxWidth: "50ch",
              overflowWrap: "break-word",
              textAlign: "center",
            }}>
            <span style={{ fontWeight: "bold" }}>Address:</span>{" "}
            {generalData.address}
          </p>
        ) : (
          ""
        )}
        {generalData.description !== "" ? (
          <Fragment>
            <h4>Professional Description</h4>
            <hr
              style={{
                width: "85%",
                height: "3px",
                background: "#000000",
                alignSelf: "center",
              }}
            />
            <p
              id="description"
              style={{
                fontSize: "1.3rem",
                fontWeight: "lighter",
                marginTop: "3px",
                maxWidth: "50ch",
                overflowWrap: "break-word",
                textAlign: "center",
              }}>
              {generalData.description}
            </p>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </>
  );
}