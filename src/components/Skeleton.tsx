"use client";

export function SectionSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 w-32 rounded bg-black/5 dark:bg-white/10" />
      <div className="h-4 w-full rounded bg-black/5 dark:bg-white/10" />
      <div className="h-4 w-3/4 rounded bg-black/5 dark:bg-white/10" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
      <div className="h-12 w-12 rounded-xl bg-black/5 dark:bg-white/10" />
      <div className="mt-4 h-5 w-2/3 rounded bg-black/5 dark:bg-white/10" />
      <div className="mt-2 h-3 w-full rounded bg-black/5 dark:bg-white/10" />
      <div className="mt-4 h-8 w-20 rounded-full bg-black/5 dark:bg-white/10" />
    </div>
  );
}

export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`aspect-[4/3] bg-black/5 dark:bg-white/10 ${className}`} />
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 rounded bg-black/5 dark:bg-white/10 ${i === lines - 1 ? "w-3/4" : "w-full"}`}
        />
      ))}
    </div>
  );
}

export function ButtonSkeleton() {
  return (
    <div className="h-10 w-24 rounded-full bg-black/5 dark:bg-white/10" />
  );
}