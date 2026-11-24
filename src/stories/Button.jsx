import PropTypes from 'prop-types';
import React from 'react';
import './button.css';

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  trailingIcon = null,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={[
        'ds-button',
        `ds-button--${variant}`,
        `ds-button--${size}`,
      ].join(' ')}
      {...props}
    >
      <span className="ds-button__label">{label}</span>
      {trailingIcon && <span className="ds-button__icon" aria-hidden="true">{trailingIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  /** Visual hierarchy of the button. */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Button height and type scale. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Visible button label. */
  label: PropTypes.string.isRequired,
  /** Optional icon placed after the label. */
  trailingIcon: PropTypes.node,
  /** Native button type. */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Optional click handler. */
  onClick: PropTypes.func,
  /** Native disabled state. */
  disabled: PropTypes.bool,
};
