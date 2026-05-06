# Personal Site

A minimal personal website built with Astro, Keystatic CMS, and deployed via GitHub Pages.

## Tech Stack

- **[Astro](https://astro.build)** - Static Site Generator
- **[Keystatic](https://keystatic.com)** - Git-based CMS
- **[Tailwind CSS](https://tailwindcss.com)** - Styling
- **[Bun](https://bun.sh)** - JavaScript runtime & toolkit
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## Features

- ✨ Minimal, typography-first design
- 🌙 Dark mode support (auto via system preference)
- 📝 Markdown-powered content
- 🚀 Zero JavaScript by default
- 📱 Fully responsive
- 🔍 SEO optimized

## Project Structure

```
/
├── content/           # Markdown content managed by Keystatic
│   ├── pages/        # Singleton pages (home, about)
│   ├── posts/        # Blog posts
│   └── projects/     # Project entries
├── src/
│   ├── layouts/      # Astro layouts
│   ├── pages/        # Astro pages and routing
│   └── styles/       # Global styles
├── public/           # Static assets
└── .github/          # GitHub Actions workflows
```

## Development

### Prerequisites

- [Bun](https://bun.sh) v1.0+

```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash
```

### Commands

```bash
# Install dependencies
bun install

# Start dev server with Keystatic CMS at localhost:4321
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Content Management

Access Keystatic CMS at `http://localhost:4321/keystatic` during development to manage content through the browser UI. All content is stored as Markdown/JSON files in the `content/` directory and committed to git.

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions.

### Setup

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. (Optional) Configure custom domain in Pages settings
4. (Optional) Set up GitHub OAuth app for production Keystatic access

## License

MIT