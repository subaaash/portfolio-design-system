import { ProjectCard } from './ProjectCard.jsx';
import { safetyFirstAdaptiveCockpit } from './projects.js';

export default {
  title: 'Portfolio/Project Card',
  component: ProjectCard,
  args: safetyFirstAdaptiveCockpit,
};

export const SafetyFirstAdaptiveCockpit = {};

export const Narrow = {
  decorators: [(Story) => (
    <div style={{ maxInlineSize: '390px' }}>
      <Story />
    </div>
  )],
};
