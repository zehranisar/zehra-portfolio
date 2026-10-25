import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${seen ? "in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

type IconName = "github" | "linkedin" | "mail" | "external" | "sun" | "moon" | "menu" | "close" | "arrow";

const paths: Record<IconName, ReactNode> = {
  github: (
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  ),
  mail: (
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.5 7h15L12 12.2Zm0 1.8L4 8.5V17h16V8.5L12 14Z" />
  ),
  external: (
    <path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H6v11h11v-5h2v7H4V5h1Z" />
  ),
  sun: (
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5h1v3h-1V2Zm0 17h1v3h-1v-3ZM2 11.5h3v1H2v-1Zm17 0h3v1h-3v-1ZM4.9 4.2l.7-.7 2.1 2.1-.7.7-2.1-2.1Zm11.4 11.4.7-.7 2.1 2.1-.7.7-2.1-2.1ZM4.2 19.1l2.1-2.1.7.7-2.1 2.1-.7-.7ZM16.3 7.7l2.1-2.1.7.7-2.1 2.1-.7-.7Z" />
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  menu: <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />,
  close: (
    <path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4 6.4 5Z" />
  ),
  arrow: <path d="M5 11h11.2l-4.6-4.6L13 5l7 7-7 7-1.4-1.4 4.6-4.6H5v-2Z" />,
};

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: IconName;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:brightness-110"
      : "border border-line bg-surface text-ink hover:border-accent";
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {icon && <Icon name={icon} className="h-4 w-4" />}
      {children}
    </a>
  );
}
