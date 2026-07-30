"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const SCRIPT_ID = "cf-turnstile-script";

export function TurnstileWidget({ onToken }: { onToken: (token: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return; // dev fallback: server accepts missing token in non-production

    function renderWidget() {
      if (containerRef.current && window.turnstile) {
        window.turnstile.render(containerRef.current, {
          sitekey: siteKey as string,
          callback: onToken,
          "expired-callback": () => onToken(""),
          "error-callback": () => onToken(""),
        });
      }
    }

    if (window.turnstile) {
      renderWidget();
      return;
    }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", renderWidget);
    return () => script?.removeEventListener("load", renderWidget);
  }, [siteKey, onToken]);

  if (!siteKey) {
    return (
      <p className="text-xs text-stone-500">
        Verification widget disabled in this environment (no Turnstile site key
        configured).
      </p>
    );
  }

  return <div ref={containerRef} />;
}
