import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configured for a GitHub Pages project site.
  // If you rename the repo or use a custom domain, update these values.
  output: 'static',
  site: 'https://tfinn9.github.io',
  base: '/tom-finn-drone-mapping-portfolio',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
