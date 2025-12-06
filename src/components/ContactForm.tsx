"use client";

type Labels = { name: string; email: string; message: string; send: string };
// Removed usage of Messages; kept types minimal for current props
// type Messages = { fill: string; thank: string };
type Select = { label: string; hint: string; options: string[] };

export default function ContactForm({ labels, select }: { labels: Labels; select: Select }) {

  return (
    <form
      action="https://formsubmit.co/formationnettn@gmail.com"
      method="POST"
      role="form"
      aria-label="Contact form"
      suppressHydrationWarning
      className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:shadow-md focus-within:shadow-md"
    >
      <input type="hidden" name="_subject" value="FormationNet Contact" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <div className="grid gap-5">
        <div>
          <label htmlFor="topic" className="text-xs font-medium">{select.label}</label>
          <select
            id="topic"
            name="topic"
            defaultValue=""
            aria-describedby="topic-hint"
            required
            suppressHydrationWarning
            className="mt-2 h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <option value="" disabled>—</option>
            {select.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <p id="topic-hint" className="mt-2 text-xs text-[var(--muted)]">{select.hint}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-xs font-medium">{labels.name}</label>
            <input
              id="name"
              name="name"
              placeholder={labels.name}
              required
              suppressHydrationWarning
              className="mt-2 h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-medium">{labels.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              suppressHydrationWarning
              className="mt-2 h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-xs font-medium">{labels.message}</label>
          <textarea
            id="message"
            name="message"
            placeholder={labels.message}
            rows={4}
            required
            suppressHydrationWarning
            className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] px-5 py-2 text-sm font-medium transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            {labels.send}
          </button>
        </div>

      </div>
    </form>
  );
}
