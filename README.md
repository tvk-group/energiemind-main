# energiemind-main

Official main corporate website for **EnergieMIND** — AI-powered energy intelligence for mining heat utility, sustainable infrastructure and future energy networks.

## Tech Stack

- **Next.js 15** (App Router, static generation)
- **TypeScript**
- **Tailwind CSS 4**
- **next-intl** — 30 languages with native translations (no Google Translate)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all core sections |
| `/mission` | Mission and vision |
| `/energy-intelligence` | Energy intelligence platform |
| `/mining-heat-utility` | Mining heat recovery |
| `/technology` | Technical foundation |
| `/pilot-program` | Pilot program targets |
| `/ecosystem` | TVK / EnteleKRON ecosystem |
| `/enm-token` | ENM token info (links to enm.network) |
| `/roadmap` | Development roadmap |
| `/contact` | Contact information |

All routes are available under locale prefixes: `/en/`, `/de/`, `/fr/`, etc.

## Languages (30)

English, Deutsch, Français, Español, Italiano, Nederlands, Português, Polski, Русский, Українська, Türkçe, العربية, 中文, 日本語, 한국어, हिन्दी, Svenska, Norsk, Dansk, Suomi, Čeština, Română, Magyar, Ελληνικά, Български, Hrvatski, Slovenčina, Lietuvių, Bahasa Indonesia, Tiếng Việt

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en`.

## Build

```bash
npm run build
npm start
```

Generates 304 static pages (10 pages × 30 locales + root).

## License

MIT — TVK Group / TVK Labs & Technologies LTD
