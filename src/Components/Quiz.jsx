import { useState } from "react";
import questions from "../Data/questions.js";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSelected = index => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div>
      <Question />
      <Summary />
    </div>
  );
}
