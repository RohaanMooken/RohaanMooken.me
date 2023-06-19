// import LanguagesBar from './languagesBar';
import GH from './gh';
import './githubCard.css';

function GithubCard({owner, repo, title, description}) {
    console.log(repo.toString());
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                {/* <small className="text-muted">Footer</small> */}
                {/* <LanguagesBar owner={owner} repo={repo}/> */}
                <GH 
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