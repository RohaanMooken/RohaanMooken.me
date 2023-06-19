import { Link } from 'react-bootstrap-icons';
import LanguageBar from '../languageBar/languageBar';
import './githubCard.css';

function GithubCard({repo, title, description}) {
    console.log(repo.toString());
    return (
        <div className="card h-100" style={{width:"350px"}}>
            <div className="card-body">
                <h5 className="card-title">
                    <div>
                        <Link className="linkIcon" size={30}/>
                        <a className="link" href={'https://github.com/' + repo}>{title}</a>
                    </div>
                </h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <LanguageBar
                    repository={repo}
                    width={300}
                    textColor='white'
                    lightColor='#aaa'
                />
            </div>
        </div>
    );
}

export default GithubCard;