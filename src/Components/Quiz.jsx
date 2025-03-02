import { useState } from "react";
import questions from "../Data/questions.js";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswerSelected = index => {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = index;
      return updatedAnswers;
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div>
      {!gameOver &&
        <Question
          question={questions[currentQuestionIndex]}
          onAnswerSelected={handleAnswerSelected}
        />}
      {gameOver && <Summary answers={answers} questions={questions} />}
    </div>
  );
};

export default Quiz;
