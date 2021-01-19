import React from 'react';

import './style.scss';

const Button = ({
  // eslint-disable-next-line react/prop-types
  title, onClick, disabled = false, className = '',
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    disabled={disabled}
    className={`button ${className}`}
    onClick={() => {
      if (!disabled) {
        onClick();
      }
    }}
  >
    {title}
  </button>
);

export default Button;
