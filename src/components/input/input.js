import React from 'react';

const Input = ({
  label, onChange, disabled = false, value,
}) => (
  <div className="input">
    <div className="input__label">{label}</div>
    <div className="input__wrapper">
      <input disabled={disabled} value={value} className="input__element" onChange={(e) => onChange(e.target.value)} />
    </div>
  </div>
);

export default Input;
