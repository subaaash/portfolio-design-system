import { useId } from 'react';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-700.css';
import './generated/tokens.css';
import './ProjectCard.css';
import arrow from './assets/arrow-right.svg';

export function ProjectCard({
  title, description, tags = [], artwork, artworkAlt = '', caseStudyUrl, headingAs: Heading = 'h2',
}) {
  const titleId = useId();
  const linkContextId = useId();

  return (
    <article className="project-card" aria-labelledby={titleId}>
      <a
        className="project-card__link"
        href={caseStudyUrl}
        target="_blank"
        rel="noopener"
        aria-labelledby={`${titleId} ${linkContextId}`}
      >
        <img className="project-card__artwork" src={artwork} alt={artworkAlt} />
        <div className="project-card__details">
          <div className="project-card__copy">
            <Heading className="project-card__title" id={titleId}>{title}</Heading>
            <p className="project-card__description">{description}</p>
            {tags.length > 0 && (
              <ul className="project-card__tags" aria-label="Project categories" role="list">
                {tags.map((tag, index) => <li key={`${tag}-${index}`}>{tag}</li>)}
              </ul>
            )}
          </div>
          <span className="project-card__arrow">
            <img src={arrow} alt="" width="24" height="24" />
          </span>
        </div>
        <span id={linkContextId} hidden>case study (opens in a new tab)</span>
      </a>
    </article>
  );
}
