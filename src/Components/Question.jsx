import { useState, useEffect } from "react";
import QuestionTimer from "./QuestionTimer";

export default function Question({ question, onAnswerSelected }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(
    () => {
      setSelectedAnswer(null);
    },
    [question]
  );

  const handleAnswerClick = answerIndex => {
    if (selectedAnswer == null) {
      setSelectedAnswer(answerIndex);
      onAnswerSelected(answerIndex);
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div>
      <QuestionTimer timeLimit={10} onTimeOut={nextQuestion} />
      <h2>
        {question.question}
      </h2>
      <ul>
        {question.answers.map((answer, answerIndex) =>
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
