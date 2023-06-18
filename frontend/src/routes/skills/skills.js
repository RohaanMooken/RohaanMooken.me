import HeaderContainer from "../../components/headerContainer/headerContainer";
import "./skills.css";
import data from "../../assets/skills.json";

function Card() {
  return (
    <div className="card">
      Text
    </div>
  );
}

function CardGenerator() {
  return (
    <div>
      <Card />
    </div>
  );
}

function CardContainer() {
  return (
    <div>
      <CardGenerator />
    </div>
  );
}

function Skills() {

  let firstName = data.firstName;
  let middleName = data.middleName;
  let lastName = data.lastName;
  let urls = data.urls;
  let buttons = data.buttons;

  return (
    <>
      <div className="ctn">
        <HeaderContainer 
          firstName={firstName} 
          middleName={middleName} 
          lastName={lastName} urls={urls} 
          buttons={buttons}
        />
        <CardContainer />
      </div>
    </>
  );
}

export default Skills;