# Linlincai Personal Site Starter

Astro starter for a bilingual personal portfolio site.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Replace content

- Edit personal links in `src/data/site.ts`
- Edit project content in `src/data/projects.ts`
- Replace resume PDFs in `public/resume/`
- Replace project images in `public/images/projects/`

## GitHub Pages

If your repo is `yourusername.github.io`, keep `site` in `astro.config.mjs` as your GitHub Pages domain.

If your repo is a normal repo such as `personal-site`, add:

```js
base: '/personal-site'
```
