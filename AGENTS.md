# Repository Guidelines

## Project Structure & Module Organization

- Stack: Next.js Pages Router, React, TypeScript, Mantine, and Sass modules.
- Keep routes and API handlers in `src/pages/`; place page implementations in `src/features/`.
- Follow feature layouts such as `About/pages/`, `About/templates/`, and `About/__constants__/`. Keep portfolio content in feature constants.
- Put reusable UI in `src/shared/components/` and global styles in `src/shared/styles/`.
- Keep domain models, repository contracts, and use cases in `src/core/domains/`; implementations belong in `src/core/infrastructures/`.
- Store tests in `__test__/`, static images and documents in `public/`, and database definitions in `prisma/schema.prisma`.

## Build, Test, and Development Commands

Use Node.js 24 and pnpm 10.33.2, as declared in `package.json`.

| Command                                            | Purpose                                            |
| -------------------------------------------------- | -------------------------------------------------- |
| `pnpm install`                                     | Install dependencies using the committed lockfile. |
| `pnpm dev`                                         | Start development with Turbopack.                  |
| `pnpm build`                                       | Build the production application.                  |
| `pnpm start`                                       | Serve the production build.                        |
| `pnpm test --runInBand`                            | Run Jest and collect coverage.                     |
| `pnpm test --runInBand __test__/date.util.spec.ts` | Run a focused test file.                           |
| `pnpm exec prettier path/to/file --write`          | Format only edited files.                          |
| `pnpm generate:db`                                 | Regenerate the Prisma client.                      |

The existing `pnpm lint` script invokes `next lint`; verify compatibility with the installed Next.js version before relying on it.

## Coding Style & Naming Conventions

- Use TypeScript and the `@/` alias for imports from `src/`.
- Follow `.prettierrc`: two-space indentation, single quotes, semicolons, and trailing commas.
- Preserve naming patterns: `About.page.tsx`, `About.template.tsx`, `About.template.module.scss`, and `date.util.ts`.
- Keep routes thin; reuse shared layout components.

## Testing Guidelines

- Use Jest, React Testing Library, and jest-dom with the configured jsdom environment.
- Name tests `*.spec.ts` or `*.spec.tsx`; cover changed behavior and regression cases.
- Coverage uses V8 and writes to `coverage/`; no minimum threshold is configured.
- For visual changes, check affected routes at desktop and mobile widths and include screenshots.

## Commit & Pull Request Guidelines

- Follow existing Conventional Commit prefixes: `feat:`, `fix:`, and `refactor:` with concise descriptions.
- Describe the change, affected routes, and validation in pull requests; link related issues when applicable.
- Include UI screenshots and disclose failed or skipped checks.

## Security & Configuration

- Use `.env.example` to identify configuration keys; keep credentials and local environment files out of commits.
- Review database changes before running migration or push scripts; `migrate-reset:db` resets database data.
