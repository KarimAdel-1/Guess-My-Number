import PropTypes from 'prop-types';
import GuessNumber from './GuessNumber';
import GuessResults from './GuessResults';

const Main = ({ score, highScore, guess, setGuess, message, handleGuess }) => (
  <main>
    <GuessNumber
      guess={guess}
      setGuess={setGuess}
      handleGuess={handleGuess}
      score={score}
    />
    <GuessResults message={message} score={score} highScore={highScore} />
  </main>
);

Main.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
  guess: PropTypes.number.isRequired,
  setGuess: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  handleGuess: PropTypes.func.isRequired,
};

export default Main;
