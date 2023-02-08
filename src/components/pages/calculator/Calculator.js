import React, { Component } from 'react';
import Input from '../../UI/Input/Input';

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
      const updatedNumber = {
        ...this.state.firstNumber,
      };
      updatedNumber.value = event.target.value;
      this.setState({
        firstNumber: updatedNumber,
      });
    } else if (number === 'secondNumber') {
      const updatedNumber = {
        ...this.state.secondNumber,
      };
      updatedNumber.value = event.target.value;
      this.setState({
        secondNumber: updatedNumber,
      });
    }
  };

  validateInput = () => {
    if (
      isNaN(this.state.firstNumber.value) ||
      this.state.firstNumber.value === ''
    ) {
      this.setState({
        firstNumber: {
          ...this.state.firstNumber,
          error: 'Please enter a valid number',
        },
      });
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
      });
    } else {
      this.setState({
        secondNumber: {
          ...this.state.secondNumber,
          error: '',
        },
      });
    }
    return;
  };

  sumNumbers = () => {
    this.validateInput();
    const firstNumberValue = parseFloat(this.state.firstNumber.value);
    const secondNumberValue = parseFloat(this.state.secondNumber.value);

    const sum = firstNumberValue + secondNumberValue;
    this.setState({
      sum: sum,
    });
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <Input
          label='First number: '
          value={this.state.firstNumber.value}
          error={this.state.firstNumber.error}
          onChange={(event) => this.inputChangeHandler(event, 'firstNumber')}
        />
        <Input
          label='Second number: '
          value={this.state.secondNumber.value}
          error={this.state.secondNumber.error}
          onChange={(event) => this.inputChangeHandler(event, 'secondNumber')}
        />
        <button onClick={this.sumNumbers}>Sum</button>
        <br />
        {isNaN(this.state.sum) ? (
          <div>Insert numbers</div>
        ) : (
          <div>Sum: {this.state.sum}</div>
        )}
      </div>
    );
  }
}

export default Calculator;
