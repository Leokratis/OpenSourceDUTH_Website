// This bugs me for some reason, but I can't figure out how to get rid of it.
// Astro uses vite on the backend, and I need to reference it here for the `auth.config.ts` file.
// If anyone can figure out how to get rid of this, please let me know.
// SOURCE: https://stackoverflow.com/questions/78114219/property-env-does-not-exist-on-type-importmeta-ts2339

/// <reference types="astro/client" />