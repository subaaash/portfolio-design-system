# Portfolio Component Catalog

**Status:** The design token inventory maps to reusable React exports and Storybook previews. Token coverage is still partial for several groups; this implementation uses existing component and primitive tokens, and does not add unapproved visual tokens.

## Implemented reusable components

- `Button` — [specification](./Button.md), implementation and stories in `Button.jsx` and `Button.stories.jsx`.
- `ProjectCard` — [usage guide](./ProjectCard.md), implementation and stories in `ProjectCard.jsx` and `ProjectCard.stories.jsx`.
- The remaining portfolio patterns are exported from `PortfolioComponents.jsx`, styled in `PortfolioComponents.css`, and previewed in `PortfolioComponents.stories.jsx`: `IconButton`, `Navigation`, `NavigationItem`, `TextLink`, `FooterLink`, `ProjectThumbnail`, `ExperienceCard`, `SkillGroupCard`, `SkillItem`, `DomainExpertiseCard`, `SkillChip`, `TimelineItem`, `RoleCard`, `ContactMethodCard`, `FeaturedBadge`, `Tooltip`, `TextField`, `TextArea`, `FormMessage`, `SectionEyebrow`, `Divider`, and `PortfolioFooter`.

The website page sections remain in `Portfolio.jsx`. They are composed from page-specific content and are not all replaced by these reusable patterns.

## Usage and accessibility

Import a pattern from `src/PortfolioComponents.jsx`. Navigation and contact destinations use native links; icon actions use native buttons and require a visible accessible label. Field components render visible labels and expose validation errors through `aria-invalid` and `aria-describedby`. Error messages use an alert role; informational and success messages use a status role. Decorative icons should be hidden from assistive technology.

`Tooltip` renders the tooltip content only. The consumer must connect the trigger to its `id` with `aria-describedby`, show and dismiss it using an accessible interaction, and position it in the approved layout. This component does not invent a trigger or timing model.

## Token coverage and design review

The existing token source remains `Portfolio Tokens/Default.json`; generated CSS in `src/generated/tokens.css` must only be changed through the token build script. The component styles consume existing component tokens and shared primitive tokens.

The source token groups still do not define complete visual contracts for `icon-button`, `featured-badge`, `tooltip`, `form-message`, and `domain-expertise-card`. Some groups define content colors but not dimensions or interaction states. The implementation therefore uses shared primitive tokens for basic geometry and semantic status colors where needed. Those choices make the patterns usable for review, but they do not replace approval of their final Figma appearance, responsive behavior, or interaction details. Extend the approved token source after reviewing these patterns in Figma; do not edit generated CSS directly.

## Storybook

Open `Components/Portfolio` to review the new patterns. Each token group has a focused story. Use the stories to compare the component output with the Figma source, then record any approved adjustments in the token source and component docs.
