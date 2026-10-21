# Poésie Café

Website for Poésie Café — a coffee shop and artistic meeting place in Paris.

🌐 [Live Website](https://poesiecoffee.com/)

## Stack

Next.js 15, React 19, TypeScript, Tailwind CSS, Airtable, shadcn/ui

## Setup

```bash
npm install
cp .env.local.example .env.local
# Add your Airtable credentials to .env.local
```

## Development

```bash
npm run dev
```

## Analytics

Umami and PostHog run alongside each other. PostHog is initialized in
`src/instrumentation-client.ts` and captures pageviews (including client-side
navigation), page exits, and automatic interaction events. Session recording is
disabled, and interaction text and element attributes are masked.

Set these values in `.env.local` and in your hosting provider's environment:

```dotenv
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=<your public PostHog project token>
NEXT_PUBLIC_POSTHOG_HOST=/p-relay
```

Use the project token from the Poésie Coffee project settings, not a personal API
key. Both values are public browser configuration. PostHog runs only in production
mode when a token is configured and the hostname is `poesiecoffee.com` or
`www.poesiecoffee.com`. Local runs (including `npm start`) and preview deployments
do not send PostHog analytics.
These variables are embedded at build time; rebuild/redeploy after changing them.

Requests use the same-origin `/p-relay` reverse proxy in `next.config.ts`, which
forwards ingestion to PostHog EU and static assets to its EU asset host.

To verify, deploy to the live domain, visit the site, and navigate between pages.
Check for `$pageview` events in the PostHog project's activity feed.
No server logging is configured.

See [PostHog's Next.js installation guide](https://posthog.com/docs/web-analytics/installation/nextjs).
