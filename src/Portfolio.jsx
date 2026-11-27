import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard.jsx';
import { selectedWorkProjects } from './projects.js';
import { artwork, careerRoles, skillGroups } from './portfolio.js';

const navigation = [
  ['home', 'Home'],
  ['work', 'Work'],
  ['skills', 'Skills'],
  ['about', 'About Me'],
  ['contact', 'Contact'],
];

const expertise = [
  ['ADAS', 'Safer driving', 'hero-frame1000002718.svg'],
  ['Connected Car', 'Seamless & smart', null],
  ['Shared Mobility', 'Flexible access', 'hero-icon1.svg'],
  ['EV', 'Clean mobility', 'hero-icon2.svg'],
];

const contactMethods = [
  ['Email', 'subash2hi@gmail.com', 'contact-mail.svg'],
  ['LinkedIn', 'linkedin.com/in/subash-c-b183191bb', 'contact-linkedin.svg', 'https://www.linkedin.com/in/subash-c-b183191bb/'],
  ['Behance', 'behance.net/subashc3', 'contact-behance.svg', 'https://www.behance.net/subashc3/'],
  ['Mobile', '+91 9080454635', 'contact-download.svg'],
];

function Icon({ file, className }) {
  return <img src={artwork(file)} className={className} alt="" />;
}

function Header() {
  const [current, setCurrent] = useState(() => window.location.hash || '#home');
  useEffect(() => {
    const update = () => setCurrent(window.location.hash || '#home');
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  return (
    <header className="site-header">
      <div className="site-inner site-header__layout">
        <a className="wordmark" href="#home">Subash /</a>
        <nav aria-label="Portfolio">
          <ul>
            {navigation.map(([id, title]) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={current === `#${id}` ? 'location' : undefined}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Eyebrow({ children }) {
  return <p className="section-eyebrow">{children}</p>;
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="site-inner hero__layout">
        <div className="hero__copy">
          <Eyebrow>Hi, I’m Subash</Eyebrow>
          <h1 id="hero-heading">Senior UX Designer — <em>Automotive HMI</em></h1>
          <p className="section-intro">I create intuitive, safety-focused mobility experiences for modern vehicles.</p>
          <div className="hero__actions">
            <a className="portfolio-button" href="#work">View Work <Icon file="hero-icon.svg" /></a>
            <a className="portfolio-button portfolio-button--secondary" href="#contact">Contact</a>
          </div>
          <Eyebrow>Expertise</Eyebrow>
          <ul className="expertise">
            {expertise.map(([title, description, icon]) => (
              <li key={title}>
                {icon ? <Icon file={icon} className="expertise__icon" /> : (
                  <span className="connected-car" aria-hidden="true">
                    {['group', 'group1', 'group2', 'group3', 'group4'].map((part) => (
                      <Icon key={part} file={`hero-${part}.svg`} />
                    ))}
                  </span>
                )}
                <strong>{title}</strong>
                <small>{description}</small>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__art">
          <img src={artwork('hero-crisp-blue-car-cockpit-hud1.png')} alt="Digital cockpit concept with a head-up display, dashboard screens, and steering wheel." fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work section" id="work" aria-labelledby="work-heading">
      <div className="site-inner">
        <Eyebrow>My Work</Eyebrow>
        <h2 id="work-heading">Selected <em>Work</em></h2>
        <p className="section-intro">A curated selection of automotive UX and HMI projects, spanning digital cockpits, connected mobility and shared vehicles.</p>
        <div className="project-list">
          {selectedWorkProjects.map((project) => (
            <ProjectCard key={project.caseStudyUrl} {...project} headingAs="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills section" id="skills" aria-labelledby="skills-heading">
      <div className="site-inner">
        <div className="section-split">
          <div>
            <Eyebrow>Hi, I’m Subash</Eyebrow>
            <h2 id="skills-heading">My <em>Skills</em></h2>
            <p className="section-intro">A focused blend of domain expertise, UX design skills, and design systems &amp; tools to create intuitive, scalable mobility experiences.</p>
          </div>
          <img className="section-art" src={artwork('skills-futuristic-automotive-ux-skills-dashboard3.png')} alt="" />
        </div>
        <div className="skill-groups">
          {skillGroups.map(({ title, description, icon, items }) => (
            <section className="skill-group" key={title}>
              <div className="skill-group__heading">
                <span className="icon-tile"><Icon file={icon} /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </div>
              <ul>
                {items.map(([label, file]) => (
                  <li key={label}><Icon file={file} />{label}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    const dates = Array.from(timeline.querySelectorAll('.timeline__date'));
    const firstMarker = dates[0].querySelector('img');
    const lastMarker = dates.at(-1).querySelector('img');

    function alignConnector() {
      const bounds = timeline.getBoundingClientRect();
      const first = firstMarker.getBoundingClientRect();
      const last = lastMarker.getBoundingClientRect();
      const start = first.top + first.height / 2;
      timeline.style.setProperty('--connector-x', `${first.left + first.width / 2 - bounds.left}px`);
      timeline.style.setProperty('--connector-y', `${start - bounds.top}px`);
      timeline.style.setProperty('--connector-height', `${last.top + last.height / 2 - start}px`);
    }

    alignConnector();
    const observer = new ResizeObserver(alignConnector);
    observer.observe(timeline);
    dates.forEach((date) => observer.observe(date));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="site-inner">
        <div className="section-split">
          <div>
            <Eyebrow>About Me</Eyebrow>
            <h2 id="about-heading">About Me</h2>
            <p className="section-intro">Senior UX Designer focused on automotive HMI, connected mobility and design systems. I design intuitive, safe and cohesive experiences for modern vehicles.</p>
            <dl className="profile-stats">
              {[
                ['8+ Years', 'UX Design Experience'],
                ['AI-Driven', 'HMI Projects'],
                ['Focus Areas', 'Automotive HMI · Design Systems · Product UX'],
              ].map(([title, detail]) => (
                <div key={title}>
                  <Icon file="about-frame1000002718.svg" />
                  <dt>{title}</dt><dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img className="section-art" src={artwork('about-modern-automotive-tech-portrait-banner1.png')} alt="Portrait of Subash beside automotive interface illustrations." />
        </div>
        <div className="timeline-heading">
          <h3>Career Timeline / Experience History</h3>
          <p>A Diverse Journey. A Stronger Perspective.</p>
        </div>
        <ol className="timeline" ref={timelineRef}>
          {careerRoles.map(({ date, title, company, logo, details }) => (
            <li key={company}>
              <div className="timeline__date">
                <span>{date}</span>
                <Icon file="about-marker-column.svg" />
              </div>
              <div className="timeline__card">
                <div className="timeline__logo">
                  <Icon file={logo} />
                  {company === 'Pixcy' && <small>PIXCY</small>}
                </div>
                <div>
                  <h4>{title}</h4>
                  <p className="timeline__company">{company}</p>
                  <ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ContactField({ name, label, placeholder, icon, type = 'text' }) {
  return (
    <label className="contact-field">
      {label}
      <span className={type === 'textarea' ? 'contact-field__control contact-field__control--message' : 'contact-field__control'}>
        <Icon file={icon} />
        {type === 'textarea' ? (
          <textarea name={name} placeholder={placeholder} rows={5} />
        ) : (
          <input name={name} placeholder={placeholder} type={type} autoComplete={name === 'subject' ? undefined : name} />
        )}
      </span>
    </label>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <Icon file="contact-contact-editable-asymmetric-curved-highway-artwork.svg" className="contact__art" />
      <Icon file="contact-vector.svg" className="contact__accent" />
      <div className="site-inner">
        <div className="contact__layout">
          <div>
            <Eyebrow>Get in Touch</Eyebrow>
            <h2 id="contact-heading">Let’s <em>Connect</em></h2>
            <p className="section-intro">I'd love to discuss automotive UX, HMI, design systems, or opportunities to work together.</p>
            <ul className="contact-methods">
              {contactMethods.map(([title, detail, icon, href]) => {
                const Card = href ? 'a' : 'div';
                const isExternal = href?.startsWith('https://');
                return (
                  <li key={title}>
                    <Card className="contact-method" href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>
                      <span className="icon-tile"><Icon file={icon} /></span>
                      <span><strong>{title}</strong><small>{detail}</small></span>
                      {href && <Icon file="arrow-right.svg" className="contact-method__arrow" />}
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
          <form className="contact-form" aria-labelledby="message-heading" onSubmit={(event) => event.preventDefault()}>
            <h3 id="message-heading">Send a Message</h3>
            <ContactField name="name" label="Name" placeholder="Your Name" icon="contact-user.svg" />
            <ContactField name="email" label="Email" placeholder="Your Email" icon="contact-mail.svg" type="email" />
            <ContactField name="subject" label="Subject" placeholder="Subject (e.g., Opportunity, Collaboration)" icon="contact-align-left.svg" />
            <ContactField name="message" label="Message" placeholder="Your Message" icon="contact-message-text.svg" type="textarea" />
            <button className="portfolio-button" type="submit" disabled>Send Message <Icon file="contact-icon.svg" /></button>
            <p className="contact-form__status">Message delivery has not been configured.</p>
          </form>
        </div>
        <footer className="site-footer">© 2026 Portfolio</footer>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}
