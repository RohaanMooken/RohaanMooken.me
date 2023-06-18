import {Github, Linkedin, Envelope, X} from "react-bootstrap-icons";
import "./socials.css";

function SocialSwitch({domainName, size=40}) {
    switch (domainName) {
      case "Github":
        return <Github size={size}/>;
      case "LinkedIn":
        return <Linkedin size={size}/>;
      case "Email":
        return <Envelope size={size}/>;
      default:
        return <X size={size}/>
    }
}

function Social({domainName, url}) {
  return (
    <div>
      <a className="social" href={url}>
        <SocialSwitch domainName={domainName} />
      </a>
    </div>  
  );
}

function GenerateSocials({urls}) {
  let generatedSocials = []

  for (let i = 0; i < urls.length; i++) {
    let domainName = urls[i].domainName;
    let url = urls[i].url;
    generatedSocials.push(<Social key={i} domainName={domainName} url={url} />);
  }

  return generatedSocials;
}

function Socials({urls}) {
  return (
    <div className="socials">
      <GenerateSocials urls={urls} />
    </div>
  );
}

export default Socials;