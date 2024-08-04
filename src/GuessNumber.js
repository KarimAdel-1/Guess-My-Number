import PropTypes from 'prop-types';

const GuessNumber = ({ guess, setGuess, handleGuess, score }) => (
  <section className="left">
    <input
      type="number"
      className="guess"
      value={guess}
      onChange={e => setGuess(Number(e.target.value))}
    />
    <button className="btn check" onClick={handleGuess} disabled={score <= 0}>
      Check!
    </button>
  </section>
);

GuessNumber.propTypes = {
  guess: PropTypes.number.isRequired,
  setGuess: PropTypes.func.isRequired,
  handleGuess: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default GuessNumber;
