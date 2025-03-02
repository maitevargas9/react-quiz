import { useState, useEffect } from "react";
import QuestionTimer from "./QuestionTimer";

const Question = ({ question, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(
    () => {
      setSelectedAnswer(null);
    },
    [question]
  );

  const handleAnswerClick = index => {
    if (selectedAnswer == null) {
      setSelectedAnswer(index);
      onAnswerSelected(index);
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
        {question.answers.map((answer, index) =>
          <li key={index}>
            <button
              onClick={() => handleAnswerClick(index)}
              disabled={selectedAnswer !== null}
            >
              {answer}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Question;
