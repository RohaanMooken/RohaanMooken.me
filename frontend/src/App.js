import axios from 'axios';
import React from 'react';

class App extends React.Component {

  state = { details: [], }

  componentDidMount() {

    console.log("Test")
    let data;
    axios.get('http://localhost:8000')
      .then(res => {
        data = res.data
        this.setState({
          details: data
        });
      })
      .catch(err => { })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h1>{output.skill_name}</h1>
              <h2>{output.skill_level}</h2>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
