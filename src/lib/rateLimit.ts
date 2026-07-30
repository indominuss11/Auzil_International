// Minimal in-memory rate limiting abstraction for form submission routes.
//
// This is intentionally simple and process-local — it resets on deploy
// and does not share state across serverless instances. It is sufficient
// as a basic abuse deterrent for a low-traffic B2B enquiry form, but if
// you deploy to a multi-instance / serverless environment, replace this
// with a shared store (e.g. Upstash Redis, Vercel KV) behind the same
// `checkRateLimit` interface.

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

export function checkRateLimit(key: string): { allowed: boolean; retryAfterMs: number } {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterMs: 0 };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterMs: bucket.resetAt - now };
  }

  bucket.count += 1;
  return { allowed: true, retryAfterMs: 0 };
}
