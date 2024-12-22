import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import netlify from '@astrojs/netlify';


export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
});