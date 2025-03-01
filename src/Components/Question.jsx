import { useState, useEffect } from "react";
import questions from "../Data/questions.js";

export default function Question() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(
    () => {
      setSelectedAnswer(null);
    },
    [questions]
  );

  const handleAnswerClick = index => {
    if (selectedAnswer == null) {
      setSelectedAnswer(index);
    }
  };

  return (
    <div>
      {questions.map((q, questionIndex) =>
        <div key={questionIndex}>
          <h2>
            {q.question}
          </h2>
          <ul>
            {q.answers.map((answer, answerIndex) =>
              <li key={answerIndex}>
                <button
                  onClick={() => handleAnswerClick(questionIndex, answerIndex)}
                >
                  {answer}
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
