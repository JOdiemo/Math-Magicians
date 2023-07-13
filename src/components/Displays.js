import PropTypes from 'prop-types';

const Displayer = ({ obj }) => {
  const show = (obj) => {
    const len = Object.keys(obj).length;

    if (len === '3') {
      if (obj.operation == null && obj.next == null) {
        return obj.total;
      } if (obj.operation && obj.next == null) {
        return `${obj.total} ${obj.operation}`;
      } if (obj.operation && obj.next && obj.total) {
        return `${obj.total} ${obj.operation} ${obj.next}`;
      }
    }

    if (len === '2') {
      return obj.next;
    }
    return null;
  };
  return <div className="calculator-display number">{show(obj) || 0}</div>;
};
Displayer.propTypes = {
  obj: PropTypes.string.isRequired,

};
export default Displayer;
