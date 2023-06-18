import {Github, Linkedin, Envelope} from "react-bootstrap-icons";
import "./socials.css";

function SocialSwitch({type, size=40}) {
    switch (type) {
      case "Github":
        return <Github size={size}/>;
      case "LinkedIn":
        return <Linkedin size={size}/>;
      case "Email":
        return <Envelope size={size}/>;
    }
}

function Social({type, url}) {
  return (
    <div>
      <a className="social" href={url}>
        <SocialSwitch type={type} />
      </a>
    </div>  
  );
}

function Socials() {
  return (
    <div className="socials">
      <Social
        type="Github"
        url="https://github.com/rohaanmooken/"
      />
      <Social
        type="LinkedIn"
        url="https://www.linkedin.com/in/rohaan-mooken-40755324a/"
      />
      <Social
        type="Email"
        url="mailto:rohaanmooken@gmail.com"
      />
    </div>
  );
}

export default Socials;