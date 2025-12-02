export default function GeneralPreview({generalData}) {
    const fullName = generalData.firstName + " " + generalData.lastName;
    return(<>
    <div id="generalPreview">
        <h3 id="fullName">{fullName}</h3>
        <p id="email">{generalData.email}</p>
        <p id="phoneNumber">{generalData.phone}</p>
        <p id="address">{generalData.address}</p>
        <p id="description">{generalData.description}</p>
    </div>
    </>) 
}