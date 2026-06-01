import Reveal from "@/components/Reveal";

type Props = {
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  gradient?: boolean;
};

export default function SectionHeader({ title, subtitle, align = "start", gradient = false }: Props) {
  const isCenter = align === "center";
  return (
    <Reveal>
      <div className={`flex flex-col gap-4 ${isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-start max-w-3xl"}`}>
        <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" aria-hidden />
        <h2
          className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            gradient
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              : "text-[var(--foreground)]"
          }`}
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="text-base sm:text-lg leading-7 text-[var(--muted)]">{subtitle}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
