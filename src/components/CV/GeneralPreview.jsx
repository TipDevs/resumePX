import { Fragment } from "react";

export default function GeneralPreview({ generalData }) {
  const fullName = generalData.firstName + " " + generalData.lastName;
  return (
    <>
      <div id="generalPreview">
        {fullName !== "" ? <h3 id="fullName">{fullName}</h3> : null}

        {generalData.address !== "" ? (
          <p
            id="address"
            style={{
              fontSize: "1.2rem",
              fontWeight: "lighter",
              marginTop: "3px",
              maxWidth: "50ch",
              overflowWrap: "break-word",
              textAlign: "center",
            }}>
            <span style={{ fontWeight: "bold" }}>Address:</span>{" "}
            {generalData.address}
          </p>
        ) : null}
        {generalData.phone !== "" ? (
          <p id="phoneNumber" style={{
              fontSize: "1.2rem",
              fontWeight: "lighter",
              marginTop: "3px",
              maxWidth: "50ch",
              overflowWrap: "break-word",
              textAlign: "center",
            }}>
            <span style={{ fontWeight: "bold" }}>Tel:</span> {generalData.phone}
          </p>
        ) : null}
        {generalData.email !== "" ? (
          <p id="email" style={{
              fontSize: "1.05rem",
              fontWeight: "lighter",
              marginTop: "3px",
              maxWidth: "50ch",
              overflowWrap: "break-word",
              textAlign: "center",
            }}>
            <span style={{ fontWeight: "bold", textDecoration: "none" }}>Email:</span>{" "}
            <a href={generalData.email}>{generalData.email}</a>
          </p>
        ) : null}
        {generalData.description !== "" ? (
          <Fragment>
            <h4 style={{color: "green"}}>Professional Description</h4>
            <hr
              style={{
                width: "90%",
                height: "3px",
                background: "#000000",
                alignSelf: "center",
              }}
            />
            <p
              id="description"
              style={{
                fontSize: "1.06rem",
                fontWeight: "lighter",
                marginTop: "3px",
                overflowWrap: "break-word",
                textAlign: "center",
                alignSelf: "center",
              }}>
              {generalData.description}
            </p>
          </Fragment>
        ) : null}
      </div>
    </>
  );
}
