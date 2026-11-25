import { cloneElement, isValidElement, useId, useState } from 'react';
import './generated/tokens.css';
import './PortfolioComponents.css';

export function IconButton({ label, children, className = '', ...props }) {
  if (!label) throw new Error('IconButton requires an accessible label.');
  return <button {...props} type={props.type || 'button'} aria-label={label} className={`portfolio-icon-button ${className}`.trim()}>{children}</button>;
}

export function Navigation({ label = 'Primary navigation', brand, brandHref = '#home', children, className = '', ...props }) {
  return <nav {...props} aria-label={label} className={`portfolio-navigation ${className}`.trim()}>{brand && <a className="portfolio-navigation__brand" href={brandHref}>{brand}</a>}{children}</nav>;
}

export function NavigationItem({ href, active = false, children, className = '', ...props }) {
  return <a {...props} href={href} aria-current={active ? 'location' : undefined} className={`portfolio-nav-item ${active ? 'is-active' : ''} ${className}`.trim()}>{children}</a>;
}

export function TextLink({ href, children, className = '', ...props }) {
  return <a {...props} href={href} className={`portfolio-text-link ${className}`.trim()}>{children}</a>;
}

export function FooterLink({ href, children, className = '', ...props }) {
  return <a {...props} href={href} className={`portfolio-footer-link ${className}`.trim()}>{children}</a>;
}

export function ProjectThumbnail({ src, alt = '', className = '', ...props }) {
  return <div className={`portfolio-project-thumbnail ${className}`.trim()} {...props}>{src ? <img src={src} alt={alt} /> : <div className="portfolio-project-thumbnail__empty" role="img" aria-label={alt || 'Project artwork placeholder'} />}</div>;
}

export function ExperienceCard({ value, description, children, className = '', ...props }) {
  return <article {...props} className={`portfolio-experience-card ${className}`.trim()}>{value && <strong className="portfolio-experience-card__value">{value}</strong>}{description && <p className="portfolio-experience-card__description">{description}</p>}{children}</article>;
}

export function SkillGroupCard({ title, description, children, className = '', ...props }) {
  const titleId = useId();
  return <section {...props} className={`portfolio-skill-group-card ${className}`.trim()} aria-labelledby={titleId}><h3 id={titleId}>{title}</h3>{description && <p>{description}</p>}{children}</section>;
}

export function SkillItem({ title, description, className = '', ...props }) {
  return <li {...props} className={`portfolio-skill-item ${className}`.trim()}><strong>{title}</strong>{description && <p>{description}</p>}</li>;
}

export function DomainExpertiseCard({ title, description, icon, className = '', ...props }) {
  return <article {...props} className={`portfolio-domain-expertise-card ${className}`.trim()}>{icon && <span aria-hidden="true">{icon}</span>}<h3>{title}</h3>{description && <p>{description}</p>}</article>;
}

export function SkillChip({ children, className = '', ...props }) {
  return <span {...props} className={`portfolio-skill-chip ${className}`.trim()}>{children}</span>;
}

export function TimelineItem({ date, title, children, className = '', ...props }) {
  return <li {...props} className={`portfolio-timeline-item ${className}`.trim()}><time>{date}</time><span className="portfolio-timeline-item__marker" aria-hidden="true" /><div><h3>{title}</h3>{children}</div></li>;
}

export function RoleCard({ title, company, period, children, className = '', ...props }) {
  return <article {...props} className={`portfolio-role-card ${className}`.trim()}><h3>{title}</h3>{company && <p className="portfolio-role-card__company">{company}</p>}{period && <p className="portfolio-role-card__period">{period}</p>}{children}</article>;
}

export function ContactMethodCard({ label, value, href, className = '', ...props }) {
  const content = <><strong>{label}</strong><span>{value}</span></>;
  const classes = `portfolio-contact-method-card ${className}`.trim();
  return href ? <a {...props} className={classes} href={href}>{content}</a> : <div {...props} className={classes}>{content}</div>;
}

export function FeaturedBadge({ children = 'Featured', className = '', ...props }) {
  return <span {...props} className={`portfolio-featured-badge ${className}`.trim()}>{children}</span>;
}

export function Tooltip({ trigger, children, className = '', ...props }) {
  const tooltipId = useId();
  const [isOpen, setIsOpen] = useState(false);
  if (!isValidElement(trigger)) {
    throw new Error('Tooltip requires a focusable trigger element.');
  }
  const describedBy = [trigger.props['aria-describedby'], tooltipId].filter(Boolean).join(' ');
  const triggerElement = cloneElement(trigger, {
    'aria-describedby': describedBy,
    onFocus: (event) => {
      trigger.props.onFocus?.(event);
      setIsOpen(true);
    },
    onBlur: (event) => {
      trigger.props.onBlur?.(event);
      setIsOpen(false);
    },
    onMouseEnter: (event) => {
      trigger.props.onMouseEnter?.(event);
      setIsOpen(true);
    },
    onMouseLeave: (event) => {
      trigger.props.onMouseLeave?.(event);
      setIsOpen(false);
    },
    onKeyDown: (event) => {
      trigger.props.onKeyDown?.(event);
      if (event.key === 'Escape') setIsOpen(false);
    },
  });
  return <span className="portfolio-tooltip-container">
    {triggerElement}
    <span {...props} id={tooltipId} role="tooltip" hidden={!isOpen} className={`portfolio-tooltip ${className}`.trim()}>{children}</span>
  </span>;
}

function Field({ as: Control = 'input', label, id, error, className = '', ...props }) {
  const generatedId = useId();
  const controlId = id || generatedId;
  const errorId = error ? `${controlId}-error` : undefined;
  return <label className="portfolio-field" htmlFor={controlId}><span className="portfolio-field__label">{label}</span><Control {...props} id={controlId} className={`portfolio-field__control ${className}`.trim()} aria-invalid={error ? 'true' : undefined} aria-describedby={errorId} />{error && <FormMessage id={errorId} kind="error">{error}</FormMessage>}</label>;
}

export function TextField(props) {
  return <Field {...props} />;
}

export function TextArea(props) {
  return <Field {...props} as="textarea" />;
}

export function FormMessage({ kind = 'error', children, className = '', ...props }) {
  const role = kind === 'error' ? 'alert' : 'status';
  return <p {...props} role={role} className={`portfolio-form-message portfolio-form-message--${kind} ${className}`.trim()}>{children}</p>;
}

export function SectionEyebrow({ children, className = '', ...props }) {
  return <p {...props} className={`portfolio-section-eyebrow ${className}`.trim()}>{children}</p>;
}

export function Divider({ className = '', ...props }) {
  return <hr {...props} className={`portfolio-divider ${className}`.trim()} />;
}

export function PortfolioFooter({ copyright = '© 2026 Portfolio', children, className = '', ...props }) {
  return <footer {...props} className={`portfolio-footer ${className}`.trim()}>{children || copyright}</footer>;
}
