/**
 * Prepend the configured Astro base path to an absolute or relative URL.
 * Useful for GitHub Pages project sites where assets live under a repo slug.
 */
export function withBase(path) {
  if (path.startsWith('#')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
