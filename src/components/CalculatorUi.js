import { useState } from 'react';
import Displayer from './Displays';
import Button from './Button';
import PropTypes from 'prop-types';

const CalculatorUi = () => {
  const [obj, setObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  return (
    <div className="calculator-container">
      <Displayer obj={obj} />
      <Button value="AC" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="+/-" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="%" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="÷" classList="button bg-2" setObj={setObj} obj={obj} />
      <Button value="7" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="8" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="9" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="x" classList="button bg-2" setObj={setObj} obj={obj} />
      <Button value="4" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="5" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="6" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="-" classList="button bg-2" setObj={setObj} obj={obj} />
      <Button value="1" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="2" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="3" classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="+" classList="button bg-2" setObj={setObj} obj={obj} />
      <Button
        value="0"
        classList="button bg-1 zero-btn"
        setObj={setObj}
        obj={obj}
      />
      <Button value="." classList="button bg-1" setObj={setObj} obj={obj} />
      <Button value="=" classList="button bg-2" setObj={setObj} obj={obj} />
    </div>
  );
};

export default CalculatorUi;
