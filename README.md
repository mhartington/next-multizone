# Next.js Multizone Turborepo

This monorepo uses Turborepo to run three Next.js apps as zones:

- `apps/web` -> main app for `prism.io`
- `apps/docs` -> docs zone for `prism.io/docs`
- `apps/blog` -> blog zone for `prism.io/blog`

## How multizones are wired

- `apps/web` rewrites `/docs` and `/docs/*` to the docs app origin.
- `apps/web` rewrites `/blog` and `/blog/*` to the blog app origin.
- `apps/docs` sets `basePath: "/docs"`.
- `apps/blog` sets `basePath: "/blog"`.

In dev, defaults are:

- `web`: `http://localhost:3000`
- `docs`: `http://localhost:3001`
- `blog`: `http://localhost:3002`

You can override zone origins with env vars in `apps/web`:

- `DOCS_ORIGIN`
- `BLOG_ORIGIN`

## Child routes included

- Main app:
  - `/about`
- Docs app:
  - `/docs/getting-started`
  - `/docs/guides/installation`
- Blog app:
  - `/blog/posts/hello-multizone`
  - `/blog/posts/advanced-routing`

## Run locally

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.
