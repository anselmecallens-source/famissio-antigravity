import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { generateSeoPages } from './scripts/generate-seo-pages.mjs'

function seoPagesPlugin() {
  return {
    name: 'seo-pages-generator',
    closeBundle() {
      generateSeoPages()
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPagesPlugin()],
})

