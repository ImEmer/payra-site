# Payra Landing (Static Vite + React)

Plain Vite + React + Tailwind static site. No SSR, no backend.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the built dist/
```

## APK file

Place your real APK at:

```
public/downloads/payra-latest.apk
```

It will be served at `/downloads/payra-latest.apk` and the Download button
triggers a file download from that path.

## Deploy

After `npm run build`, upload the `dist/` folder to any static host
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).
