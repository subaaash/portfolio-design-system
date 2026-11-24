import React from 'react';
import './tokens.css';
import './components.css';

const cx = (...values) => values.filter(Boolean).join(' ');

export function Icon({ name = 'arrow-right', size = 20, className = '' }) {
  const paths = {
    'arrow-right': <><path d="M4 12h15"/><path d="m13 5 7 7-7 7"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/></>,
    spark: <><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  };
  return <svg className={cx('ds-icon', className)} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths['arrow-right']}</svg>;
}

const buttonSizes = { Small: 'small', Medium: 'medium', Large: 'large' };
const buttonStates = { Default: 'default', Hover: 'hover', Pressed: 'pressed', Disabled: 'disabled' };

export function Button({ label = 'Button', variant = 'Primary', size = 'Small', state = 'Default', icon = false, onClick, className = '', type = 'button' }) {
  const disabled = state === 'Disabled';
  return <button type={type} className={cx('ds-button', `ds-button--${variant.toLowerCase()}`, `ds-button--${buttonSizes[size] || 'small'}`, `ds-button--state-${buttonStates[state] || 'default'}`, className)} disabled={disabled} onClick={onClick}>
    <span>{label}</span>{icon && <Icon name="arrow-right" size={{ Small: 16, Medium: 20, Large: 24 }[size] || 16} />}
  </button>;
}

export function IconButton({ label = 'Open', icon = 'arrow-right', state = 'Default', onClick, className = '' }) {
  return <button type="button" className={cx('ds-icon-button', `is-${state.toLowerCase()}`, className)} aria-label={label} disabled={state === 'Disabled'} onClick={onClick}><Icon name={icon} size={20} /></button>;
}

export function TagChip({ children = 'Automotive HMI', tone = 'blue', className = '' }) {
  return <span className={cx('ds-tag', `ds-tag--${tone}`, className)}>{children}</span>;
}
export function FeaturedBadge({ children = 'Featured' }) { return <span className="ds-badge">{children}</span>; }
export function FilterChip({ children = 'All projects', selected = false, onClick }) { return <button type="button" className={cx('ds-filter-chip', selected && 'is-selected')} aria-pressed={selected} onClick={onClick}>{children}</button>; }
export function ProjectCategoryTag({ children = 'Product Design' }) { return <TagChip tone="neutral">{children}</TagChip>; }

export function TextField({ label = 'Name', placeholder = 'Your name', value, state = 'Default', helperText = '', leadingIcon = false, onChange, className = '' }) {
  return <label className={cx('ds-field', className)}>
    <span className="ds-field__label">{label}</span>
    <span className={cx('ds-field__control', `is-${state.toLowerCase()}`)}>
      {leadingIcon && <Icon name="user" size={20} />}
      <input aria-invalid={state === 'Error'} disabled={state === 'Disabled'} placeholder={placeholder} value={value} onChange={onChange} />
    </span>
    {helperText && <span className={cx('ds-field__helper', state === 'Error' && 'is-error')}>{helperText}</span>}
  </label>;
}

export function Textarea({ label = 'Message', placeholder = 'Tell me about your project…', state = 'Default', helperText = '', rows = 5, value, onChange, className = '' }) {
  return <label className={cx('ds-field', className)}>
    <span className="ds-field__label">{label}</span>
    <span className={cx('ds-field__control', 'ds-field__control--textarea', `is-${state.toLowerCase()}`)}>
      <textarea aria-invalid={state === 'Error'} disabled={state === 'Disabled'} placeholder={placeholder} rows={rows} value={value} onChange={onChange} />
    </span>
    {helperText && <span className={cx('ds-field__helper', state === 'Error' && 'is-error')}>{helperText}</span>}
  </label>;
}

export function Divider({ className = '' }) { return <hr className={cx('ds-divider', className)} />; }
export function SectionEyebrow({ children = 'SECTION' }) { return <div className="ds-eyebrow"><span />{children}</div>; }
export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return <header className={cx('ds-section-heading', `is-${align}`)}>{eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}<h2>{title || 'Section heading'}</h2>{description && <p>{description}</p>}</header>;
}
export function Tooltip({ children = 'More information', label = 'i' }) { return <span className="ds-tooltip" title={children} aria-label={children}>{label}</span>; }

export function NavigationItem({ label = 'Home', state = 'Default', href = '#' }) {
  return <a className={cx('ds-nav-item', `is-${state.toLowerCase()}`)} href={href} aria-current={state === 'Active' ? 'page' : undefined}>{label}<span /></a>;
}
export function NavigationBar({ items = ['Home', 'Work', 'Skills', 'About Me', 'Contact'], active = 'Home' }) {
  return <nav className="ds-navigation" aria-label="Portfolio navigation">{items.map(item => <NavigationItem key={item} label={item} state={item === active ? 'Active' : 'Default'} />)}</nav>;
}
export function MobileMenuItem({ label = 'Work', state = 'Default', href = '#' }) { return <a className={cx('ds-mobile-menu-item', `is-${state.toLowerCase()}`)} href={href}>{label}<Icon name="arrow-right" size={18} /></a>; }

export function ProjectThumbnail({ image, alt = '', title = 'Project preview' }) {
  return <div className="ds-project-thumbnail">{image ? <img src={image} alt={alt || title} /> : <div className="ds-project-thumbnail__placeholder"><span>{title}</span><Icon name="spark" size={32} /></div>}</div>;
}
export function ProjectCard({ title = 'Safety-First Adaptive Cockpit', description = 'A calm, safety-first interface for an adaptive electric vehicle cockpit.', tags = ['Automotive HMI', 'UX Design'], type = 'Project', image, href = '#', className = '' }) {
  return <article className={cx('ds-project-card', `is-${type.toLowerCase()}`, className)}>
    <a href={href} className="ds-project-card__media-link" aria-label={`View ${title}`}><ProjectThumbnail image={image} title={title} /></a>
    <div className="ds-project-card__body"><div className="ds-project-card__meta"><ProjectCategoryTag>{type}</ProjectCategoryTag><span>Case study</span></div><h3>{title}</h3><p>{description}</p><div className="ds-chip-row">{tags.map(tag => <TagChip key={tag} tone="neutral">{tag}</TagChip>)}</div><a className="ds-text-link" href={href}>View project <Icon name="arrow-right" size={18} /></a></div>
  </article>;
}

export function SkillItem({ name = 'Design Systems', level = 'Advanced' }) { return <div className="ds-skill-item"><span className="ds-skill-item__dot" /><div><strong>{name}</strong><small>{level}</small></div></div>; }
export function CoreExpertiseCard({ title = 'Automotive HMI', description = 'Designing clear, calm interfaces across the vehicle experience.', icon = 'spark', tags = [] }) {
  return <article className="ds-expertise-card"><span className="ds-expertise-card__icon"><Icon name={icon} size={24} /></span><h3>{title}</h3><p>{description}</p>{tags.length > 0 && <div className="ds-chip-row">{tags.map(tag => <TagChip key={tag} tone="neutral">{tag}</TagChip>)}</div>}</article>;
}
export function DomainExpertiseCard({ title = 'Automotive HMI', description = 'Human-centered cockpit experiences from concept to handoff.', skills = ['IVI', 'Instrument Cluster', 'HUD'] }) {
  return <article className="ds-domain-card"><SectionEyebrow>CORE EXPERTISE</SectionEyebrow><h3>{title}</h3><p>{description}</p><div className="ds-chip-row">{skills.map(skill => <TagChip key={skill} tone="blue">{skill}</TagChip>)}</div></article>;
}
export function ProfileInfoCard({ label = 'Based in', value = 'Chennai, India', icon = 'user' }) { return <div className="ds-info-card"><span className="ds-info-card__icon"><Icon name={icon} size={20} /></span><div><small>{label}</small><strong>{value}</strong></div></div>; }
export function ContactInfoCard({ label = 'Email', value = 'hello@example.com', href = 'mailto:hello@example.com', icon = 'mail' }) { return <a className="ds-contact-card" href={href}><span className="ds-contact-card__icon"><Icon name={icon} size={20} /></span><span><small>{label}</small><strong>{value}</strong></span><Icon name="arrow-right" size={18} /></a>; }
export function TimelineItem({ date = '2022 — Present', title = 'Senior UX Designer', organization = 'Portfolio Studio', description = 'Leading product design from research through detailed interaction design.' }) { return <article className="ds-timeline-item"><span className="ds-timeline-item__marker" /><div><small>{date}</small><h3>{title}</h3><strong>{organization}</strong><p>{description}</p></div></article>; }
export function RoleEducationCard({ title = 'B.E. Computer Science', organization = 'University', date = '2010 — 2014' }) { return <article className="ds-role-card"><div><h3>{title}</h3><p>{organization}</p></div><time>{date}</time></article>; }

export function FooterLink({ children = 'LinkedIn', href = '#' }) { return <a className="ds-footer-link" href={href}>{children}</a>; }
export function TextLink({ children = 'Read more', href = '#' }) { return <a className="ds-text-link" href={href}>{children}<Icon name="arrow-right" size={18} /></a>; }
export function SocialIconLink({ label = 'LinkedIn', href = '#', icon = 'link' }) { return <a className="ds-social-link" href={href} aria-label={label}><Icon name={icon} size={20} /></a>; }
export function ProfileAvatar({ initials = 'SC', size = 'medium', src, alt = 'Profile photo' }) { return <span className={cx('ds-avatar', `ds-avatar--${size}`)}>{src ? <img src={src} alt={alt} /> : initials}</span>; }
export function FormMessage({ state = 'Info', children = 'Your message will appear here.' }) { return <div className={cx('ds-form-message', `is-${state.toLowerCase()}`)} role={state === 'Error' ? 'alert' : 'status'}>{children}</div>; }

export function HeaderNavigation({ name = 'Subash C', active = 'Home' }) {
  return <header className="ds-header"><a className="ds-brand" href="#top" aria-label="Go to homepage"><ProfileAvatar initials="S" size="small" /><span>{name}</span></a><NavigationBar active={active} /><Button label="Contact me" size="Small" variant="Primary" /></header>;
}
export function HeroHome({ eyebrow = 'SENIOR UX DESIGNER', title = 'Designing clear experiences for complex systems.', description = 'I turn complex product challenges into useful, thoughtful digital experiences.', onWorkClick }) {
  return <section className="ds-hero"><div className="ds-hero__copy"><SectionEyebrow>{eyebrow}</SectionEyebrow><h1>{title}</h1><p>{description}</p><div className="ds-button-row"><Button label="View my work" size="Medium" onClick={onWorkClick} icon /><Button label="Contact me" size="Medium" variant="Secondary" /></div></div><div className="ds-hero__visual"><div className="ds-hero__orbit" /><div className="ds-hero__monogram">SC</div><span>Product thinking · Interaction · Systems</span></div></section>;
}
export function WorkProjectsGrid({ projects = [] }) {
  const items = projects.length ? projects : [{}, {}, {}];
  return <section className="ds-organism"><SectionHeading eyebrow="SELECTED WORK" title="Projects" description="A selection of product and interface design work." /><div className="ds-project-grid">{items.map((project, index) => <ProjectCard key={project.title || index} {...project} />)}</div></section>;
}
export function SkillsSection({ skills = ['Automotive HMI', 'Design Systems', 'Product UX', 'Figma', 'Prototyping', 'Accessibility'] }) {
  return <section className="ds-organism"><SectionHeading eyebrow="WHAT I DO" title="Core expertise" description="A practical mix of product thinking, interface design, and systems work." /><div className="ds-expertise-grid">{skills.map((skill, index) => <CoreExpertiseCard key={skill} title={skill} description="Research, interaction design, and clear delivery for real product needs." icon={index % 2 ? 'briefcase' : 'spark'} />)}</div></section>;
}
export function AboutExperienceSection({ entries = [] }) {
  const items = entries.length ? entries : [{}];
  return <section className="ds-organism ds-about"><div><SectionHeading eyebrow="ABOUT ME" title="Experience" description="My path through product design and the teams I have helped." />{items.map((entry, i) => <TimelineItem key={entry.title || i} {...entry} />)}</div><aside className="ds-about__aside"><ProfileInfoCard label="Focus" value="Automotive HMI & Product UX" icon="spark" /><ProfileInfoCard label="Location" value="Chennai, India" /><RoleEducationCard /></aside></section>;
}
export function ContactFormSection({ onSubmit, email = 'hello@example.com' }) {
  const submit = event => { event.preventDefault(); onSubmit?.(event); };
  return <section className="ds-organism ds-contact-section"><div><SectionHeading eyebrow="GET IN TOUCH" title="Let’s work together" description="Have a project or role in mind? Send a message." /><ContactInfoCard label="Email" value={email} href={`mailto:${email}`} /></div><form className="ds-contact-form" onSubmit={submit}><TextField label="Your name" placeholder="Enter your name" /><TextField label="Email address" placeholder="you@example.com" /><Textarea label="Message" placeholder="Tell me a little about your project" /><Button type="submit" label="Send message" size="Medium" icon /><FormMessage state="Info">This demo form is ready for your project’s submit handler.</FormMessage></form></section>;
}
export function PortfolioFooter({ name = 'Subash C', links = ['LinkedIn', 'Behance', 'Email'] }) {
  return <footer className="ds-footer"><div><strong>{name}</strong><p>Designed with care. Built for clarity.</p></div><nav aria-label="Footer links">{links.map(link => <FooterLink key={link}>{link}</FooterLink>)}</nav><small>© {new Date().getFullYear()} {name}</small></footer>;
}

