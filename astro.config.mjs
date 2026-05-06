import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Conditionally add Keystatic only in development
const integrations = [
  tailwind(),
  react(),
];

// Only add Keystatic in dev mode
if (process.env.NODE_ENV !== 'production') {
  const keystatic = (await import('@keystatic/astro')).default;
  integrations.push(keystatic());
}

export default defineConfig({
  site: 'https://kelsenliu.com',
  output: 'static',
  integrations,
});