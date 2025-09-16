# Repository Guidelines

## Project Structure & Module Organization
{% if cookiecutter._use_nextjs == "y" -%}
`pages/` contains route components and API handlers; `_app.tsx` wires providers and `_document.tsx` adjusts the HTML shell. Reusable UI sits in `components/` (`ui/`, `layout/`, feature folders). Shared utilities live in `lib/`, `hooks/`, and `types/`. Global styles stay in `styles/`, assets in `public/`, and tests in `tests/components/`, `tests/e2e/`, and `tests/mocks/`.
{% else -%}
`src/` hosts the Vite entry (`main.tsx`), shell (`App.tsx`), and feature folders. Place screens in `src/pages/`, reusable UI in `src/components/`, and shared logic in `src/hooks/`, `src/utils/`, and `src/types/`. Global styling lives in `src/index.css` and `styles/`. Assets sit in `public/`, while the three `tests/` subfolders cover components, e2e flows, and mocks.
{% endif -%}
Key configs (`tsconfig*.json`, `tailwind.config.js`, `playwright.config.ts`, {% if cookiecutter._use_nextjs == "y" -%}`next.config.js`{% else -%}`vite.config.ts`{% endif -%}) stay at the repository root.

## Build, Test, and Development Commands
Run `npm install` after generating a project (switch to `yarn` or `pnpm` only with matching lockfiles). Core scripts:
- `npm run dev` — launch the development server.
- `npm run build` — create the production bundle.
- `npm run lint` / `npm run lint:fix` — run ESLint, optionally auto-fixing.
- `npm run format` / `npm run format:check` — apply or verify Prettier formatting.
- `npm run type-check` — run strict TypeScript checks.
- `npm run test`, `npm run test:watch`, `npm run test:coverage` — execute Vitest suites.
- `npm run test:e2e`, `npm run test:e2e:headed`, `npm run test:e2e:debug`, `npm run test:e2e:report` — run Playwright scenarios.

## Coding Style & Naming Conventions
Use TypeScript, two-space indentation, and Prettier defaults. Components, layouts, and hooks use PascalCase (`UserMenu.tsx`, `useFeatureFlag.ts`); utilities remain camelCase. Prefer Tailwind utilities with shared tokens in `styles/`. Lint-staged presets exist but Git hooks are optional—run `npx husky install` and add a `pre-commit` hook invoking `lint-staged` if desired.

## Testing Guidelines
Create Vitest + Testing Library specs named `<Subject>.test.tsx` or `<hook>.test.ts`, covering new UI states, reducers, and data paths. Prefer accessible queries. Keep component suites in `tests/components/` and journeys in `tests/e2e/`. When debugging, enable traces (`npm run test:e2e -- --trace on`) and include artefacts in reviews.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat:`, `fix:`, `chore:`). Keep commits focused and run `npm run quality` before pushing. Pull requests should note intent, link issues, show UI changes when relevant, and confirm test coverage. Request review once CI passes and the branch rebases on the default branch.
