# Portfolio — Neon Glass

A responsive developer portfolio built with **React + Vite** and **CSS Modules**.
Dark "neon glass" theme with glassmorphism cards, gradient accents, and floating
phone mockups. Fully responsive from mobile to desktop.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Making it yours

All content lives in one place: **`src/data.js`**. Edit your name, tagline,
apps, stats, experience, stack, and social links there — no component changes
needed.

## Structure

```
src/
  main.jsx              # React entry
  App.jsx               # composes the page sections
  data.js               # ← all editable content
  styles/global.css     # theme tokens (colors, fonts, spacing) + reset
  components/
    Nav        # sticky header + mobile hamburger menu
    Hero       # headline + floating phone mockups
    Stats      # key numbers
    Apps       # featured apps grid
    About      # bio
    Stack      # tech tags
    Experience # work history
    Contact    # footer with email + socials
```

## Theming

Colors, fonts, radii, and spacing are CSS custom properties defined in
`src/styles/global.css` under `:root`. Change `--accent`, `--bg`, etc. to
re-skin the whole site.

## Responsive behavior

- Fluid type via `clamp()` throughout
- Auto-fit grids for stats and app cards
- Nav collapses to an animated hamburger menu below 720px
- Third floating phone hides on very small screens
- Respects `prefers-reduced-motion`
