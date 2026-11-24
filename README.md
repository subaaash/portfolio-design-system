# Portfolio Design System — Storybook Starter

A standalone React + Storybook package based on the component inventory in the supplied Figma file. It gives you a working library to review, adjust, and merge into your portfolio project.

The Storybook manager uses a custom light brand theme: Subash X24 identity, Figma primary blue, navy cover styling, and rounded controls. Its sidebar groups stories under **Start Here**, **Components**, and **Patterns**.

## Start Storybook

1. Install Node.js 18 or newer.
2. Extract this ZIP and open a terminal in `portfolio-storybook-starter`.
3. Run `npm install`.
4. Run `npm run storybook`.
5. Open `http://localhost:6006` in your browser.

`npm run build-storybook` creates a static Storybook build.

## What is included

- **Atoms:** Button, Icon, Icon Button, Tag / Chip, Featured Badge, Filter Chip, Project Category Tag, Text Field, Textarea, Divider, Section Eyebrow, Tooltip, Avatar, form message.
- **Molecules:** Navigation Item / Bar, Mobile Menu Item, Project Thumbnail / Card, Skill Item, Core Expertise Card, Profile Info Card, Contact Info Card, Timeline Item, Role / Education Card, Footer Link, Text Link, Social Icon Link, Section Heading.
- **Organisms:** Header / Navigation, Home Hero, Work / Projects Grid, Skills Section, About / Experience Section, Contact / Form Section, Portfolio Footer.
- **Patterns:** Header & Navigation; Home Introduction; Project Discovery; Skills Exploration; About & Experience; Contact & Inquiry; Footer.
- **Tokens:** primitive, semantic, and component CSS variables in `src/tokens.css`.

## Figma Button values used

The Button values below were read from the Figma component variables: primary `#0869f9`, hover `#0759d4`, pressed `#064bb2`, radius `14px`, icon gap `8px`. Small is 40px high with 16px horizontal and 8px vertical padding and 14px text; Medium is 48px / 24px / 12px / 16px; Large is 56px / 32px / 16px / 18px. Secondary and disabled state colors are also in `src/tokens.css`.

The screenshots do not expose every non-Button variable value. Those remaining colors and spacing values are starter defaults with semantic names; replace them with the exact Figma variable values as you connect the rest of the library.

## Merge into your existing portfolio

- Copy `src/tokens.css` and `src/components.css` into your design-system source, then import them in your Storybook preview.
- Copy `src/components.jsx` or split its exports into your preferred component files.
- Copy the two story files into `.storybook`'s configured stories directory.
- If Storybook is already installed, keep your existing package versions and merge only the story configuration and components you need.

This is a separate starter project because the existing portfolio repository was not present in the shared workspace. It does not overwrite your current source files.
