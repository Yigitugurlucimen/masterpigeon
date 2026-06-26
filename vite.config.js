import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: /masterpigeon/ alt yolu. Cloudflare Pages: kök domain (/).
// CF_PAGES, Cloudflare build sırasında otomatik set edilir.
const base = process.env.CF_PAGES ? '/' : '/masterpigeon/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
