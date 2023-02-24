import React, { useState } from 'react';
import './Calculator.css';
import Input from '../Input/Input';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState({ value: '0', error: '' });
  const [secondNumber, setSecondNumber] = useState({ value: '0', error: '' });
  const [sum, setSum] = useState(0);

  const inputChangeHandler = (event, number) => {
    if (number === 'firstNumber') {
      setFirstNumber({ ...firstNumber, value: event.target.value });
    } else if (number === 'secondNumber') {
      setSecondNumber({ ...secondNumber, value: event.target.value });
    }
  };

  const validateInput = () => {
    let valid = true;

    const updatedFirstNumber =
      isNaN(firstNumber.value) || firstNumber.value === ''
        ? { ...firstNumber, error: 'Please enter a valid number' }
        : { ...firstNumber, error: '' };

    const updatedSecondNumber =
      isNaN(secondNumber.value) || secondNumber.value === ''
        ? { ...secondNumber, error: 'Please enter a valid number' }
        : { ...secondNumber, error: '' };

    const updatedSum = updatedFirstNumber.value + updatedSecondNumber.value || 0;
    setFirstNumber(updatedFirstNumber);
    setSecondNumber(updatedSecondNumber);
    setSum(updatedSum);

    if (updatedFirstNumber.error || updatedSecondNumber.error) {
      valid = false;
    }

    return valid;
  };

  const sumNumbers = () => {
    if (validateInput()) {
      const firstNumberValue = parseFloat(firstNumber.value);
      const secondNumberValue = parseFloat(secondNumber.value);

      const updatedSum = firstNumberValue + secondNumberValue;

      setSum(updatedSum);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div className='form-wrapper'>
        <div className='form-row'>
          <Input
            label='First number: '
            value={firstNumber.value}
            error={firstNumber.error}
            onChange={(event) => inputChangeHandler(event, 'firstNumber')}
          />
        </div>
        <div className='form-row'>
          <Input
            label='Second number: '
            value={secondNumber.value}
            error={secondNumber.error}
            onChange={(event) => inputChangeHandler(event, 'secondNumber')}
          />
        </div>
        <div>
          <button className='button' onClick={sumNumbers}>
            Sum
          </button>
        </div>
      </div>
      {isNaN(sum) || sum === 0 ? <div>Insert numbers</div> : <div>Sum: {sum}</div>}
    </div>
  );
};

export default Calculator;
