import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import "./ResultPage.css";

function ResultPage() {
  const location = useLocation();
  const [score, setScore] = useState(location.state.score);
  const [leaderboard, setLeaderboard] = useState([]);
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    console.log(score);
  }, [score]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const jwt = localStorage.getItem("jwt");
        const response = await axios.get(`${serverUrl}/responses`, {
          headers: {
            Authorization: ` ${jwt}`,
          },
        });
        const sortedResponses = response.data.sort((a, b) => b.score - a.score);
        setLeaderboard(sortedResponses.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="container result-container">
      <div className="result-card">
        <p className="score-display">
          Your Score: <span className="score-highlight">{score}</span>
        </p>
        <Link to="/" className="btn btn-secondary home-link">
          Back to Home
        </Link>
      </div>
      <div className="leaderboard">
        <h3 className="leaderboard-heading">Top Performers</h3>
        {leaderboard.map((entry, index) => (
          <div key={index} className="leaderboard-entry">
            <span className="rank">{index + 1}</span>
            <span className="name">{entry.name}</span>
            <span className="score">{entry.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultPage;
