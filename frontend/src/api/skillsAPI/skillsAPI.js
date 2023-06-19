import './skillsAPI.css'
import React from 'react';
import axios from 'axios';

class SkillsAPI extends React.Component {

    state = { details: [], }
  
    componentDidMount() {
  
      let data;
      axios.get('http://localhost:8000/skills')
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
                ))}
            </div>
        )
    }
}

export default SkillsAPI;