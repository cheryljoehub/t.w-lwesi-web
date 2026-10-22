# T.W. Lewis Center Website

Public, static website for the T.W. Lewis Center and Studio 42. It is built with Vite and React and has no login or backend service.

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
npm run dev
```

Vite prints the local URL. To create a production build:

```bash
npm run build
npm run preview
```

The production website is written to `dist/`.

The Studio 42 booking form opens the visitor's email app with the form details addressed to `studio42@gcu.edu`. It does not submit data to a server.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the site whenever a commit is pushed to `main`.

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push a commit to `main` and wait for the **Deploy to GitHub Pages** workflow to complete.
4. GitHub shows the published URL under **Settings → Pages**.

The build uses hash-based client-side routing so pages work when hosted from a GitHub project URL. The workflow checks out the Studio 42 commercial from Git LFS and includes it in the deployment.

This is a static site: it has no user accounts, database, or server-side form handling.
