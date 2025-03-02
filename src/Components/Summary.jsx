import QuizComplete from "../assets/quiz-completed.png";

export default function Summary() {
  return (
    <div id="summary">
      <img src={QuizComplete} alt="QuizComplete" className="summary img" />
      <h2>Quiz Completed!</h2>
    </div>
  );
}
