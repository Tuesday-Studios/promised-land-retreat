// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://promisedlandretreat.com.au',
  image: {
    experimentalLayout: 'constrained',
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
