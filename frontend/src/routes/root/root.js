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
        <p className="intro">I am an aspiring developer looking to further develop my skills and knowledge. Currently am attending the CS50 course from Harvard University to enhance my knowledge on computer science. Through this course, I am delving into a wide range of topics, including programming languages, algoritgms, data structures, and problem-solving techniques. I believe that contineous learning and self-improvement are essential in a rapidly evolving industry like software development.</p>
        <FooterContainer 
          urls={urls} 
        />
      </div>
    </>
  );
}

export default Root;