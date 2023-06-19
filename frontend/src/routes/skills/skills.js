import HeaderContainer from "../../components/headerContainer/headerContainer";
import "./skills.css";
import data from "../../assets/skills.json";
import SkillsAPI from "../../api/skillsAPI/skillsAPI";

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
        <SkillsAPI />
      </div>
    </>
  );
}

export default Skills;