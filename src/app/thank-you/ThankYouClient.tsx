"use client";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ThankYouClient() {
  const router = useRouter();
  const params = useSearchParams();
  const returnUrl = useMemo(() => {
    const r = params.get("return") || "/#contact";
    try {
      const u = new URL(r, typeof window !== "undefined" ? window.location.origin : "https://formationnet-landing.vercel.app");
      return u.pathname + u.search + u.hash;
    } catch {
      return "/#contact";
    }
  }, [params]);
  const [seconds, setSeconds] = useState(5);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem("ty_views", String(Number(localStorage.getItem("ty_views")) + 1));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    if (seconds === 0 && !redirecting) {
      setRedirecting(true);
      Promise.resolve()
        .then(() => router.push(returnUrl))
        .catch(() => setError("Unable to redirect. Please use the Return button."));
    }
  }, [seconds, redirecting, router, returnUrl]);

  function onReturnClick() {
    try { localStorage.setItem("ty_return_clicks", String(Number(localStorage.getItem("ty_return_clicks")) + 1)); } catch {}
    setRedirecting(true);
    try {
      router.push(returnUrl);
    } catch {
      setError("Unable to redirect. Please try again.");
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]">Thank you, we will contact you ASAP</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">Your message has been sent successfully.</p>
        <div className="mt-6 flex items-center gap-3" aria-live="polite">
          <span className="text-sm">Redirecting in</span>
          <span className="inline-flex h-7 min-w-[2.5rem] items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 text-sm font-medium">
            {seconds}s
          </span>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={onReturnClick}
            aria-busy={redirecting}
            className="rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] px-5 py-2 text-sm font-medium transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            Return
          </button>
          <Link href={returnUrl} className="rounded-full border border-[var(--border)] px-5 py-2 text-sm transition hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2">
            Go back
          </Link>
        </div>
        {error && (
          <div role="alert" className="mt-4 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}
      </div>
    </section>
  );
}