export default function DisplayError({ errorMessage }) {
  return (
    <div
      style={{
        display: errorMessage === "" ? "none" : "flex",
        alignItems: "center",
        padding: "1em",
        position: "fixed",
        top: "5%",
        right: "5%",
        height: "3em",
        borderLeft: "0.3em solid red",
        borderRadius: "0.5em",
        zIndex: "999",
        backgroundColor: "#fee2d8ff"
      }}>
      <p>{errorMessage}</p>
    </div>
  );
}
