# Sun VannaRith — Developer Portfolio

A personal portfolio built with React and Vite. It includes an introduction, skills, selected projects, and contact links.

## Project layout

```text
public/                 Static files copied directly into the site
src/
  assets/               Images and assets imported by components
  components/
    layout/             Shared page layout (navigation and footer)
    ui/                 Reusable interface components
  data/                 Portfolio project and skills content
  sections/             Main page sections
  styles/               Global styles and design variables
  App.jsx               Page composition
  main.jsx              React entry point
.github/workflows/      GitHub Pages deployment workflow
```

## Run locally

Requires Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`, which is excluded from Git.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to `main`. In the repository on GitHub, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**. After the workflow completes, GitHub Pages will show the published site URL there.

The workflow sets Vite's base path from the repository name, so the site and its public assets work at the GitHub Pages project URL.
