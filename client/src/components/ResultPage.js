import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import thankYouImage from '../assets/thankyou.jpg';

function ResultPage() {
  const location = useLocation();
  const [score, setScore] = useState(location.state.score);

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center">Thank you for attempting the test!</h2>
          <div className="text-center mt-3">  
            <img
              src={thankYouImage}
              alt="Thank you"
              className="img-fluid rounded-circle"
              style={{ maxWidth: '200px' }}
            />
          </div>
          <p className="card-text text-center mt-3">
            SCORE: {score}
          </p>
          <div className="text-center mt-4">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;


