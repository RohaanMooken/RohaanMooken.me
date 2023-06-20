import HeaderContainer from "../../components/headerContainer/headerContainer";
import "./certificates.css";
import data from "../../assets/certifications.json";
import CertificatesAPI from "../../api/certificatesAPI/certificatesAPI";

export default function Certificates() {

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
        <div>
          <CertificatesAPI />
        </div>
      </div>
    </>
  );
}