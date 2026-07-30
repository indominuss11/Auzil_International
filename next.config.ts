import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// Content-Security-Policy: kept as narrow as practical while allowing
// Next.js runtime, self-hosted fonts/images, Resend (server-side only,
// so no browser CSP entry required) and Cloudflare Turnstile.
const csp = [
  "default-src 'self'",
  // Next.js needs 'unsafe-inline' for the tiny inline hydration script it
  // emits. 'unsafe-eval' is required ONLY in development — Next's Hot
  // Module Replacement / React Refresh runtime uses eval() to apply
  // updates without a full reload, and without this the dev bundle throws
  // a CSP EvalError that silently breaks client component interactivity
  // (state, onClick, etc.) while plain <Link> navigation still works.
  // Production builds don't need eval, so it's excluded there.
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"} https://challenges.cloudflare.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // /services and /industries were merged into /manufacturing as
    // in-page sections. Redirect so old links/bookmarks/search results
    // still land on the right content instead of 404ing.
    return [
      { source: "/services", destination: "/manufacturing#services", permanent: true },
      { source: "/industries", destination: "/manufacturing#industries", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
