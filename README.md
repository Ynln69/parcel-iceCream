# Ice Cream

A responsive landing page for an ice cream brand featuring handmade ice cream, ice coffee, and milkshakes.

**[Live Demo](https://Ynln69.github.io/parcel-iceCream/)**

## Overview

Ice Cream is a multi-section landing page that showcases products, company story, gallery, customer reviews, and contact information. The site is fully responsive across mobile, tablet, and desktop breakpoints.

## Features

- Responsive design (mobile / tablet / desktop)
- Smooth scroll navigation
- Swiper.js carousel for customer reviews
- AOS (Animate on Scroll) animations
- Modal windows (Buy Now, Products, Video, Location, Franchise)
- Mobile burger menu with body scroll lock
- Sticky header with scroll-based styling

## Tech Stack

- **HTML** — component-based via `posthtml-include`
- **SCSS** — modular styles with variables, mixins, and responsive utilities
- **JavaScript** — ES modules, vanilla JS
- **Parcel** — bundler (v2.6)
- **Swiper** — slider/carousel
- **AOS** — scroll animations
- **Animate.css** — CSS animations

## Project Structure

```
src/
├── images/          # Images (desktop, tablet, mobile)
├── js/              # JS modules (modals, menu, scroll, swiper)
├── partials/        # HTML components (header, hero, products, etc.)
├── sass/            # SCSS styles
│   ├── utils/       # Variables, mixins, base styles
│   └── ...          # Component styles
├── index.html       # Main HTML file
└── index.js         # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm start

# Production build
npm run build
```

## About

This project was created as an individual project during the [GoIT](https://goit.global/) course.
