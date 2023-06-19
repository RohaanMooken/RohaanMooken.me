import './languagesBar.css';
import { useEffect, useState } from 'react';

function LanguagesBar({ owner, repo }) {
  const [languageStats, setLanguageStats] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/languages`)
      .then(response => response.json())
      .then(data => setLanguageStats(data))
      .catch(error => console.error(error));
  }, [owner, repo]);

  const getTotalBytes = () => {
    return Object.values(languageStats).reduce((total, bytes) => total + bytes, 0);
  };

  const calculatePercentage = (bytes) => {
    const totalBytes = getTotalBytes();
    return ((bytes / totalBytes) * 100).toFixed(2);
  };

  return (
    <div className="languages-bar">
      {Object.entries(languageStats).map(([language, bytes]) => (
        <div className="language-item" key={language}>
          <span className="language-name">{language}</span>
          <div className="language-bar">
            <div
              className="language-progress"
              style={{ width: `${calculatePercentage(bytes)}%` }}
            ></div>
          </div>
          <span className="language-percentage">{calculatePercentage(bytes)}%</span>
        </div>
      ))}
    </div>
  );
}

export default LanguagesBar;
