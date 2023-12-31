import HeaderContainer from "../../components/headerContainer/headerContainer";
import "./certificates.css";
import data from "../../assets/certificates.json";
import CertificatesAPI from "../../api/certificatesAPI/certificatesAPI";

export default function Certificates() {

  let firstName = data.firstName;
  let middleName = data.middleName;
  let lastName = data.lastName;
  let buttons = data.buttons;


  return (
    <>
      <div className="ctn">
        <HeaderContainer 
          firstName={firstName} 
          middleName={middleName} 
          lastName={lastName}
          buttons={buttons}
        />
        <div>
          <CertificatesAPI />
        </div>
      </div>
    </>
  );
}