import "./buttons.css";

function Btn({route, name}) {
    return (
        <a className="btn" href={route}>{name}</a>
    );
}

function GenerateButtons({buttons}) {
    let generatedButtons = [];

    for (let i = 0; i < buttons.length; i++) {
        let name = buttons[i].name;
        let route = buttons[i].route;
        generatedButtons.push(<Btn key={i} route={route} name={name} />);
    }

    return generatedButtons;
}

function Buttons({buttons}) {
    return (
        <div className="buttons">
            <GenerateButtons buttons={buttons}/>
        </div>
    );
}

export default Buttons;