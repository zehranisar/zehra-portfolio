import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Never inline files as data: URLs, so certificate PDFs always open in a new tab.
  build: { assetsInlineLimit: 0 },
})
