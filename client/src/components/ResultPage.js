import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import "./ResultPage.css";

function ResultPage() {
  const [score, setScore] = useState(null);
  const [email, setEmail] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    const checkScore = async () => {
      try {
        const jwtEmail = localStorage.getItem("email");
        setEmail(jwtEmail);
        const response = await axios.post(`${serverUrl}/users/getUser`, { userEmail: email });
        if (response.data.hasGiven) {
          setScore(response.data.score);
        }
      } catch (error) {
        console.error("Error fetching user score:", error);
      }
    };

    checkScore(); 
  }, [email, serverUrl]);

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
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, [serverUrl]);

  return (
    <div className="container result-container">
      <div className="result-card">
        <p className="score-display">
          Your Score: <span className="score-highlight">{score}</span>
        </p>
        <Link to="/" className="btn btn-secondary home-link">
          Back to Home
        </Link>
        <Link to="/stats" className="btn btn-secondary home-link">
          See Statistics
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
