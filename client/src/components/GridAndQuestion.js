import React from "react";
import "./GridAndQuestion.css";

function GridAndQuestion({ responses }) {
  return (
    <div className="grid-and-question-container">
    {responses.map((response, index) => (
      <div key={index} className="question-container">
        <h3>Question {index + 1}</h3>
        <p className="question-text">{response.questionText}</p>
        <div className="options-container">
          {response.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              className={`option-button ${
                response.selectedAnswer === option
                  ? "selected"
                  : (!response.isCorrect && optionIndex === response.correctAnswer)
                  ? "correct-answer-option"
                  : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <p
          className={`status ${
            response.selectedAnswer === "-1"
              ? "unattempted"
              : response.isCorrect
              ? "correct"
              : "incorrect"
          }`}
        >
          {response.selectedAnswer === "-1"
            ? "Unattempted"
            : response.isCorrect
            ? "Correct"
            : "Incorrect"}
        </p>
      </div>
    ))}
  </div>
  
  );
}

export default GridAndQuestion;
