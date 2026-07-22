# Tom Finn — Drone Mapping Portfolio

A clean, fast, accessible static portfolio built to support a Drone Mapping Specialist application at Halter. It showcases orthomosaic mapping projects, professional background, and contact details.

## Tech stack

- [Astro](https://astro.build/) (static site generator)
- Plain HTML, CSS, and vanilla JavaScript
- Leaflet (loaded via CDN) for the project location map
- No backend, no analytics, no unnecessary frameworks

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to preview the site.

## Build for production

```bash
npm run build
```

The static site is generated in the `dist/` directory.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Choose **GitHub Actions** as the source.
4. Use the Astro deploy workflow (see `.github/workflows/deploy.yml` below) or manually upload the `dist/` folder.

### If your repo is a project site

If the site will be served from `https://yourname.github.io/repo-name/`, update `astro.config.mjs`:

```js
export default defineConfig({
  output: 'static',
  site: 'https://yourname.github.io',
  base: '/repo-name',
  // ...
});
```

For a user/org site (`https://yourname.github.io/`), leave `base` unset.

### Example GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## Replace placeholder images

The portfolio ships with SVG placeholders so you can verify the layout immediately. Replace them with your own orthomosaic exports before publishing.

### Project orthomosaic previews

Files to replace:

- `public/images/project-1-orthomosaic.svg`
- `public/images/project-2-orthomosaic.svg`

Recommended replacements:

- Export a full-resolution orthomosaic from WebODM as a compressed JPEG or WebP.
- For the preview/cover image, a width of 1600–2000 px is ideal.
- Keep file sizes under 400 KB for fast loading.
- Use descriptive filenames, for example:
  - `public/images/waikato-pasture-orthomosaic.jpg`
  - `public/images/marlborough-vineyard-orthomosaic.jpg`

After replacing the files, update the project data in `src/data/projects.js`:

```js
{
  id: 'pasture-health-waikato',
  title: 'Pasture Health Survey',
  // ...
  preview: '/images/waikato-pasture-orthomosaic.jpg',
  raw: '/images/waikato-pasture-raw.jpg',
}
```

### Raw aerial imagery (comparison slider)

Files to replace:

- `public/images/project-1-raw.svg`
- `public/images/project-2-raw.svg`

These images appear on the left side of the before/after slider on each project detail page. Use a representative raw drone photo, ideally one from the same flight so the comparison is meaningful.

### Open Graph image

- Replace `public/og-image.svg` with a real PNG or JPEG.
- Recommended size: 1200 × 630 px.
- Update the reference in `src/layouts/Layout.astro` if you change the filename.

### Favicon

- Replace `public/favicon.svg` with your own SVG or ICO.
- Update the `<link rel="icon">` in `src/layouts/Layout.astro` if you use a different format.

### Resume

- Replace `public/resume.pdf` with your actual resume PDF.

### Contact details

- Update `src/pages/contact.astro` with your real email, LinkedIn URL, and GitHub URL.

## Add a new project

1. Open `src/data/projects.js`.
2. Duplicate one of the existing project objects.
3. Update every field, especially `id`, `title`, `location`, `coordinates`, `preview`, and `raw`.
4. The new project will automatically appear on `/projects` and its own detail page at `/projects/{id}`.

## Customising content

- **Home page**: `src/pages/index.astro`
- **Projects listing**: `src/pages/projects.astro`
- **Project detail template**: `src/pages/projects/[id].astro`
- **About page**: `src/pages/about.astro`
- **Contact page**: `src/pages/contact.astro`
- **Project data**: `src/data/projects.js`
- **Colours & typography**: `src/styles/global.css`

## Features

- Fully responsive layout
- Accessible markup and focus states
- Print-friendly stylesheet
- Lazy-loaded images
- Open Graph and Twitter Card meta tags
- Image lightbox for full-resolution orthomosaics
- Before/after comparison slider
- Interactive Leaflet map of project locations
- QR code on the contact page for linking from a printed resume

## Licence

This is a personal portfolio template. Replace the placeholder content before publishing.
