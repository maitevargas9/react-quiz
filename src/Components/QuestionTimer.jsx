import { useState, useEffect } from "react";

const QuestionTimer = ({ timeLimit, onTimeOut }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(
    () => {
      setTimeLeft(timeLimit);

      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            setTimeout(onTimeOut, 0);
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    },
    [timeLimit, onTimeOut]
  );

  return <progress value={timeLeft} max={timeLimit} />;
};

export default QuestionTimer;
