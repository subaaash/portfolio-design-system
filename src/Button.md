# Button Component Specification

**Status:** Implemented as `src/Button.jsx` with token-backed styles in `src/Button.css` and stories in `src/Button.stories.jsx`. The existing Figma/token specification remains the source of truth.

## Purpose

Use buttons for actions that change the current page or state, submit information, or start a task. Use a link for navigation to another page or destination.

The approved token source is `Portfolio Tokens/Default.json`. The measurements below resolve the existing button size tokens; keep the token references as the source of truth.

## Variants

| Variant | Use | Token group |
| --- | --- | --- |
| Primary | The main action in a section or form. Use sparingly so the next step is clear. | `component.button.primary` |
| Secondary | A supporting action that should remain available without the visual emphasis of the primary action. | `component.button.secondary` |

Use one primary action per local decision area where practical. Do not create additional variants until a real use case and token set are proposed.

## Sizes

All dimensions are CSS pixels. Button height is a fixed target; horizontal padding, vertical padding, label size, and icon size come from the matching size tokens.

| Size | Height | Horizontal padding | Vertical padding | Label size | Icon size |
| --- | ---: | ---: | ---: | ---: | ---: |
| Small | 40 px | 16 px | 8 px | 14 px | 16 px |
| Medium — default | 48 px | 24 px | 12 px | 16 px | 20 px |
| Large | 56 px | 32 px | 16 px | 18 px | 24 px |

Token references:

- Small: `component.button.size.small.*`
- Medium: `component.button.size.medium.*`
- Large: `component.button.size.large.*`
- The shared icon gap is `component.button.primary.icon-gap` (8 px).
- The shared control radius resolves through `semantic.radius.control` to `primitive.radius.14` (14 px).

Medium is the default for general actions. Use small only when space is constrained and the action remains easy to target. Use large for a prominent action or where the layout needs a larger control. On narrow layouts, allow the button to fill its container when that improves usability; do not stretch every button by default.

## Visual states

| State | Primary | Secondary |
| --- | --- | --- |
| Default | `semantic.color.action.primary` background; `semantic.color.text.on-primary` label | `semantic.color.surface.default` background; `semantic.color.text.primary` label; `semantic.color.border.default` border |
| Hover | `semantic.color.action.primary-hover` background | `semantic.color.surface.subtle` background; brand label; focus border |
| Pressed | `primitive.color.blue.700` background | `primitive.color.neutral.100` background; brand label; strong border |
| Disabled | `primitive.color.neutral.100` background; `primitive.color.neutral.500` label | `primitive.color.neutral.50` background; `primitive.color.neutral.500` label; default border |
| Keyboard focus | Must have a clearly visible focus indicator and preserve sufficient contrast. The exact button focus treatment is not separately defined in the current button tokens. | Must have a clearly visible focus indicator and preserve sufficient contrast. The exact button focus treatment is not separately defined in the current button tokens. |

Use the token values rather than entering raw colors in component CSS. Verify text and focus contrast when implementing the component; the token names alone do not confirm contrast compliance.

## Content and icon rules

- Use a short, action-led label such as “View project” or “Send message.”
- Keep the label visible; do not use an icon alone unless the control has an accessible name and the icon-only pattern is separately specified.
- An optional leading or trailing icon uses the matching size token and the 8 px icon gap.
- Keep icon and label vertically centered. Do not let the icon replace the accessible name.

## Interaction and accessibility requirements

- Use a native `<button>` for actions and set `type="button"` unless the button submits a form.
- Support pointer, keyboard, and assistive technology use. Native buttons activate with Enter and Space.
- Keep a visible keyboard focus indicator; do not remove the browser outline without an accessible replacement.
- A disabled button must use the native `disabled` attribute when it is truly unavailable. If the action should remain discoverable to keyboard users, use an appropriate unavailable pattern and explain the reason.
- Give the action an accessible name that describes its purpose. Decorative icons should be hidden from assistive technology.
- Do not communicate state through color alone.

## Storybook documentation required when implemented

Create stories for:

- Primary and secondary variants
- Small, medium, and large sizes
- Default, hover, pressed, focus-visible, and disabled states
- An icon with a label
- A narrow or full-width layout when supported

Document the component API, when to use each variant, keyboard behavior, and accessibility notes. Keep the same React component as the implementation used by the website and Storybook.

## Implementation note

Before building the component, reconcile the shared primary token paddings (`semantic.space.control.padding-x/y`) with the size-specific padding tokens above. The size-specific values define this specification’s small, medium, and large sizing; avoid applying conflicting padding values simultaneously. Update this document and the Storybook stories if the approved Figma tokens change.


## React API

```jsx
import { Button } from './Button.jsx';

<Button variant="primary" size="medium" type="button">
  View work
</Button>

<Button variant="secondary" size="small" icon={<ArrowIcon />} iconPosition="leading">
  Go back
</Button>
```

- `variant`: `primary` or `secondary` (default: `primary`)
- `size`: `small`, `medium`, or `large` (default: `medium`)
- `type`: native button type (default: `button`)
- `disabled`: uses the native disabled state
- `icon`: optional decorative icon; the text label remains visible
- `iconPosition`: `leading` or `trailing` (default: `trailing`)
- `fullWidth`: fills the available inline space when true
- Standard button attributes such as `aria-label`, `onClick`, and `name` are forwarded to the native button.

## Storybook coverage

The stories cover primary and secondary variants, all three sizes, native disabled states, leading and trailing icons, full-width layout, and a size/variant matrix. Hover and pressed styles are exercised through pointer interaction; keyboard focus is shown with the visible `:focus-visible` outline. The button uses semantic button behavior and does not replace navigational links.
