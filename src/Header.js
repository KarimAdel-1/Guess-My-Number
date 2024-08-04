import PropTypes from 'prop-types';

const Header = ({ resultMessage, onAgain }) => (
  <header>
    <h1>Guess My Number!</h1>
    <p className="between">(Between 1 and 20)</p>
    <button className="btn again" onClick={onAgain}>
      Again!
    </button>
    <div className="number">{resultMessage}</div>
  </header>
);

Header.propTypes = {
  resultMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onAgain: PropTypes.func.isRequired,
};

export default Header;
