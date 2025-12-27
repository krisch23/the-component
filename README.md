# The Component

A personal engineering lab. Building GenAI tools, software experiments, and technical writing in public.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home
│   ├── projects/page.tsx  # Projects listing
│   ├── articles/page.tsx  # Articles listing
│   ├── about/page.tsx     # About page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
└── components/
    ├── Header.tsx         # Site header/nav
    ├── Footer.tsx         # Site footer
    ├── EmailSignup.tsx    # Email capture
    ├── ProjectCard.tsx    # Project card component
    └── ArticleCard.tsx    # Article card component
```

## Design Philosophy

- Minimal, confident, and intentional
- Typography-first design
- Dark-first theme with muted colors
- No hype, no buzzwords
- Builder-first aesthetic

## License

MIT

