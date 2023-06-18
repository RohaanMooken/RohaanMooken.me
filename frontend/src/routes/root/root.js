import HeaderContainer from "../../components/headerContainer/headerContainer";
import FooterContainer from "../../components/footerContainer/footerContainer";
import "./root.css";
import data from "../../assets/root.json";

function Root() {
  
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
          lastName={lastName} 
          buttons={buttons}
        />
        <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla ac ex at suscipit. Cras neque nunc, tristique sit amet ultrices tempor, tempus ac tellus. Vestibulum quis consequat sem. Integer ut tortor libero. Maecenas malesuada sapien in ligula venenatis, vel rutrum felis pretium. Nulla nec mi auctor, pulvinar magna ac, euismod tortor. Donec luctus metus massa, vel pretium diam sodales non. Integer nibh nunc, varius ac est ut, tristique hendrerit urna. Phasellus suscipit justo non lectus bibendum suscipit. Nulla at sem cursus, rutrum risus ut, placerat dolor. Nam vel eros cursus, imperdiet tortor nec, tristique lorem. Ut sed lorem ullamcorper, convallis sem sit amet, sagittis risus. Proin at nisi ligula. Cras cursus quam eget sem gravida imperdiet.</p>
        <FooterContainer 
          urls={urls} 
        />
      </div>
    </>
  );
}

export default Root;