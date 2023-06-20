import HeaderContainer from "../../components/headerContainer/headerContainer";
import "./skills.css";
import data from "../../assets/skills.json";
import SkillsAPI from "../../api/skillsAPI/skillsAPI";

function Skills() {

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
        <div className="row row-cols-1 row-cols-md-2 g-4" style={{marginBottom: "25px"}}>
            <div className="col">
                <div className="card levelCard h-100">
                    <div className="card-body">
                        <h5 className="card-title">Beginner</h5>
                        <p className="card-text">A Beginner developer is just getting started and has little or no coding knowledge or skill. They can be self-taught developers who are just getting started, or programming or computer science students in their first two years of study.</p>
                        <p className="card-text">With regard to core software skills, they can implement greedy solutions to algorithm problems but misses corner cases. They have no or low understanding of unit testing. They are familiar with a small number of frameworks, some only by name.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary"><a href="https://stackoverflow.blog/2022/07/28/measurable-and-meaningful-skill-levels-for-developers/#:~:text=Structured%20%3D%20there%20are%20five%20levels,%2C%20Intermediate%2C%20Advanced%2C%20and%20Expert">Source</a></small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card levelCard h-100">
                    <div className="card-body">
                        <h5 className="card-title">Advanced Beginner</h5>
                        <p className="card-text">Advanced Beginners provide more value than they require from a dev team. Most developers who have been coding for a few months to a few years are in this category.</p>
                        <p className="card-text">On core software skills, they can implement basic solutions that may not be optimal and catch simple corner cases. They will build tests if assigned, but need patterns to build off of. They are strongly familiar with at least one framework.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary"><a href="https://stackoverflow.blog/2022/07/28/measurable-and-meaningful-skill-levels-for-developers/#:~:text=Structured%20%3D%20there%20are%20five%20levels,%2C%20Intermediate%2C%20Advanced%2C%20and%20Expert">Source</a></small>
                    </div>
                </div>
            </div>
        </div>
        <SkillsAPI />
      </div>
    </>
  );
}

export default Skills;