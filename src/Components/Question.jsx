import { useState, useEffect } from "react";
import questions from "../Data/questions.js";
import QuestionTimer from "./QuestionTimer";

export default function Question() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(
    () => {
      setSelectedAnswer(null);
    },
    [currentQuestionIndex]
  );

  const handleAnswerClick = answerIndex => {
    if (selectedAnswer == null) {
      setSelectedAnswer(answerIndex);
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz beendet!");
    }
  };

  return (
    <div>
      <h2>
        {questions[currentQuestionIndex].question}
      </h2>
      <QuestionTimer timeLimit={10} onTimeOut={nextQuestion} />
      <ul>
        {questions[currentQuestionIndex].answers.map((answer, answerIndex) =>
          <li key={answerIndex}>
            <button
              onClick={() => handleAnswerClick(answerIndex)}
              disabled={selectedAnswer !== null}
            >
              {answer}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
