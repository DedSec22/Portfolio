// Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type = 'button',
  className = '',
  disabled = false,
  children
}) => {
  const buttonClass = `${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
