"use client";

import { useState, FormEvent } from "react";

type Labels = { name: string; email: string; message: string; send: string };
type Select = { label: string; hint: string; options: string[] };

type FormErrors = {
  topic?: string;
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm({ labels, select }: { labels: Labels; select: Select }) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        break;
      case "topic":
        if (!value) return "Please select a topic";
        break;
    }
    return undefined;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: FormEvent) => {
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const newErrors: FormErrors = {};
    let hasErrors = false;

    ["topic", "name", "email", "message"].forEach((field) => {
      const value = formData.get(field) as string;
      const error = validateField(field, value);
      if (error) {
        newErrors[field as keyof FormErrors] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched({ topic: true, name: true, email: true, message: true });

    if (hasErrors) {
      e.preventDefault();
    }
  };

  const getFieldClass = (field: string) => {
    const baseClass = "mt-2 h-11 w-full rounded-lg border bg-[var(--surface)] px-3 outline-none transition-all duration-200";
    const error = touched[field] && errors[field as keyof FormErrors];
    return `${baseClass} ${
      error
        ? "border-red-500 focus-visible:ring-red-500"
        : "border-[var(--border)] focus-visible:ring-[var(--accent)]"
    }`;
  };

  return (
    <form
      action="https://formsubmit.co/formationnettn@gmail.com"
      method="POST"
      role="form"
      aria-label="Contact form"
      suppressHydrationWarning
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:shadow-md focus-within:shadow-md"
    >
      <input type="hidden" name="_subject" value="FormationNet Contact" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://formationnet-landing.vercel.app/thank-you?return=/#contact" />
      <input type="hidden" name="_next" value="https://formationnet-landing.vercel.app/?sent=1#contact" />
      <div className="grid gap-5">
        <div>
          <label htmlFor="topic" className="text-xs font-medium">
            {select.label}
            <span className="text-red-500 ml-1" aria-hidden="true">*</span>
          </label>
          <select
            id="topic"
            name="topic"
            defaultValue=""
            aria-describedby="topic-hint"
            required
            suppressHydrationWarning
            onBlur={handleBlur}
            className={`mt-2 h-11 w-full rounded-lg border bg-[var(--surface)] px-3 outline-none transition-all duration-200 ${
              touched.topic && errors.topic
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-[var(--border)] focus-visible:ring-[var(--accent)]"
            }`}
          >
            <option value="" disabled>—</option>
            {select.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          <p id="topic-hint" className="mt-2 text-xs text-[var(--muted)]">{select.hint}</p>
          {touched.topic && errors.topic && (
            <p className="mt-1 text-xs text-red-500" role="alert">{errors.topic}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-xs font-medium">
              {labels.name}
              <span className="text-red-500 ml-1" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              placeholder={labels.name}
              required
              suppressHydrationWarning
              onBlur={handleBlur}
              className={getFieldClass("name")}
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-medium">
              {labels.email}
              <span className="text-red-500 ml-1" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              suppressHydrationWarning
              onBlur={handleBlur}
              className={getFieldClass("email")}
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-xs font-medium">
            {labels.message}
            <span className="text-red-500 ml-1" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={labels.message}
            rows={4}
            required
            suppressHydrationWarning
            onBlur={handleBlur}
            className={`mt-2 w-full rounded-lg border bg-[var(--surface)] px-3 py-2 outline-none transition-all duration-200 ${
              touched.message && errors.message
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-[var(--border)] focus-visible:ring-[var(--accent)]"
            }`}
          />
          {touched.message && errors.message && (
            <p className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-full bg-[var(--accent)] text-[var(--accent-foreground)] px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            {labels.send}
          </button>
        </div>

      </div>
    </form>
  );
}
