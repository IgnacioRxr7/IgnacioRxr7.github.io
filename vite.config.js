import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',                     // al servirse como User Page, se monta en la raíz
  build: {
    outDir: 'docs',              // carpeta que GitHub Pages usará
    chunkSizeWarningLimit: 5000
  }
})
