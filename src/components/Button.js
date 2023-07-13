import PropTypes from 'prop-types';
import calculate from './logic/calculate';

const Button = ({
  obj, setObj, value, classList,

}) => {
  const handleInput = (e) => {
    setObj(calculate(obj, e.target.innerText));
  };

  return (
    <button
      type="button"
      className={classList}
      onClick={(e) => {
        handleInput(e);
      }}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  obj: PropTypes.string.isRequired,
  setObj: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classList: PropTypes.string.isRequired,
};

export default Button;
