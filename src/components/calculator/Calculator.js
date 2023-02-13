import React, { Component } from 'react';
import './Calculator.css';
import Input from '../Input/Input';

class Calculator extends Component {
  state = {
    firstNumber: {
      value: '0',
      error: '',
    },
    secondNumber: {
      value: '0',
      error: '',
    },
    sum: 0,
  };

  inputChangeHandler = (event, number) => {
    if (number === 'firstNumber') {
      this.setState({
        firstNumber: {
          ...this.state.firstNumber,
          value: event.target.value,
        },
        sum: 0,
      });
    } else if (number === 'secondNumber') {
      this.setState({
        secondNumber: {
          ...this.state.secondNumber,
          value: event.target.value,
        },
        sum: 0,
      });
    }
  };

  validateInput = () => {
    let valid = true;
    if (
      isNaN(this.state.firstNumber.value) ||
      this.state.firstNumber.value === ''
    ) {
      this.setState({
        firstNumber: {
          ...this.state.firstNumber,
          error: 'Please enter a valid number',
        },
        sum: 0,
      });
      valid = false;
    } else {
      this.setState({
        firstNumber: {
          ...this.state.firstNumber,
          error: '',
        },
      });
    }

    if (
      isNaN(this.state.secondNumber.value) ||
      this.state.secondNumber.value === ''
    ) {
      this.setState({
        secondNumber: {
          ...this.state.secondNumber,
          error: 'Please enter a valid number',
        },
        sum: 0,
      });
      valid = false;
    } else {
      this.setState({
        secondNumber: {
          ...this.state.secondNumber,
          error: '',
        },
      });
    }
    return valid;
  };

  sumNumbers = () => {
    if (this.validateInput()) {
      const firstNumberValue = parseFloat(this.state.firstNumber.value);
      const secondNumberValue = parseFloat(this.state.secondNumber.value);

      const sum = firstNumberValue + secondNumberValue;
      this.setState({
        sum: sum,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <div className='form-wrapper'>
          <div className='form-row'>
            <Input
              label='First number: '
              value={this.state.firstNumber.value}
              error={this.state.firstNumber.error}
              onChange={(event) =>
                this.inputChangeHandler(event, 'firstNumber')
              }
            />
          </div>
          <div className='form-row'>
            <Input
              label='Second number: '
              value={this.state.secondNumber.value}
              error={this.state.secondNumber.error}
              onChange={(event) =>
                this.inputChangeHandler(event, 'secondNumber')
              }
            />
          </div>
          <div>
            <button className='button' onClick={this.sumNumbers}>
              Sum
            </button>
          </div>
        </div>
        {isNaN(this.state.sum) || this.state.sum === 0 ? (
          <div>Insert numbers</div>
        ) : (
          <div>Sum: {this.state.sum}</div>
        )}
      </div>
    );
  }
}

export default Calculator;
