import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';

export default function App() {
  const [randomNum, setRandomNum] = useState(0);
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [guess, setGuess] = useState(0);
  const [message, setMessage] = useState('Start guessing...');
  const [resultMessage, setResultMessage] = useState('?');

  useEffect(() => {
    handleRandomNum();
  }, []);

  const handleRandomNum = () => {
    setRandomNum(Math.trunc(Math.random() * 20) + 1);
  };

  const handleAgain = () => {
    handleRandomNum();
    setScore(20);
    setMessage('Start guessing...');
    setResultMessage('?');
    setGuess(0); // Reset the guess input
    document.body.style.backgroundColor = ''; // Reset background color
  };

  const decrementScore = () => {
    setScore(prevScore => {
      const newScore = prevScore - 1;
      if (newScore === 0) {
        document.body.style.backgroundColor = 'red';
        setMessage('💥 You Lose!');
      }
      return newScore;
    });
  };

  const handleGuess = () => {
    if (guess === 0) {
      setMessage('⛔️ No number!');
    } else if (guess > randomNum) {
      setMessage('📈 Too high!');
      decrementScore();
    } else if (guess < randomNum) {
      setMessage('📉 Too low!');
      decrementScore();
    } else {
      setMessage('🎉 Correct Number!');
      setResultMessage(randomNum);
      document.body.style.backgroundColor = 'green'; // Change background color to green
      if (score > highScore) {
        setHighScore(score);
      }
    }
  };

  return (
    <>
      <Header resultMessage={resultMessage} onAgain={handleAgain} />
      <Main
        score={score}
        highScore={highScore}
        guess={guess}
        setGuess={setGuess}
        message={message}
        handleGuess={handleGuess}
      />
    </>
  );
}
