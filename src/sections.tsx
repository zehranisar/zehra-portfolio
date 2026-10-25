import { useEffect, useState } from "react";
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
import { Chip, Icon, LinkButton, Reveal, Section } from "./ui";

/* ---------- Hero ---------- */

function useRotatingText(items: string[], ms = 2600) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % items.length), ms);
    return () => clearInterval(t);
  }, [items.length, ms]);
  return items[i];
}

export function Hero() {
  const role = useRotatingText(profile.roles);
  return (
    <header id="top" className="hero-bg relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> {profile.location} · BS Computer Science
          </p>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-4 h-9 font-mono text-xl text-accent-2 sm:text-2xl" aria-live="polite">
            {role}
            <span className="caret ml-0.5 inline-block w-[2px] bg-accent-2 align-middle">&nbsp;</span>
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#projects" icon="arrow">
              View projects
            </LinkButton>
            <LinkButton href={`mailto:${profile.email}`} variant="ghost" icon="mail">
              Get in touch
            </LinkButton>
            <LinkButton href={profile.github} variant="ghost" icon="github">
              GitHub
            </LinkButton>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="card relative p-6 font-mono text-sm leading-7">
            <div className="mb-4 flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <p>
              <span className="text-accent">class</span> <span className="text-accent-2">ZehraNisar</span>:
            </p>
            <p className="pl-4">role = <span className="text-emerald-400">"AI/ML + Full-Stack"</span></p>
            <p className="pl-4">studying = <span className="text-emerald-400">"BS Computer Science"</span></p>
            <p className="pl-4">stack = [</p>
            <p className="pl-8"><span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"TypeScript"</span>,</p>
            <p className="pl-8"><span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"FastAPI"</span>,</p>
            <p className="pl-8"><span className="text-emerald-400">"PostgreSQL"</span>, <span className="text-emerald-400">"PyTorch"</span></p>
            <p className="pl-4">]</p>
            <p className="pl-4">currently = <span className="text-emerald-400">"Reinforcement Learning"</span></p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-4xl font-extrabold gradient-text">{s.value}</dd>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

/* ---------- About ---------- */

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building things that work end to end">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-4 text-lg leading-relaxed text-muted">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {competencies.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">What I work on</h3>
            <ul className="mt-4 space-y-3">
              {[
                ["🤖", "AI & ML products", "Prediction, forecasting, explainability, OCR"],
                ["🎮", "Reinforcement learning", "Q-learning, DQN and PPO agents in custom environments"],
                ["🌐", "Full stack web apps", "React, TypeScript and FastAPI, deployed live"],
              ].map(([icon, title, text]) => (
                <li key={title} className="flex gap-3">
                  <span className="text-xl" aria-hidden="true">{icon}</span>
                  <span>
                    <span className="block font-semibold">{title}</span>
                    <span className="text-sm text-muted">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- Education ---------- */

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I study">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 80}>
            <div className="card h-full p-6">
              <p className="font-mono text-sm text-accent-2">{e.period}</p>
              <h3 className="mt-2 text-xl font-bold leading-snug">{e.school}</h3>
              <p className="mt-2 text-muted">{e.degree}</p>
              <p className="mt-1 font-semibold">{e.detail}</p>
            </div>
          </Reveal>
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
    <Section id="experience" eyebrow="Experience" title="Three internships in 2026">
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
        {experience.map((e, i) => (
          <li key={e.org} className="relative">
            <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[39px]" aria-hidden="true" />
            <Reveal delay={i * 80}>
              <div className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold">{e.role}</h3>
                  <p className="font-mono text-sm text-accent-2">{e.period}</p>
                </div>
                <p className="mt-1 text-muted">
                  {e.link ? (
                    <a href={e.link} target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-accent underline-offset-4">
                      {e.org}
                    </a>
                  ) : (
                    <span className="font-semibold text-ink">{e.org}</span>
                  )}{" "}
                  · {e.place}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-accent">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {e.focus && (
                  <p className="mt-3 text-sm text-muted">
                    <span className="font-semibold text-ink">Focus:</span> {e.focus}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
                {letterFor(e.letter) && (
                  <a
                    href={letterFor(e.letter)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    View letter <Icon name="external" className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------- Projects ---------- */

const filters: ("All" | Category)[] = ["All", "AI / ML", "Full Stack", "Other"];

export function Projects() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              filter === f
                ? "border-accent bg-accent text-white"
                : "border-line bg-surface text-muted hover:border-accent hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {list.map((p) => (
          <article
            key={p.title}
            className={`card card-hover flex flex-col p-6 ${p.featured ? "md:col-span-1" : ""}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-2xl" aria-hidden="true">
                  {p.emoji}
                </span>
                <h3 className="text-xl font-bold">{p.title}</h3>
              </div>
              <span className="shrink-0 rounded-full bg-surface-2 px-2.5 py-1 font-mono text-xs text-accent-2">
                {p.category}
              </span>
            </div>
            <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>

            {p.highlight && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                {p.highlight.map((h) => (
                  <div key={h.label} className="rounded-xl border border-line bg-surface-2 p-3">
                    <p className="text-2xl font-extrabold gradient-text">{h.value}</p>
                    <p className="text-xs text-muted">{h.label}</p>
                  </div>
                ))}
              </div>
            )}
            {p.highlight && (
              <p className="mt-2 text-xs text-muted">
                Average queue vs a 30 s fixed timer, in simulation (DQN). A simple longest-queue rule still wins in light traffic.
              </p>
            )}

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
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="text-xl font-bold">Collaborations</h3>
        <p className="mt-1 text-muted">Projects built in collaboration.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {collaborations.map((c) => (
            <a
              key={c.title}
              href={c.repo}
              target="_blank"
              rel="noreferrer"
              className="card card-hover block p-5"
            >
              <p className="text-2xl" aria-hidden="true">{c.emoji}</p>
              <h4 className="mt-2 font-bold">{c.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{c.summary}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                View code <Icon name="arrow" className="h-4 w-4" />
              </p>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------- Skills ---------- */

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 60}>
            <div className="card h-full p-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">{g.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
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

type CertCard = { title: string; provider: string; emoji: string; file?: CertFile };

function buildCertCards(): CertCard[] {
  const used = new Set<string>();
  const cards: CertCard[] = certificates.map((c) => {
    const file = allCertFiles.find((f) => !used.has(f.name) && c.match.some((k) => f.name.toLowerCase().includes(k)));
    if (file) used.add(file.name);
    return { title: c.title, provider: c.provider, emoji: c.emoji, file };
  });
  // Files that match no card are still shown, so nothing you add goes missing.
  for (const f of allCertFiles) {
    if (!used.has(f.name)) cards.push({ title: prettify(f.name), provider: "Certificate", emoji: "📄", file: f });
  }
  return cards;
}

export function Certificates() {
  const cards = buildCertCards();
  return (
    <Section id="certificates" eyebrow="Certifications" title="Learning that backs it up">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <div className="card flex h-full flex-col p-5">
              {c.file && !c.file.isPdf && (
                <a href={c.file.url} target="_blank" rel="noreferrer" className="mb-4 block overflow-hidden rounded-lg border border-line">
                  <img
                    src={c.file.url}
                    alt={`${c.title} certificate`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top transition hover:scale-[1.02]"
                  />
                </a>
              )}
              <p className="text-3xl" aria-hidden="true">{c.emoji}</p>
              <h3 className="mt-3 font-bold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.provider}</p>
              {c.file && (
                <div className="mt-auto pt-4">
                  <a
                    href={c.file.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    View certificate <Icon name="external" className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <Reveal>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="hero-bg absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <p className="max-w-2xl text-xl leading-relaxed">
              Have an idea, a product or a team that needs <strong>AI, ML or full stack engineering</strong>? I'd like to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={`mailto:${profile.email}`} icon="mail">
                {profile.email}
              </LinkButton>
              <LinkButton href={profile.linkedin} variant="ghost" icon="linkedin">
                LinkedIn
              </LinkButton>
              <LinkButton href={profile.github} variant="ghost" icon="github">
                GitHub
              </LinkButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
