import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import ResultPage from './components/ResultPage';
import './globalStyles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
