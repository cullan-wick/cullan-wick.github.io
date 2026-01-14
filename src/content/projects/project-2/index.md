---
title: "Personal Portfolio & Blog"
summary: "A minimalist, lightning-fast portfolio built with Astro's Island Architecture for maximum performance."
date: "Jan 14 2026"
draft: false
tags:
- Astro
- TypeScript
- Tailwind CSS
- JavaScript
demoUrl: "https://cullan-wick.github.io/"
repoUrl: https://github.com/cullan-wick/cullan-wick.github.io
---

This website serves as my digital garden and professional portfolio. Built on the **Astrosphere** template, it prioritizes performance, accessibility, and a minimalist aesthetic over heavy client-side complexity.

### ⚡️ The Architecture

Unlike traditional Single Page Applications (SPAs) that ship large JavaScript bundles to the client, this site leverages **Astro**:

*   **Static Site Generation (SSG):** The site is pre-rendered into HTML at build time, ensuring near-instant load times and optimal SEO.
*   **Zero JavaScript Runtime:** By default, Astro strips away all JavaScript, sending only HTML and CSS to the browser.
*   **Island Architecture:** Interactive elements are isolated as "islands." JavaScript is only hydrated exactly where it is needed, keeping the main thread free.

### 🎨 Design System

The UI is built with **Tailwind CSS**, utilizing a utility-first approach to maintain consistency in spacing, typography, and color without writing bloated stylesheets. The result is a lightweight, responsive interface that achieves perfect Lighthouse performance scores.