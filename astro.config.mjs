import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

const integrations = [
  markdoc(),
  tailwind(),
  react(),
];

if (process.env.NODE_ENV !== 'production') {
  const keystatic = (await import('@keystatic/astro')).default;
  integrations.push(keystatic());
}

export default defineConfig({
  site: 'https://kelsenliu.com',
  output: 'static',
  integrations,
});
