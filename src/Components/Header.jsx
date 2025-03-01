import QuizLogo from "../assets/quizlogo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={QuizLogo} alt="Quiz Logo" />
      <h1>Quiz</h1>
    </header>
  );
}
