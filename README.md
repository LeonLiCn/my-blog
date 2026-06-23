# Leon Lee's Blog

A lightweight personal blog built with Next.js, TypeScript, Tailwind CSS, and Markdown files.

## Content

Posts live in `_posts` as Markdown files with front matter:

```yaml
---
title: "Post title"
excerpt: "Short summary"
coverImage: "/assets/blog/example/cover.jpg"
date: "2026-06-15T00:00:00.000Z"
author:
  name: Leon Lee
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/example/cover.jpg"
---
```

Adding a new `.md` file creates a new statically generated post page.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm run start
```

The project avoids remote font fetching during build and uses a system font stack for more predictable deployments.
