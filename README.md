# Webpack + TypeScript + SCSS Starter

A ready-to-run student project. Requires Node.js 20 or newer and npm.

## Getting started

1. Open a terminal in this folder.
2. Run `npm install` once to download the project dependencies.
3. Run `npm run start` to start the development server and open your browser at `http://localhost:3000`.
4. Edit the files in `src/` and watch the page update automatically.
5. Press `Ctrl+C` in the terminal to stop the server.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run start` | Start the development server with hot style updates and live reload. |
| `npm run build` | Generate production-ready files in `build/`. |
| `npm run typecheck` | Check TypeScript for errors without generating files. |

## Folder guide

```text
webpack-typescript-scss-starter/
├── build/                   # Created by npm run build; don't edit
├── node_modules/            # Created by npm install; don't edit
├── src/                     # Your work goes here
│   ├── styles/
│   │   └── index.scss       # Main SCSS stylesheet
│   ├── index.ts             # Main TypeScript entry (imports SCSS)
│   └── index.html           # HTML page template
├── package.json             # Scripts and npm dependencies
├── tsconfig.json            # TypeScript settings
├── webpack.config.cjs       # Webpack and dev-server settings
├── .gitignore
└── README.md
```

Webpack inserts the compiled script (and production stylesheet) into your HTML automatically; **do not add a manual script tag pointing at `index.ts`**. Keep the SCSS import near the top of `src/index.ts`.

During development, Webpack serves assets from memory; use `npm run build` whenever you need physical output files in `build/`.
