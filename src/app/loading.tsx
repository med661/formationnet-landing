export default function Loading() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl space-y-4">
            <div className="h-12 w-3/4 rounded-lg bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="h-6 w-full rounded bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="h-6 w-2/3 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="flex gap-4 pt-4">
              <div className="h-12 w-32 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
              <div className="h-12 w-32 rounded-full border border-black/10 dark:border-white/10 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="h-8 w-24 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
        <div className="mt-6 h-20 w-full rounded-lg bg-black/5 dark:bg-white/10 animate-pulse" />
      </section>

      {/* Services Section Skeleton */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="h-8 w-32 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="h-12 w-12 rounded-xl bg-black/5 dark:bg-white/10 animate-pulse" />
              <div className="mt-4 h-5 w-2/3 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
              <div className="mt-2 h-3 w-full rounded bg-black/5 dark:bg-white/10 animate-pulse" />
              <div className="mt-2 h-3 w-3/4 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
              <div className="mt-4 h-8 w-20 rounded-full border border-black/10 dark:border-white/10 animate-pulse" />
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="h-8 w-28 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="aspect-[4/3] bg-black/5 dark:bg-white/10 animate-pulse" />
              <div className="p-6">
                <div className="h-5 w-2/3 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
                <div className="mt-2 h-3 w-full rounded bg-black/5 dark:bg-white/10 animate-pulse" />
                <div className="mt-4 h-8 w-24 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Find Us Section Skeleton */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="h-8 w-32 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="h-64 rounded-2xl bg-black/5 dark:bg-white/10 animate-pulse" />
          <div className="space-y-4">
            <div className="h-6 w-1/3 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="h-4 w-full rounded bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="h-6 w-1/4 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="h-4 w-2/3 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Technologies Section Skeleton */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="h-8 w-36 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
        <div className="mt-10 flex flex-wrap gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-12 w-24 rounded-lg bg-black/5 dark:bg-white/10 animate-pulse" />
          ))}
        </div>
      </section>

      {/* Contact Section Skeleton */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="h-8 w-28 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="h-6 w-1/3 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="h-4 w-full rounded bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="flex gap-4 pt-4">
              <div className="h-10 w-10 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
              <div className="h-10 w-10 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
              <div className="h-10 w-10 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="h-10 w-full rounded-lg bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="mt-4 h-10 w-full rounded-lg bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="mt-4 h-32 w-full rounded-lg bg-black/5 dark:bg-white/10 animate-pulse" />
            <div className="mt-4 h-10 w-24 rounded-full bg-black/5 dark:bg-white/10 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}
