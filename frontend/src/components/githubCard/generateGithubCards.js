import Axios from 'axios';
import React from 'react';
import GithubCard from './githubCard';
import './generateGithubCards.css';

class GenerateGithubCards extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Axios.get("https://api.github.com/users/rohaanmooken/repos").then(res => {
            var data = res.data
            this.setState({data: data})
        })
    }

    render() {
        return (
            <div className='githubCards'>
                {this.state.data.map(output => (
                    <div key={output.id}>
                        <GithubCard
                            repo={output.full_name} 
                            title={output.name} 
                            description={output.description}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default GenerateGithubCards;