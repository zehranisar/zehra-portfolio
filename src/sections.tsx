import { useState } from "react";
import {
  certificates,
  collaborations,
  competencies,
  education,
  experience,
  profile,
  projects,
  skills,
  stats,
  type Category,
} from "./data";
import { Chip, Icon, LinkButton, Monogram, Section } from "./ui";

/* ---------- Hero ---------- */

// Real results from the Smart Traffic project: average queue length relative to a 30 s fixed timer (DQN, simulation).
const results = [
  { label: "Normal traffic", change: "-80%", dqn: 20 },
  { label: "Rush hour", change: "-58%", dqn: 42 },
];

function ResultPanel() {
  return (
    <figure
      className="hero-rise rounded-xl border border-white/15 bg-white/[0.06] p-6 sm:p-7"
      style={{ animationDelay: "0.35s" }}
      aria-label="Smart Traffic Signal Control: DQN queue length compared with a fixed timer"
    >
      <figcaption>
        <p className="font-display text-xl font-bold text-white">Smart Traffic Signal Control</p>
        <p className="mt-1 text-sm leading-relaxed text-[#bdb2d6]">
          Average queue length, DQN agent against a 30 s fixed timer. Lower is better.
        </p>
      </figcaption>

      <div className="mt-6 space-y-6">
        {results.map((r, i) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between">
              <p className="text-sm font-medium text-white">{r.label}</p>
              <p className="font-display text-3xl font-extrabold text-signal">{r.change}</p>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="w-20 shrink-0 text-xs text-[#bdb2d6]">Fixed timer</span>
                <div className="h-3 flex-1 rounded-sm bg-white/10">
                  <div className="bar-grow h-full w-full rounded-sm bg-white/45" style={{ animationDelay: `${0.7 + i * 0.25}s` }} />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-20 shrink-0 text-xs text-white">DQN agent</span>
                <div className="h-3 flex-1 rounded-sm bg-white/10">
                  <div
                    className="bar-grow h-full rounded-sm bg-signal"
                    style={{ width: `${r.dqn}%`, animationDelay: `${0.95 + i * 0.25}s` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-[#bdb2d6]">
        Measured on 30 unseen scenarios per traffic level. A simple longest-queue rule still wins in light traffic.
      </p>
      <a
        href="#projects"
        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-signal hover:underline"
      >
        See the project <Icon name="arrow" className="h-4 w-4" />
      </a>
    </figure>
  );
}

export function Hero() {
  return (
    <header id="top" className="bg-hero text-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-14 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <div>
          <p className="hero-rise text-base text-[#bdb2d6]">
            {profile.location}, BS Computer Science
          </p>
          <h1 className="hero-name mt-5 text-white">
            <span className="hero-rise block" style={{ animationDelay: "0.05s" }}>
              Zehra
            </span>
            <span className="hero-rise block" style={{ animationDelay: "0.15s" }}>
              Nisar
            </span>
          </h1>
          <p className="hero-rise mt-7 font-display text-2xl font-bold text-signal sm:text-3xl" style={{ animationDelay: "0.25s" }}>
            AI/ML Engineer and Full‑Stack Developer
          </p>
          <p className="hero-rise mt-4 max-w-xl text-lg leading-relaxed text-[#d9d1ec]" style={{ animationDelay: "0.3s" }}>
            {profile.tagline}
          </p>
          <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.35s" }}>
            <LinkButton href="#projects" variant="signal" icon="arrow">
              View projects
            </LinkButton>
            <LinkButton href={`mailto:${profile.email}`} variant="outline-light" icon="mail">
              Get in touch
            </LinkButton>
            <LinkButton href={profile.github} variant="outline-light" icon="github">
              GitHub
            </LinkButton>
          </div>
        </div>

        <ResultPanel />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-12 sm:px-8">
        <dl className="grid grid-cols-2 border-t border-white/15 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-6 pr-4 ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-5xl font-extrabold text-white">{s.value}</dd>
              <p className="mt-1 max-w-[14rem] text-sm text-[#bdb2d6]">{s.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

/* ---------- About ---------- */

const focusAreas = [
  ["AI and ML products", "Prediction, forecasting, explainability and OCR"],
  ["Reinforcement learning", "Q-learning, DQN and PPO agents in custom environments"],
  ["Full-stack web apps", "React, TypeScript and FastAPI, deployed live"],
];

export function About() {
  return (
    <Section id="about" title="About" intro="Building things that work from the data to the screen.">
      <div className="space-y-5 text-lg leading-relaxed text-muted">
        {profile.about.map((p, i) => (
          <p key={p} className={i === 0 ? "text-xl text-ink" : ""}>
            {p}
          </p>
        ))}
      </div>

      <dl className="mt-10 divide-y divide-line border-y border-line">
        {focusAreas.map(([t, d]) => (
          <div key={t} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
            <dt className="font-display text-lg font-bold">{t}</dt>
            <dd className="text-muted">{d}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap gap-2">
        {competencies.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */

// Internship letters (CNIC and address already covered) placed in src/letters are linked automatically.
const letterFiles = import.meta.glob("./letters/*.{pdf,png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function letterFor(key: string): string | undefined {
  const hit = Object.entries(letterFiles).find(([path]) => path.toLowerCase().includes(key));
  return hit?.[1];
}

export function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Three internships in web development during 2026.">
      <ol className="divide-y divide-line border-y border-line">
        {experience.map((e) => {
          const letter = letterFor(e.letter);
          return (
            <li key={e.org} className="grid gap-4 py-8 md:grid-cols-[190px_1fr] md:gap-8">
              <div>
                <p className="font-semibold">{e.period}</p>
                <p className="mt-1 text-sm text-muted">{e.place}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight">{e.role}</h3>
                <p className="mt-1 text-lg">
                  {e.link ? (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-accent underline decoration-2 underline-offset-4"
                    >
                      {e.org}
                    </a>
                  ) : (
                    <span className="font-semibold text-accent">{e.org}</span>
                  )}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {e.focus && (
                  <p className="mt-4 text-sm text-muted">
                    <span className="font-semibold text-ink">Focus:</span> {e.focus}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                {letter && (
                  <a
                    href={letter}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    View letter <Icon name="external" className="h-4 w-4" />
                  </a>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

/* ---------- Education ---------- */

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="divide-y divide-line border-y border-line">
        {education.map((e) => (
          <li key={e.school} className="grid gap-3 py-7 md:grid-cols-[190px_1fr] md:gap-8">
            <p className="font-semibold">{e.period}</p>
            <div>
              <h3 className="font-display text-xl font-bold leading-snug">{e.school}</h3>
              <p className="mt-1 text-muted">{e.degree}</p>
              <p className="mt-1 font-semibold text-accent">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------- Projects ---------- */

const filters: ("All" | Category)[] = ["All", "AI / ML", "Full Stack", "Other"];

const toneFor = (c: Category) => (c === "AI / ML" ? "accent" : c === "Full Stack" ? "ink" : "signal");
const initials = (title: string) => {
  const words = title.split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
  if (words.length === 1) return words[0].slice(0, 2).replace(/^./, (c) => c.toUpperCase());
  return words.slice(0, 2).map((w) => w[0].toUpperCase()).join("");
};

export function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" title="Projects" intro="Most of these are deployed, with a live demo and the code on GitHub.">
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`-mb-px border-b-2 pb-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:text-accent ${
              filter === f ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 [grid-auto-flow:dense]">
        {list.map((p) => {
          const wide = Boolean(p.highlight) || p.summary.length > 330;
          return (
            <article
              key={p.title}
              className={`flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent ${
                wide ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <Monogram text={initials(p.title)} tone={toneFor(p.category)} />
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-bold leading-tight">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-muted">
                    {p.category}
                    {p.badge ? `, ${p.badge.toLowerCase()}` : ""}
                  </p>
                </div>
              </div>

              <div className={`mt-4 ${p.highlight ? "grid gap-6 lg:grid-cols-[1fr_auto]" : ""}`}>
                <p className="leading-relaxed text-muted">{p.summary}</p>
                {p.highlight && (
                  <div>
                    <div className="flex gap-3">
                      {p.highlight.map((h) => (
                        <div key={h.label} className="rounded-lg bg-surface-2 px-4 py-3">
                          <p className="font-display text-3xl font-extrabold text-accent">{h.value.replace("−", "-")}</p>
                          <p className="max-w-[9rem] text-xs text-muted">{h.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted">
                      Average queue vs a 30 s fixed timer, in simulation (DQN). A simple longest-queue rule still wins in
                      light traffic.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {p.live && (
                  <LinkButton href={p.live} icon="external">
                    Live demo
                  </LinkButton>
                )}
                <LinkButton href={p.repo} variant="ghost" icon="github">
                  Code
                </LinkButton>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-14">
        <h3 className="font-display text-2xl font-bold">Collaborations</h3>
        <p className="mt-1 text-muted">Projects built together with other developers.</p>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {collaborations.map((c) => (
            <li key={c.title}>
              <a
                href={c.repo}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-1 py-5 transition-colors sm:grid-cols-[220px_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-display text-lg font-bold group-hover:text-accent">{c.title}</span>
                <span className="text-sm leading-relaxed text-muted">{c.summary}</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  View code <Icon name="arrow" className="h-4 w-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use day to day.">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-3 py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
            <dt className="font-display text-lg font-bold">{g.group}</dt>
            <dd className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/* ---------- Certificates ---------- */

// Every PDF or image placed in src/certificates is picked up automatically.
const certFiles = import.meta.glob("./certificates/*.{pdf,png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type CertFile = { name: string; url: string; isPdf: boolean };

const allCertFiles: CertFile[] = Object.entries(certFiles).map(([path, url]) => {
  const name = path.split("/").pop() ?? path;
  return { name, url, isPdf: /\.pdf$/i.test(name) };
});

const prettify = (name: string) => name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();

type CertCard = { title: string; provider: string; file?: CertFile };

function buildCertCards(): CertCard[] {
  const used = new Set<string>();
  const cards: CertCard[] = certificates.map((c) => {
    const file = allCertFiles.find((f) => !used.has(f.name) && c.match.some((k) => f.name.toLowerCase().includes(k)));
    if (file) used.add(file.name);
    return { title: c.title, provider: c.provider, file };
  });
  // Files that match no card are still shown, so nothing you add goes missing.
  for (const f of allCertFiles) {
    if (!used.has(f.name)) cards.push({ title: prettify(f.name), provider: "Certificate", file: f });
  }
  return cards;
}

export function Certificates() {
  const cards = buildCertCards();
  return (
    <Section id="certificates" title="Certificates" intro="Courses and programmes I have completed.">
      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((c) => (
          <div key={c.title} className="flex flex-col rounded-xl border border-line bg-surface p-5">
            {c.file && !c.file.isPdf && (
              <a href={c.file.url} target="_blank" rel="noreferrer" className="mb-4 block overflow-hidden rounded-lg border border-line">
                <img
                  src={c.file.url}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
              </a>
            )}
            <h3 className="font-display text-lg font-bold leading-snug">{c.title}</h3>
            <p className="mt-1 text-sm text-muted">{c.provider}</p>
            {c.file && (
              <div className="mt-auto pt-4">
                <a
                  href={c.file.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                >
                  View certificate <Icon name="external" className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */

export function Contact() {
  return (
    <section id="contact" className="bg-hero text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
          Let's build
          <br />
          something together.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#d9d1ec]">
          Have a product, an idea or a team that needs AI, ML or full-stack engineering? Send me a message.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all font-display text-2xl font-bold text-signal underline decoration-2 underline-offset-8 hover:brightness-110 sm:text-4xl"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href={profile.linkedin} variant="outline-light" icon="linkedin">
            LinkedIn
          </LinkButton>
          <LinkButton href={profile.github} variant="outline-light" icon="github">
            GitHub
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
