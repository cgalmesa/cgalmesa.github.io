# Carmen's Website

This is a static Next.js site deployed to GitHub Pages at:

https://cgalmesa.github.io/

## Edit Content

Most updates should happen in `src/content/`.

- Start with `src/content/RULES.md`.
- Use `src/content/GUIDES.md` for copy/paste examples.
- Put images in `public/images/...`.

## Test Locally

```bash
npm install
npm run build
```

## Deploy

Push changes to `main`. GitHub Actions builds the static site and deploys the generated `out/` folder to GitHub Pages automatically.

If GitHub asks for a Pages source, use:

Repository Settings -> Pages -> Source -> GitHub Actions
