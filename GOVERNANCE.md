# Design System Governance

## Purpose

This document explains how this portfolio design system is proposed, reviewed, changed, documented, and released. The goal is to keep the Figma foundation, design tokens, React components, and Storybook documentation consistent and accessible.

## Scope

Governance applies to:

- Design tokens and their source files
- Shared React components and their public APIs
- Component styles, states, and responsive behavior
- Storybook stories and usage documentation
- Accessibility requirements and release notes

It does not define governance for unrelated portfolio content or product projects.

## Decision ownership

- **Design system owner — Subash:** owns priorities and final design decisions, approves breaking changes, and decides when a change is ready to release.
- **Contributors:** may propose changes through a GitHub issue or pull request. They document the problem, intended outcome, and affected tokens, components, and consumers.
- **Reviewers:** review design, implementation, accessibility, and documentation when another qualified reviewer is available. For a solo portfolio project, the owner may perform a documented self-review; this must not be presented as independent approval.

## Source of truth

- Use the approved token source in `Portfolio Tokens/` as the source of truth for design values.
- Do not introduce a duplicate token source or edit generated CSS by hand.
- Keep Figma, token definitions, React implementation, and Storybook examples aligned. If they disagree, record the mismatch in the change and resolve it before release.
- Reuse existing tokens for color, spacing, typography, radius, and elevation. Propose a new token only when an existing token cannot represent the intended use.

## Change workflow

1. **Propose:** Open a GitHub issue for a substantial change. State the problem, user or developer benefit, proposed behavior, and affected tokens or components. Small, self-contained fixes may be proposed directly in a pull request.
2. **Assess:** Check existing tokens, components, stories, usage guidance, responsive behavior, accessibility, and likely consumers for impact.
3. **Implement:** Make the smallest coherent change on a branch. Follow established patterns and avoid unrelated dependencies or features.
4. **Document:** Update Storybook stories and usage guidance whenever component behavior, API, states, or intended use changes. Update token documentation when token meaning or usage changes.
5. **Review:** Submit a pull request with the reason, summary, impact, screenshots or examples when useful, accessibility notes, and checks performed. Resolve review feedback before release.
6. **Release:** After owner approval, merge the change and record user-visible design-system changes in `CHANGELOG.md`.

## Review checklist

Before approval, confirm that:

- The change solves the stated problem and fits the design system.
- Existing tokens and component patterns are reused where appropriate.
- Component states, responsive behavior, and error or disabled states are considered.
- Semantic HTML, accessible names, keyboard operation, visible focus, and contrast are addressed where relevant.
- Storybook and usage documentation reflect the shipped behavior.
- Automated checks relevant to the change have been run, and their results are reported.
- The pull request identifies any breaking change, migration need, or known limitation.

A reviewer should request changes when a material accessibility issue, unexplained token duplication, missing required documentation, or unresolved functional regression remains.

## Versioning and compatibility

Use semantic versioning when this design system is distributed as a versioned package:

- **Major:** removes or changes a public API, token meaning, or behavior in a way that can break a consumer.
- **Minor:** adds a backward-compatible component, token, variant, or capability.
- **Patch:** makes a backward-compatible fix or documentation correction.

If the project is not publishing versioned releases, use these categories in the changelog as guidance; do not imply a package release occurred.

For breaking changes, describe the migration path and mark deprecated APIs or tokens before removal when practical. Avoid silently renaming or deleting tokens that consumers may already use.

## Urgent fixes and exceptions

For a time-critical fix, the owner may approve an expedited review. Record the reason, affected files, validation performed, and any follow-up work in the pull request. Complete missing documentation or follow-up checks as soon as practical. Urgency does not waive safety or accessibility requirements.

## Governance updates

Update this document through the same pull request review process. The owner reviews governance changes and records material policy changes in the changelog.
