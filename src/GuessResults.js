import PropTypes from 'prop-types';

const GuessResults = ({ message, score, highScore }) => (
  <section className="right">
    <p className="message">{message}</p>
    <p className="label-score">
      💯 Score: <span className="score">{score}</span>
    </p>
    <p className="label-highscore">
      🥇 Highscore: <span className="highscore">{highScore}</span>
    </p>
  </section>
);

GuessResults.propTypes = {
  message: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired,
};

export default GuessResults;
