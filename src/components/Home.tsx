import Image from "next/image";
import { content, site, type Locale, type Project } from "@/content/content";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink, Icon, Section, Tag } from "./ui";

export function Home({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <Header locale={locale} />
      <main id="main">
        <Hero locale={locale} />
        <Impact locale={locale} />
        <Section id="experiencia" index="01" label={c.experience.label} title={c.experience.title}>
          <Experience locale={locale} />
        </Section>
        <div className="border-y border-line bg-surface/50">
          <Section id="projetos" index="02" label={c.projects.label} title={c.projects.title} lead={c.projects.lead}>
            <div className="space-y-10">
              {c.projects.items.map((p, i) => (
                <ProjectCase key={p.slug} p={p} locale={locale} reverse={i % 2 === 1} />
              ))}
            </div>
          </Section>
        </div>
        <Section id="stack" index="03" label={c.stack.label} title={c.stack.title}>
          <StackGrid locale={locale} />
        </Section>
        <div className="border-y border-line bg-surface/50">
          <Section id="formacao" index="04" label={c.learning.label} title={c.learning.title}>
            <Learning locale={locale} />
          </Section>
        </div>
        <Section id="sobre" index="05" label={c.about.label} title={c.about.title}>
          <About locale={locale} />
        </Section>
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

/* ---------- Header ---------- */
function Header({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href={locale === "pt" ? "/" : "/en"} className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-accent">~/</span>jplira
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {c.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-fg">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={c.ui.switchLangHref} hrefLang={locale === "pt" ? "en" : "pt-BR"} className="grid h-9 place-items-center rounded-lg border border-line px-2.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent">
            {c.ui.switchLang}
          </a>
          <ThemeToggle label={c.ui.toggleTheme} />
          <a href={site.cv} download className="hidden h-9 items-center gap-1.5 rounded-lg bg-fg px-3 text-xs font-medium text-bg transition-opacity hover:opacity-85 sm:inline-flex">
            <Icon.down className="size-3.5" /> {c.ui.cv}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ locale }: { locale: Locale }) {
  const h = content[locale].hero;
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-10">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="pulse-dot size-2 rounded-full bg-ok" aria-hidden />
            {h.status}
          </p>
          <p className="rise rise-1 mt-6 font-mono text-sm text-accent">{h.eyebrow}</p>
          <h1 className="rise rise-1 mt-3 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            {h.title} <span className="text-muted">{h.titleAccent}</span>
          </h1>
          <p className="rise rise-2 mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">{h.lead}</p>
          <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projetos">{h.ctaPrimary}</ButtonLink>
            <ButtonLink href={site.cv} variant="ghost" download>
              <Icon.down /> {h.ctaSecondary}
            </ButtonLink>
            <div className="flex items-center gap-1 pl-1">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid size-10 place-items-center rounded-lg text-muted transition-colors hover:text-fg">
                <Icon.github className="size-5" />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-10 place-items-center rounded-lg text-muted transition-colors hover:text-fg">
                <Icon.linkedin className="size-5" />
              </a>
            </div>
          </div>
          <dl className="rise rise-3 mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-line pt-6 sm:grid-cols-3">
            {h.facts.map((f) => (
              <div key={f.k}>
                <dt className="font-mono text-[11px] tracking-wider text-muted uppercase">{f.k}</dt>
                <dd className="mt-1 text-sm font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <CodeCard locale={locale} />
      </div>
    </section>
  );
}

function CodeCard({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  const K = ({ children }: { children: string }) => <span style={{ color: "var(--code-kw)" }}>{children}</span>;
  const S = ({ children }: { children: string }) => <span style={{ color: "var(--code-str)" }}>{children}</span>;
  const F = ({ children }: { children: string }) => <span style={{ color: "var(--code-field)" }}>{children}</span>;
  const C = ({ children }: { children: string }) => <span style={{ color: "var(--code-comment)" }}>{children}</span>;
  return (
    <figure className="rise rise-2 overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)]" aria-label={pt ? "Resumo em código Go" : "Summary as Go code"}>
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-muted">dev.go</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:text-[13px]">
        <code>
          <K>package</K> main{"\n\n"}
          <C>{pt ? "// o que eu entrego, da interface ao servidor" : "// what I ship, from UI to server"}</C>{"\n"}
          <K>var</K> joao = Dev{"{"}{"\n"}
          {"  "}<F>Name</F>:{"     "}<S>{'"João Pedro Lira"'}</S>,{"\n"}
          {"  "}<F>Role</F>:{"     "}<S>{'"Fullstack @ PontoGO"'}</S>,{"\n"}
          {"  "}<F>Backend</F>:{"  "}[]<K>string</K>{"{"}<S>{'"Go"'}</S>, <S>{'"Redis"'}</S>, <S>{'"Postgres"'}</S>{"}"},{"\n"}
          {"  "}<F>Frontend</F>: []<K>string</K>{"{"}<S>{'"Next.js"'}</S>, <S>{'"React"'}</S>, <S>{'"RN"'}</S>{"}"},{"\n"}
          {"  "}<F>Observe</F>:{"  "}[]<K>string</K>{"{"}<S>{'"Grafana"'}</S>, <S>{'"Prometheus"'}</S>{"}"},{"\n"}
          {"  "}<F>Learning</F>: <S>{pt ? '"Eng. de Software + IA"' : '"Software Eng. + AI"'}</S>,{"\n"}
          {"}"}{"\n\n"}
          <K>func</K> main() {"{"}{"\n"}
          {"  "}joao.<F>Ship</F>(ctx, <S>{pt ? '"seu próximo produto"' : '"your next product"'}</S>){"\n"}
          {"}"}
        </code>
      </pre>
    </figure>
  );
}

/* ---------- Impact ---------- */
function Impact({ locale }: { locale: Locale }) {
  const i = content[locale].impact;
  return (
    <section aria-labelledby="impact-title" className="border-y border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 id="impact-title" className="font-mono text-xs tracking-wider text-muted uppercase">
          {i.title}
        </h2>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {i.items.map((it) => (
            <li key={it.title} className="bg-surface p-5">
              <p className="font-semibold">{it.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{it.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Experience ---------- */
function Experience({ locale }: { locale: Locale }) {
  const e = content[locale].experience;
  return (
    <div className="grid gap-8 md:grid-cols-[220px_1fr]">
      <div>
        <p className="text-xl font-semibold">{e.company}</p>
        <p className="mt-1 text-sm text-muted">{e.location}</p>
      </div>
      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-8">
        {e.roles.map((r) => (
          <li key={r.title} className="relative">
            <span className={`absolute top-1.5 -left-[29px] size-2.5 rounded-full ring-4 ring-bg sm:-left-[37px] ${r.current ? "bg-accent" : "bg-line"}`} aria-hidden />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="font-mono text-xs text-muted">{r.period}</p>
            </div>
            <ul className="mt-4 space-y-2.5">
              {r.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- Projects ---------- */
function ProjectCase({ p, locale, reverse }: { p: Project; locale: Locale; reverse: boolean }) {
  const l = content[locale].projects;
  return (
    <article id={p.slug} className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="p-6 sm:p-10">
          <p className="font-mono text-xs text-accent">{p.kicker}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{p.name}</h3>
          <p className="mt-4 leading-relaxed text-muted text-pretty">{p.tagline}</p>
          <dl className="mt-6 space-y-4 text-[15px] leading-relaxed">
            <div>
              <dt className="font-mono text-[11px] tracking-wider text-muted uppercase">{l.problemLabel}</dt>
              <dd className="mt-1">{p.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-wider text-muted uppercase">{l.solutionLabel}</dt>
              <dd className="mt-1">{p.solution}</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.links.map((lk) => (
              <ButtonLink key={lk.href} href={lk.href} variant={lk.primary ? "primary" : "ghost"} external>
                {!lk.primary && <Icon.github />}
                {lk.label}
                {lk.primary && <Icon.arrow />}
              </ButtonLink>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 border-t border-line bg-surface-2 p-6 sm:p-10 lg:border-t-0 lg:border-l">
          {p.images && (
            <div className="relative">
              <Image src={p.images[0].src} alt={p.images[0].alt} width={1920} height={985} sizes="(min-width: 1024px) 560px, 100vw" className="rounded-lg border border-line" />
              {p.images[1] && (
                <Image src={p.images[1].src} alt={p.images[1].alt} width={1920} height={985} sizes="240px" className="absolute -bottom-5 -left-3 hidden w-[44%] rounded-md border border-line shadow-xl sm:block" />
              )}
            </div>
          )}
          {p.flow && <Flow steps={p.flow} label={l.flowLabel} />}
          <div className={p.images ? "mt-4" : ""}>
            <p className="font-mono text-[11px] tracking-wider text-muted uppercase">{l.decisionsLabel}</p>
            <ul className="mt-3 space-y-3">
              {p.decisions.map((d) => (
                <li key={d.title} className="rounded-lg border border-line bg-surface p-4">
                  <p className="text-sm font-semibold">{d.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{d.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function Flow({ steps, label }: { steps: string[]; label: string }) {
  return (
    <figure className="rounded-lg border border-line bg-surface p-4">
      <figcaption className="font-mono text-[11px] tracking-wider text-muted uppercase">{label}</figcaption>
      <ol className="mt-4 flex flex-wrap items-center gap-y-2 font-mono text-xs">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center">
            <span className={`rounded-md border px-2 py-1 ${i === 0 || i === steps.length - 1 ? "border-line text-muted" : "border-accent/50 bg-accent-soft text-accent"}`}>{s}</span>
            {i < steps.length - 1 && <span className="px-1.5 text-muted" aria-hidden>→</span>}
          </li>
        ))}
      </ol>
    </figure>
  );
}

/* ---------- Stack ---------- */
function StackGrid({ locale }: { locale: Locale }) {
  const s = content[locale].stack;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {s.groups.map((g) => (
        <div key={g.name} className="rounded-xl border border-line bg-surface p-5">
          <p className="font-mono text-xs text-accent">{g.name}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {g.items.map((it) => (
              <li key={it} className="rounded-md bg-surface-2 px-2.5 py-1 text-sm">{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ---------- Learning ---------- */
function Learning({ locale }: { locale: Locale }) {
  const l = content[locale].learning;
  const f = l.featured;
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className="rounded-2xl border border-accent/40 bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent">{f.badge}</span>
          <span className="text-xs text-muted">{f.org}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">{f.name}</h3>
        <p className="mt-2 text-muted">{f.body}</p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {f.modules.map((m) => (
            <li key={m.n} className="rounded-lg border border-line bg-surface-2 p-4">
              <p className="font-mono text-xs text-accent">{m.n}</p>
              <p className="mt-1 text-sm font-semibold">{m.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {l.items.map((it) => (
          <li key={it.title} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-medium leading-snug">{it.title}</p>
              {it.note && <span className="shrink-0 rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-muted">{it.note}</span>}
            </div>
            <p className="mt-1 text-sm text-muted">
              {it.org}
              {it.period !== it.org && it.period.match(/\d/) ? ` · ${it.period}` : ""}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- About ---------- */
function About({ locale }: { locale: Locale }) {
  const a = content[locale].about;
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-4 text-lg leading-relaxed text-pretty">
        {a.paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "" : "text-muted"}>{p}</p>
        ))}
      </div>
      <div>
        <p className="font-mono text-[11px] tracking-wider text-muted uppercase">{a.principlesTitle}</p>
        <ul className="mt-4 space-y-4">
          {a.principles.map((p, i) => (
            <li key={p.title} className="flex gap-4">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <div>
                <p className="font-semibold">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Contact ---------- */
function Contact({ locale }: { locale: Locale }) {
  const c = content[locale];
  const k = c.contact;
  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="relative">
          <p className="font-mono text-xs tracking-wider text-accent uppercase">
            <span className="text-muted">06 /</span> {k.label}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{k.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted text-pretty">{k.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`mailto:${site.email}`}>
              <Icon.mail /> {k.email}
            </ButtonLink>
            <ButtonLink href={site.linkedin} variant="ghost" external>
              <Icon.linkedin /> LinkedIn
            </ButtonLink>
            <ButtonLink href={site.github} variant="ghost" external>
              <Icon.github /> GitHub
            </ButtonLink>
            <ButtonLink href={site.cv} variant="ghost" download>
              <Icon.down /> {c.ui.cv}
            </ButtonLink>
          </div>
          <p className="mt-6 font-mono text-xs break-all text-muted">{site.email}</p>
        </div>
      </div>
    </section>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{c.footer}</p>
      </div>
    </footer>
  );
}
