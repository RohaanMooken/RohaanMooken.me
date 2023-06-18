import "bootstrap/dist/css/bootstrap.min.css";
import "./headerContainer.css";
import Name from "../name/name";
import Socials from "../socials/socials";
import Buttons from "../buttons/buttons";

function HeaderContainer({routes}) {
    return (
      <div className="container">
        <Name />
        <Socials />
        <Buttons routes={routes}/>
      </div>
    );
  }

export default HeaderContainer;