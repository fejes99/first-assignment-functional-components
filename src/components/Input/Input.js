import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    return (
      <div className='InputContainer'>
        <label>{this.props.label}</label>
        <input
          className={this.props.error !== '' ? 'Invalid' : null}
          type='text'
          value={this.props.value}
          onChange={this.props.onChange}
        />
        {this.props.error !== '' && (
          <div className='ErrorMessage'>{this.props.error}</div>
        )}
      </div>
    );
  }
}

export default Input;
