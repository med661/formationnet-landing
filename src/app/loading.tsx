export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="h-40 rounded-lg bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="mt-4 h-4 w-2/3 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="mt-2 h-3 w-full rounded bg-black/5 dark:bg-white/10 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
