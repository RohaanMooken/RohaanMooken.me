import "bootstrap/dist/css/bootstrap.min.css";
import "./headerContainer.css";
import Name from "../name/name";
import Socials from "../socials/socials";
import Buttons from "../buttons/buttons";
import data from "../../assets/root.json";

function HeaderContainer({routes}) {
  
  let firstName = data.firstName;
  let middleName = data.middleName;
  let lastName = data.lastName;
  let urls = data.urls;
  let buttons = data.buttons;

  return (
    <div className="container">
      <Name firstName={firstName} middleName={middleName} lastName={lastName}/>
      <Socials urls={urls}/>
      <Buttons buttons={buttons}/>
    </div>
  );
}

export default HeaderContainer;