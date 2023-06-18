import "bootstrap/dist/css/bootstrap.min.css";
import "./headerContainer.css";
import Name from "../name/name";
import Buttons from "../buttons/buttons";

function HeaderContainer({firstName, middleName, lastName, buttons}) {
  return (
    <div className="container">
      <Name firstName={firstName} middleName={middleName} lastName={lastName}/>
      <Buttons buttons={buttons}/>
    </div>
  );
}

export default HeaderContainer;