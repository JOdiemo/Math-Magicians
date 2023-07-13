/* eslint-disable */
const Error = ({ error }) => {
  console.log(error);
  return <div className='quote-container error-container'>{error.error}</div>;
};

export default Error;