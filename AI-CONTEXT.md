# Project Context & Developer Guide

This document is a comprehensive guide to the `artsgoz-monorepo` workspace, compiled specifically for AI coding assistants to quickly onboard, understand architectural decisions, and follow established project conventions.

---

## 🚀 Workspace Overview

This is an **Nx-managed monorepo** using **pnpm workspaces** to orchestrate build targets, dependencies, and type checking.

### Projects

The monorepo contains the following workspace projects:
1. **`@org/frontend`** (`apps/frontend`): The main public-facing client application.
2. **`@org/backoffice`** (`apps/backoffice`): The admin panel / backoffice application.
3. **`@org/design-system`** (`packages/design-system`): A shared custom UI component library consumed by both applications.

---

## 🛠️ Tech Stack & Real Specifications

> [!WARNING]
> The root `README.md` file contains some outdated placeholder documentation (e.g., claiming the apps use Next.js 16 and Tailwind v3). Below is the **correct and active** tech stack:

- **Framework**: Vite 8 + React 19 (Single Page Applications, not Next.js).
- **Routing**: `react-router` version 7 (using `createBrowserRouter` & `RouterProvider`).
- **Language**: TypeScript 6.0+ with modern ESM configuration.
- **Styling**: **Tailwind CSS v4** (imported via `@import 'tailwindcss';` in `styles.css` using the new Tailwind v4 syntax).
- **Monorepo Engine**: Nx 22.7.
- **Package Manager**: pnpm.

---

## ⚠️ Critical Development Conventions (Must Follow)

### 1. ESM Imports REQUIRE `.js` Extensions
Because of the ESM configuration in this workspace, all imports of relative files (TS/JSX/JS/TSX) in the source directories must specify their compile-time extensions (typically **`.js`**).
* **Correct**: `import { ClubCard } from './ClubCard.js';`
* **Incorrect**: `import { ClubCard } from './ClubCard';`

### 2. Feature-Based Directory Structure
The application code under `apps/frontend/src/features/` is strictly modular. Each feature should be self-contained:
```
features/my-feature/
├── components/           # UI components specific to this feature
├── constants.ts          # Feature-specific mock data, configurations
├── types.ts              # TypeScript interfaces/types for this feature
└── index.ts              # Clean public API exporting only what's needed
```
* **Rule**: Other parts of the application (e.g., routing pages or layouts) should only import from the feature's root `index.ts`. Never deep import (e.g. do not import from `features/my-feature/components/MyComponent.js`).

### 3. Using the Shared Design System
Always check `packages/design-system/src/lib/components/` first before building new UI components. Import them from `@org/design-system`:
```tsx
import { Button, SectionHeading, Pagination, SearchInput } from '@org/design-system';
```
Available components include:
* `Button`
* `CULoginButton` (styled specifically for Chulalongkorn University login theme)
* `Chip`
* `Icon`
* `IconButton`
* `Pagination`
* `SearchInput`
* `SectionHeading`

---

## ⚙️ Development Commands

Always run these commands from the root directory:

* **Start all dev servers**: `pnpm dev`
* **Start frontend dev server**: `pnpm dev:frontend`
* **Start backoffice dev server**: `pnpm dev:backoffice`
* **Run type-checking**: `pnpm typecheck`
* **Build all projects**: `pnpm build`
* **Run tests**: `pnpm test`
* **Lint codebase**: `pnpm lint` / Auto-fix: `pnpm lint:fix`

---

## 📝 Commit Conventions

Commits are strictly validated using `commitlint` and `husky`. Use the format:
`<type>(<scope>): <description>`

* **Allowed Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
* **Examples**:
  - `feat(frontend): add club descriptions to cards`
  - `fix(design-system): prevent button text clipping`
