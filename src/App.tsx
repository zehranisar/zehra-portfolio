import { useEffect, useState } from "react";
import { profile } from "./data";
import { About, Certificates, Contact, Education, Experience, Hero, Projects, Skills } from "./sections";
import { Icon } from "./ui";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light",
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage may be unavailable */
    }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))] as const;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, toggle] = useTheme();

  return (
    <nav
      className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur"
      aria-label="Main"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display font-bold" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-accent font-display text-sm font-extrabold text-on-accent">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-md border border-line bg-surface text-ink transition-colors hover:border-accent"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-md border border-line bg-surface md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <ul className="border-t border-line px-5 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-ink hover:bg-surface"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <footer className="bg-hero py-8 text-center text-sm text-[#bdb2d6]">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
      </footer>
    </>
  );
}
