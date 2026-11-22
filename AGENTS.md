# Agent Instructions

## Project context
This repository contains the design system for Subash's existing portfolio website. The target is a responsive web experience implemented with React, with Figma as the design workspace.

## Working rules
- Read the README and inspect the existing files before making changes.
- Reuse existing design tokens. Do not introduce raw color, spacing, typography, radius, or elevation values when an approved token exists.
- Follow the established component and file patterns. Do not create duplicate components or token sources.
- Keep the approved token source as the source of truth. Treat generated CSS or other build output as generated; do not edit it by hand.
- When changing a component, update its Storybook stories and usage documentation alongside the implementation.
- Include accessibility expectations and keyboard behavior in component work. Use semantic HTML and accessible names.
- Keep changes within the portfolio design-system scope. Do not add unrelated features or dependencies.
- Before finishing, summarize what changed, why, and any limitations. Show the complete diff and report checks run. Do not commit or merge changes unless Subash asks.

## Change workflow
1. Describe the proposed change and its reason in a GitHub Issue or pull request.
2. Check existing foundations, tokens, components, stories, and documentation for impact.
3. Make the smallest coherent change and update related documentation.
4. Present the diff and relevant check results for Subash's review.
5. Subash owns design decisions and accepts changes before release. Record accepted changes in CHANGELOG.md when they affect the system or its users.
