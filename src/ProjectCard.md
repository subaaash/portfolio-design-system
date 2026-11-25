# Project Card

Use `ProjectCard` for a linked portfolio project with artwork, a title, a description, and optional category tags. The website preview renders `selectedWorkProjects` in Figma order, and Storybook uses the first project from that same data.

```jsx
import { ProjectCard } from './src/ProjectCard.jsx';
import { safetyFirstAdaptiveCockpit } from './src/projects.js';

<ProjectCard {...safetyFirstAdaptiveCockpit} />;
```

Provide `title`, `description`, `artwork`, and `caseStudyUrl`. Pass a list of strings for `tags` and describe informative artwork with `artworkAlt`. Use `headingAs` to match the parent page's heading hierarchy. The default is `h2`.

The entire card is one link. Tab focuses it, Enter opens the case study in a new tab, and the accessible name announces the destination and new-tab behavior. The arrow is decorative. The artwork stacks above the text when the card container is under 850px wide, and tags wrap as space decreases. The Narrow story demonstrates the stacked layout.

The original artwork comes from the first card's `Project Thumbnail / Artwork → Artwork` layer in Selected Work. The master card supplies the styling and the Selected Work instance supplies the content and link.

## Local development

Use Node 20.19 or newer and run `npm ci` from the repository root.

| Command | Result |
| --- | --- |
| `npm run dev` | Website preview at http://localhost:5173 |
| `npm run storybook` | Storybook at http://localhost:6006 |
| `npm run tokens:check` | Validate aliases without writing files |
| `npm run build` | Website build in `dist/` |
| `npm run preview` | Serve the website build at http://localhost:4173 |
| `npm run build-storybook` | Storybook build in `storybook-static/` |

The preview and build scripts regenerate `src/generated/tokens.css` from `Portfolio Tokens/Default.json`. Numeric tokens are unitless in CSS so components can apply the appropriate unit. The generator also exposes valid custom-property names declared in the tokens' Figma Web syntax.
