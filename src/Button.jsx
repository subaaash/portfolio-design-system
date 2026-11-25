import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-700.css';
import './generated/tokens.css';
import './Button.css';

const variants = new Set(['primary', 'secondary']);
const sizes = new Set(['small', 'medium', 'large']);
const iconPositions = new Set(['leading', 'trailing']);

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'trailing',
  fullWidth = false,
  className = '',
  ...buttonProps
}) {
  if (!variants.has(variant)) {
    throw new Error('Button variant must be "primary" or "secondary".');
  }
  if (!sizes.has(size)) {
    throw new Error('Button size must be "small", "medium", or "large".');
  }
  if (!iconPositions.has(iconPosition)) {
    throw new Error('Button iconPosition must be "leading" or "trailing".');
  }

  const classes = [
    'portfolio-button',
    `portfolio-button--${variant}`,
    `portfolio-button--${size}`,
    fullWidth && 'portfolio-button--full-width',
    className,
  ].filter(Boolean).join(' ');

  const iconContent = icon ? (
    <span className="portfolio-button__icon" aria-hidden="true">{icon}</span>
  ) : null;

  return (
    <button
      {...buttonProps}
      type={type}
      className={classes}
      disabled={disabled}
    >
      {iconPosition === 'leading' && iconContent}
      <span className="portfolio-button__label">{children}</span>
      {iconPosition === 'trailing' && iconContent}
    </button>
  );
}
