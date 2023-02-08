import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          className={this.props.error !== '' ? 'Invalid' : null}
          type='text'
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        {this.props.error !== '' && <div>{this.props.error}</div>}
      </div>
    );
  }
}

export default Input;
