import React from 'react';
import './Input.css';

const Input = ({ label, value, error, onChange }) => {
  return (
    <div className='InputContainer'>
      <label>{label}</label>
      <input
        className={error !== '' ? 'Invalid' : null}
        type='text'
        value={value}
        onChange={onChange}
      />
      {error !== '' && <div className='ErrorMessage'>{error}</div>}
    </div>
  );
};

export default Input;
