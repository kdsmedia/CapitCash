# Claw Machine – Prize Catcher

A foundation for a Claw Machine arcade game (described in `README.md`). Currently a TypeScript monorepo with an Express API server and a mockup sandbox for UI prototyping.

## Run & Operate

- **API Server**: `pnpm --filter @workspace/api-server run dev` (port assigned via `PORT` env var)
- **Mockup Sandbox**: `pnpm --filter @workspace/mockup-sandbox run dev`
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `DATABASE_URL` is runtime-managed by Replit — no manual setup needed

## Stack

- pnpm workspaces, Node.js, TypeScript 5.9
- API: Express 5 (`artifacts/api-server`)
- DB: PostgreSQL + Drizzle ORM (`lib/db`)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API spec & codegen: Orval (`lib/api-spec`, `lib/api-zod`, `lib/api-client-react`)
- Build: esbuild (CJS bundle)
- UI prototyping: Vite mockup sandbox (`artifacts/mockup-sandbox`)

## Where things live

- `artifacts/api-server/src/` — Express app, routes, middleware
- `artifacts/api-server/src/routes/health.ts` — health check route
- `lib/db/src/schema/` — Drizzle table definitions (source of truth for DB schema)
- `lib/api-spec/` — OpenAPI spec (source of truth for API contracts)
- `lib/api-zod/` — generated Zod schemas from spec
- `lib/api-client-react/` — generated React Query hooks from spec
- `artifacts/mockup-sandbox/` — isolated component preview server

## Architecture decisions

- Schema-first API: OpenAPI spec drives Zod validation and React Query client via Orval codegen
- Drizzle ORM with `drizzle-kit push` for dev schema changes; production schema managed by Replit Publish flow
- esbuild bundles the API server for faster cold starts
- Mockup sandbox is isolated from the main app — components are previewed via dedicated Vite server

## Product

Claw Machine – Prize Catcher: an arcade-style claw machine game. Full game design spec is in `README.md`.

## User preferences

_Populate as you build._

## Gotchas

- `DATABASE_URL` and other `PG*` env vars are runtime-managed by Replit — never set them manually
- Run `pnpm --filter @workspace/api-spec run codegen` after any OpenAPI spec change before editing dependent packages
- `pnpm run typecheck:libs` must pass before `pnpm -r` typechecks (libs are compiled TypeScript project references)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
