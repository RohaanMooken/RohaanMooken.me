import "./name.css";

function Name({firstName="First", middleName="Middle", lastName="Last"}) {
    return (
        <div className="names">
        <h1 className="name">{firstName}</h1>
        <h1 className="name">{middleName + " " + lastName}</h1>
        </div>
    );
}

export default Name;