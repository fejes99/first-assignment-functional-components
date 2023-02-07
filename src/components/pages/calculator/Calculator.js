import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    firstNumber: 0,
    secondNumber: 0,
    sum: 0,
  };

  inputChangeHandler = (event, number) => {
    if (number === 'number1') {
      this.setState({
        firstNumber: event.target.value,
      });
    } else if (number === 'number2') {
      this.setState({
        secondNumber: event.target.value,
      });
    }
  };

  sumNumbers = () => {
    let sum = +this.state.firstNumber + +this.state.secondNumber;
    this.setState({
      sum: +sum,
    });
  };

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <label>First Number: </label>
        <input
          type='text'
          value={this.state.firstNumber}
          onChange={(event) => this.inputChangeHandler(event, 'number1')}
        />
        <label>Second Number: </label>
        <input
          type='text'
          value={this.state.secondNumber}
          onChange={(event) => this.inputChangeHandler(event, 'number2')}
        />
        <br />
        <button onClick={this.sumNumbers}>Sum</button>
        <label>Sum: {this.state.sum}</label>
      </div>
    );
  }
}

export default Calculator;
