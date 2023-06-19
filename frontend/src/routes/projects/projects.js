import HeaderContainer from "../../components/headerContainer/headerContainer";
import "./projects.css";
import data from "../../assets/projects.json";
import GenerateGithubCards from "../../components/githubCard/generateGithubCards";

export default function Projects() {

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
        <GenerateGithubCards />
      </div>
    </>
  );
}