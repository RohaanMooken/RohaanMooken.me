import "./buttons.css";

function Btn({route}) {
    return (
        <a className="btn" href={"/" + route.toLowerCase()}>{route}</a>
    );
}
  
function Buttons({routes=["Skills", "Certifications", "Projects"]}) {
    return (
        <div className="buttons">
        <Btn route={routes[0]} />
        <Btn route={routes[1]} />
        <Btn route={routes[2]} />
        </div>
    );
}

export default Buttons;