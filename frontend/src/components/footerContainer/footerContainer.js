import "bootstrap/dist/css/bootstrap.min.css";
import "./footerContainer.css";
import Socials from "../socials/socials";

function FooterContainer({urls}) {
  return (
    <div className="footerContainer container">
      <Socials className="footerSocials" urls={urls}/>
    </div>
  );
}

export default FooterContainer;