import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` controls the URL prefix assets are loaded from.
//  - Local dev / preview: "/" (the default).
//  - GitHub Pages project site: "/<repo-name>/". The deploy workflow sets
//    VITE_BASE automatically, so you never have to hardcode the repo name.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
