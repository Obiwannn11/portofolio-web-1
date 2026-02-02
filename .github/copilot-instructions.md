# Neo-Brutalist Portfolio - AI Instructions

## Project Overview
This is a single-page portfolio website featuring a "Neo-Brutalist" design aesthetic (bold borders, high contrast, hard shadows). It is built with **Vanilla JavaScript**, **Vite**, and **Tailwind CSS v4**.

## Architecture & Core Components
- **Framework-less**: Logic is contained entirely in `main.js`. No reactive frameworks (React/Vue).
- **Entry Point**: `index.html` is the source of truth for structure.
- **Styling**: `style.css` uses Tailwind v4 `@theme` block to define the design system.
- **Icons**: `Lucide` icons are loaded via CDN in `head`.

## Design System & Theming
This project uses a strict CSS Variable system for theming (Light/Dark mode) defined in `style.css`.
- **Theme Logic**: Maintained in `main.js`. Toggles `.dark` class on `<html>` and updates `localStorage`.
- **Tailwind Config**: Do not use `tailwind.config.js`. Use the `@theme` block in `style.css`.
- **Semantic Colors**: Use `neo-*` colors instead of hardcoded hex values.
  - `bg-neo-bg` / `text-neo-text` (Base)
  - `bg-neo-primary` (Accent/Gold)
  - `shadow-neo` (Hard shadows)

## Conventions
- **HTML**: Use semantic HTML5 tags (`<nav>`, `<header>`, `<section>`).
- **Icons**: Use `data-lucide` attributes. Remember to call `lucide.createIcons()` or similar if dynamically adding content (though `main.js` currently uses `script` tag autoload).
- **Shadows**: Always apply `shadow-neo` classes to interactive elements for the brutalist look.
- **Borders**: Most containers should have `border-4 border-neo-text`.

## Development Workflow
- **Run Dev**: `npm run dev` (Vite)
- **Build**: `npm run build`
- **Tailwind**: It is compiled on-the-fly by Vite. No separate watcher needed.

## Key Files
- [index.html](index.html): Main markup.
- [style.css](style.css): Tailwind setup and CSS variables (`--color-neo-*`).
- [main.js](main.js): Dark mode toggle, scroll logic, UI interactions.
