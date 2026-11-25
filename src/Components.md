# Portfolio Component Catalog

**Status:** Inventory of the component token groups in `Portfolio Tokens/Default.json`, plus the reusable React component and page sections currently present in the repository. Token definitions describe visual properties; they do not by themselves prove that a reusable React component or Storybook story exists.

For the button sizes, variants, states, and implementation requirements, see [Button Component Specification](./Button.md).

## Repository implementation status

The current source tree contains:

- **Reusable React component:** `ProjectCard` in `src/ProjectCard.jsx`, with styles, usage notes, and Storybook stories.
- **Portfolio page sections:** `Header`, `Hero`, `Work`, `Skills`, `About`, and `Contact` in `src/Portfolio.jsx`.
- **Internal helpers:** `Icon`, `Eyebrow`, and `ContactField` in `src/Portfolio.jsx`. The contact-method element is rendered as an anchor when it has a destination and as a div otherwise.
- **Figma token groups:** 24 groups listed below. Most are token definitions, not yet separate reusable React components or Storybook entries.

Do not describe a token-only group as an implemented component. When one is implemented, keep the website and Storybook on the same React component and update its story and usage guidance.

## Interaction and navigation

| Token group | Intended role | Defined token properties |
| --- | --- | --- |
| `button` | Action control. Use the detailed spec in [Button.md](./Button.md). | Primary and secondary visual states; small, medium, and large size tokens; padding, label, icon, radius, and icon gap. |
| `icon-button` | Compact action represented by an icon. | Background only. Label, size, shape, focus, hover, pressed, and disabled treatments are not fully specified by this token group and need to be agreed before implementation. |
| `navigation` | Navigation container or brand area. | Wordmark. Navigation layout, responsive behavior, and interaction are not specified by this group. |
| `nav-item` | A single navigation item. | Default, hover, and active label colors; active indicator. |
| `text-link` | Inline link in page content. | Default, hover, and focus label colors. |
| `footer-link` | Link in the footer. | Default, hover, and focus label colors. |

Navigation links must remain semantic links when they change location. The active item should be identified in a way that is not color-only.

## Cards and content

| Token group | Intended role | Defined token properties |
| --- | --- | --- |
| `project-card` | Card presenting a portfolio project. | Background, border, title, description, and radius. The existing `ProjectCard` implementation and its usage details are documented in `src/ProjectCard.md`. |
| `project-thumbnail` | Artwork surface or thumbnail used in project presentation. | Background, media surface, and radius. |
| `experience-card` | Experience entry with a value or highlight and supporting description. | Background, border, value, description, radius, content gap, and padding. |
| `skill-group-card` | Group of related skills. | Background, title, and description. |
| `skill-item` | Individual skill label and explanation. | Title and description. |
| `domain-expertise-card` | Expertise or capability card. | Title only. Other visual properties are not defined by this group. |
| `skill-chip` | Compact skill or category label. | Background and label. |
| `timeline-item` | Entry in a chronological timeline. | Date and marker. |
| `role-card` | Role or position summary. | Background and title. |
| `contact-method-card` | Contact option such as email or a professional profile. | Background, label, and value. |
| `featured-badge` | Small label marking featured content. | Background only. Label styling, shape, and spacing are not defined by this group. |
| `tooltip` | Short contextual hint. | Background only. Content styling, placement, trigger, dismissal, and timing are not defined by this group. |

For each card pattern, content order, responsive layout, and whether the whole card is interactive should be documented with the eventual component. If a card navigates, use a link; if it performs an action, use a button. Do not make a non-interactive card appear interactive.

## Forms and feedback

| Token group | Intended role | Defined token properties |
| --- | --- | --- |
| `text-field` | Single-line text input. | Default, focus, error, and disabled border, background, and label tokens. |
| `text-area` | Multi-line text input. | Default, focus, error, and disabled border, background, and label tokens. |
| `form-message` | Form-level or field-level error feedback. | Error border only. Message text, icon, placement, and success/help states are not defined by this group. |

Form controls need a visible label, an accessible name, and a programmatically associated error message when invalid. Do not rely on placeholder text as the only label. Keep error meaning available as text, not color alone. These are implementation requirements; verify the exact control behavior and layouts against the approved design.

## Page structure and utilities

| Token group | Intended role | Defined token properties |
| --- | --- | --- |
| `section-eyebrow` | Short section label or eyebrow. | Label and rule. |
| `divider` | Visual separation between content areas. | Color. |
| `footer` | Footer content. | Copyright. |

These groups define only the listed visual tokens. They do not define section spacing, responsive behavior, footer layout, or decorative usage.

## Shared implementation requirements

When converting a token group into a reusable React component:

- Reuse the approved tokens from `Portfolio Tokens/Default.json`; do not copy resolved values into a second source of truth.
- Define the component’s purpose, variants, size options, states, content rules, responsive behavior, API, and accessibility expectations.
- Use semantic HTML and keyboard behavior that matches the control’s purpose.
- Include visible focus, disabled, error, or active feedback where those states apply.
- Document missing token coverage instead of inventing unsupported states or silently hard-coding values.
- Add Storybook stories for meaningful variants and states, and add usage guidance alongside them.
- Keep token source, React implementation, and Storybook documentation aligned. Update the relevant docs when approved tokens or behavior change.

## Token gaps to resolve before implementation

Several token groups cover only part of a component contract. In particular, `icon-button`, `featured-badge`, `tooltip`, `form-message`, `domain-expertise-card`, and some page-structure groups do not define complete sizing, state, content, or interaction rules. Confirm those details in the approved Figma designs before building reusable components. The token catalog should be expanded through the normal design-system review process when needed.
