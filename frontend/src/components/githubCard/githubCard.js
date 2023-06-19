import LanguageBar from './languageBar';
import './githubCard.css';

function GithubCard({owner, repo, title, description}) {
    console.log(repo.toString());
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    <a className="link" href={'https://github.com/' + repo}>{title}</a>
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