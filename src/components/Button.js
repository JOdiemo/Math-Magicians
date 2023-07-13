/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ obj , setObj, value, classList }) {
  const handleInput = (e) => {

  };

  return (
    <button
      className={classList}
      onClick={(e) => {
        handleInput(e);
      } }>
      {value}
    </button>
  );
}

export default Button;
