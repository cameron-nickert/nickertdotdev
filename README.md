# Personal Portfolio

Cameron Nickert's comic-book portfolio and HTML résumé, built with Next.js 15, React, and TypeScript.

See [AGENTS.md](./AGENTS.md) for the file map, editing conventions, verification steps, and Cloud Run deployment command.

## Local setup

```bash
npm ci
```

```bash
npm run dev -- -p 3100
```

Open `http://localhost:3100`.

## Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build for production.
- `PORT=3100 npm start` - Run a production build locally (after `npm run build`).
- `npm run lint` - Run ESLint.

## Project structure

- `app/` - App Router routes, layouts, and styles.
- `components/` - Shared UI components.
- `content/` - Structured profile and project content.
- `lib/` - Utilities and data access.
- `public/assets/` and `public/images/` - Artwork and static media.
