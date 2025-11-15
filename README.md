# Mini Ads

A Farcaster Mini App built with Next.js 15, React 19, and Tailwind CSS v4.

## Quick Start

```bash
# Install dependencies
bun install

# Set environment variable
echo "NEXT_PUBLIC_HOST=http://localhost:3000" > .env.local

# Run development server
bun run dev

# Optional: Expose public URL for testing
bun run tunnel
```

## Requirements

- Bun (or Node.js 20+)
- `NEXT_PUBLIC_HOST` environment variable

## Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun run start` - Serve production build
- `bun run tunnel` - Expose localhost via Cloudflare tunnel

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Farcaster Mini App SDK
- React Router (client-side SPA)

## License

MIT
