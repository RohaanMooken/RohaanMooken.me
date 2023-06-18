import HeaderContainer from "../../components/headerContainer/headerContainer";
import "./skills.css";
import data from "../../assets/skills.json";
import React from 'react';
import axios from 'axios';


class AxiosAPI extends React.Component {

  state = { details: [], }

  componentDidMount() {

    let data;
    axios.get('http://localhost:8000')
      .then(res => {
        data = res.data
        this.setState({
          details: data
        });
      })
      .catch(err => { console.log("[ERROR] ", err)});
  }

  render() {
    console.log(this.state)
    return (
      <div className="cardContainer">
        {this.state.details.map((output, id) => (
          <div>
            <div key={id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{output.skill_name}</h5>
                  <p className="card-text">{output.skill_level}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{"Last updated: " + output.last_updated}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function CardContainer() {
  return (
    <div>
      <AxiosAPI />
    </div>
  );
}

function Skills() {

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
        <CardContainer />
      </div>
    </>
  );
}

export default Skills;