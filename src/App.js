import React, { useState } from "react";
import './App.css';

const questions = [
  {
    question: "Who is the billionaire genius avenger?",
    options: ["Thor", "Black Widow", "Iron Man", "Captain America"],
    answer: "Iron Man",
  },
  {
    question: "What's the name of Thor's enchanted hammer?",
    options: ["Mjölnir", "Stormbreaker", "Excalibur", "Gungnir"],
    answer: "Mjölnir",
  },
  {
    question: "Which Avenger is known for their archery skills?",
    options: ["Iron Man", "Hawkeye", "Black Panther", "Spider-Man"],
    answer: "Hawkeye",
  },
  {
    question: "What's the real name of Black Widow?",
    options: ["Natasha Romanoff", "Wanda Maximoff", "Jane Foster", "Carol Danvers"],
    answer: "Natasha Romanoff",
  },
  {
    question: "Who is the ruler of Wakanda?",
    options: ["T'Challa", "Rhodey", "Sam Wilson", "Nebula"],
    answer: "T'Challa",
  },
  {
    question: "What's Tony Stark's daughter's name?",
    options: ["Pepper", "Morgan", "Peggy", "Maria"],
    answer: "Morgan",
  },
  {
    question: "Which Infinity Stone does Doctor Strange guard?",
    options: ["Reality Stone", "Mind Stone", "Time Stone", "Space Stone"],
    answer: "Time Stone",
  },
  {
    question: "Who is known as the Sorcerer Supreme?",
    options: ["Iron Man", "Spider-Man", "Black Panther", "Doctor Strange"],
    answer: "Doctor Strange",
  },
  {
    question: "What's the name of Tony Stark's AI assistant?",
    options: ["Ultron", "J.A.R.V.I.S.", "FRIDAY", "Vision"],
    answer: "J.A.R.V.I.S.",
  },
  {
    question: "Which Avenger is the Norse god of thunder?",
    options: ["Hulk", "Thor", "Black Widow", "Ant-Man"],
    answer: "Thor",
  },
];

function Avenger() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          {/* Display the question count and text */}
          <div className="question-count">
            Question {currentQuestion + 1}/{questions.length}
          </div>

          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Avenger;
