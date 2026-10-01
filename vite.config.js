import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Résumé PDF served from `public/`. The download buttons only render when the
// file is actually there, so a missing PDF never ships as a broken link.
const RESUME_FILE = 'Qobil_Abduraximov_Flutter_Resume.pdf'
const hasResume = existsSync(
  fileURLToPath(new URL(`./public/${RESUME_FILE}`, import.meta.url)),
)

// https://vite.dev/config/
// `base` controls the URL prefix assets are loaded from.
//  - Local dev / preview: "/" (the default).
//  - GitHub Pages project site: "/<repo-name>/". The deploy workflow sets
//    VITE_BASE automatically, so you never have to hardcode the repo name.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
  define: {
    __RESUME_FILE__: JSON.stringify(hasResume ? RESUME_FILE : ''),
  },
})
