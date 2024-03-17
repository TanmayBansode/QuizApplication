import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import axios from 'axios';
import GridAndQuestion from './GridAndQuestion';
import "./Statistics.css";

function StatisticsPage() {
  const [score, setScore] = useState(null);
  const [responses, setResponses] = useState([]);
  const [email, setEmail] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    const getStats = async () => {
      try {
        const jwtEmail = localStorage.getItem("email");
        setEmail(jwtEmail);
        const response = await axios.post(`${serverUrl}/responses/getStats`, { userEmail: email });
        console.log(">>", response.data);
        setScore(response.data.score);
        setResponses(response.data.responses);
      } catch (error) {
        console.error("Error fetching user score:", error);
      }
    };

    getStats(); 
  }, [email, serverUrl]);

  return (
    <div className="container result-container">
      <div className="stats-heading">
        <h1>Detailed Statistics</h1>
        <p>Total Score: {score}</p>
      </div>
      <GridAndQuestion responses={responses} />
    </div>
  );
}

export default StatisticsPage;
