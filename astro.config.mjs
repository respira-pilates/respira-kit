import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  site: 'https://respira-pilates.github.io',
  base: '/respira-kit',
  fonts: [{
    provider: fontProviders.google(),
    name: 'Josefin Sans',
    cssVariable: '--font-josefin',
  }]
})
