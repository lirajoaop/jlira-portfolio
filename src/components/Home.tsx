import { content, site, type Locale, type Project } from "@/content/content";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { FlowExplorer } from "./FlowExplorer";
import { ProjectGallery } from "./ProjectGallery";
import { StackExplorer } from "./StackExplorer";
import { RevealTitles } from "./RevealTitles";
import { blockLabel, ButtonLink, Icon, Monogram, Section, Tag } from "./ui";

export function Home({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <Hero locale={locale} />
      <main id="main">
        <Section id="experiencia" label={c.experience.label} title={c.experience.title}>
          <Experience locale={locale} />
        </Section>
        <Section id="projetos" label={c.projects.label} title={c.projects.title} lead={c.projects.lead}>
          <div className="divide-y divide-line">
            {c.projects.items.map((p, i) => (
              <ProjectCase key={p.slug} p={p} locale={locale} n={i + 1} total={c.projects.items.length} />
            ))}
          </div>
        </Section>
        <Section id="stack" label={c.stack.label} title={c.stack.title} soft>
          <StackExplorer groups={c.stack.groups} hint={c.stack.hint} coreLabel={c.stack.coreLabel} />
        </Section>
        <Section id="formacao" label={c.learning.label} title={c.learning.title}>
          <Learning locale={locale} />
        </Section>
        <Section id="publicacoes" label={c.publications.label} title={c.publications.title}>
          <Publications locale={locale} />
        </Section>
        <Section id="sobre" label={c.about.label} title={c.about.title}>
          <About locale={locale} />
        </Section>
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      <RevealTitles />
    </>
  );
}

/* ---------- Hero: the one bold element of the page ---------- */
function Hero({ locale }: { locale: Locale }) {
  const c = content[locale];
  const h = c.hero;
  const navLabel = locale === "pt" ? "Principal" : "Main";
  const bandLink = "rounded-sm text-band-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-band-ink";
  return (
    <header id="top" className="group/hero bg-band text-band-ink">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href={locale === "pt" ? "/" : "/en"} className={`text-[15px] font-bold ${bandLink}`}>
            jplira.dev
          </a>
          <nav aria-label={navLabel} className="hidden md:block">
            <ul className="flex items-center gap-7 text-[15px]">
              {c.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className={bandLink}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <MobileMenu label={c.ui.menu} navId="mobile-nav" />
            <a href={c.ui.switchLangHref} hrefLang={locale === "pt" ? "en" : "pt-BR"} className="grid h-9 place-items-center rounded-md border border-band-ink/60 px-2.5 text-sm font-medium transition-colors hover:bg-band-ink hover:text-band focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-band-ink">
              {c.ui.switchLang}
            </a>
            <ThemeToggle label={c.ui.toggleTheme} className="grid size-9 place-items-center rounded-md border border-band-ink/60 transition-colors hover:bg-band-ink hover:text-band focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-band-ink" />
          </div>
        </div>

        {/* Phone menu: opens inside the band and pushes the hero down; shown while the MobileMenu <details> is open */}
        <nav id="mobile-nav" aria-label={navLabel} className="hidden border-t border-band-ink/30 group-has-[details[open]]/hero:block md:hidden!">
          <ul>
            {c.nav.map((n) => (
              <li key={n.href} className="border-b border-band-ink/30">
                <a href={n.href} className="block py-3 text-2xl font-bold tracking-[-0.02em] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-band-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-8 pt-14 pb-20 sm:pt-20 sm:pb-28 md:grid-cols-[auto_minmax(0,1fr)] md:items-end md:gap-14">
          <Monogram draw className="size-28 sm:size-40 lg:size-56" j="var(--band-ink)" p="var(--band-deep)" />
          <div>
            <h1 className="text-[3.25rem] leading-[0.95] font-black tracking-[-0.035em] text-balance sm:text-7xl lg:text-[6.5rem]">{site.name}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-snug font-medium text-pretty sm:text-2xl">
              {h.title} {h.titleAccent}
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-pretty">{h.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projetos" className="inline-flex items-center rounded-md bg-band-ink px-5 py-3 text-[15px] font-bold text-band transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-band-ink">
                {h.ctaPrimary}
              </a>
              <a href={site.cv[locale]} download className="inline-flex items-center gap-2 rounded-md border-2 border-band-ink px-5 py-2.5 text-[15px] font-medium transition-colors hover:bg-band-ink hover:text-band focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-band-ink">
                <Icon.down /> {h.ctaSecondary}
              </a>
              {/* one unit, so the two icons wrap together on narrow screens; -ml-3 lines the icon glyph up with the text edge */}
              <div className="-ml-3 flex items-center gap-1">
                <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid size-11 place-items-center rounded-md hover:bg-band-ink/15 focus-visible:outline-2 focus-visible:outline-band-ink">
                  <Icon.github className="size-5" />
                </a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-11 place-items-center rounded-md hover:bg-band-ink/15 focus-visible:outline-2 focus-visible:outline-band-ink">
                  <Icon.linkedin className="size-5" />
                </a>
              </div>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-[15px]">
              {h.facts.map((f) => (
                <div key={f.k}>
                  <dt className="text-sm">{f.k}</dt>
                  <dd className="font-bold">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Experience ---------- */
function Experience({ locale }: { locale: Locale }) {
  const e = content[locale].experience;
  return (
    <div>
      <p className="text-xl font-bold">
        {e.company}, <span className="font-normal text-muted">{e.location}</span>
      </p>
      <p className="mt-1 text-muted">{e.companyAbout}</p>
      <ol className="timeline mt-8 space-y-12">
        {e.roles.map((r) => (
          <li key={r.title} data-current={r.current || undefined}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-bold">{r.title}</h3>
              <p className="text-[15px] text-muted">{r.period}</p>
            </div>
            <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- Projects ---------- */
function ProjectCase({ p, locale, n, total }: { p: Project; locale: Locale; n: number; total: number }) {
  const l = content[locale].projects;
  const pad = (x: number) => String(x).padStart(2, "0");
  return (
    <article id={p.slug} aria-labelledby={`${p.slug}-name`} className="py-16 first:pt-0 last:pb-0">
      <p className="flex items-baseline gap-3 font-medium text-accent">
        <span className="font-black tabular-nums">{pad(n)}<span className="font-medium text-muted">/{pad(total)}</span></span>
        <span aria-hidden className="h-px w-6 bg-accent/50 self-center" />
        {p.kicker}
      </p>
      <h3 id={`${p.slug}-name`} className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{p.name}</h3>
      <p className="mt-4 max-w-[68ch] text-lg leading-relaxed text-pretty">{p.tagline}</p>

      {p.images && <ProjectGallery shots={p.images} label={l.galleryLabel} />}
      {p.flow && <FlowExplorer steps={p.flow} label={l.flowLabel} hint={l.flowHint} />}

      {/* Three levels: section label (small, accent), item title (bold), body (muted) */}
      <dl className="mt-10 grid gap-8 leading-relaxed md:grid-cols-2 md:gap-10">
        <div>
          <dt className={blockLabel}>{l.problemLabel}</dt>
          <dd className="mt-2 text-muted">{p.problem}</dd>
        </div>
        <div>
          <dt className={blockLabel}>{l.solutionLabel}</dt>
          <dd className="mt-2 text-muted">{p.solution}</dd>
        </div>
      </dl>

      <h4 className={`mt-10 ${blockLabel}`}>{l.decisionsLabel}</h4>
      <dl className="mt-3 border-b border-line">
        {p.decisions.map((d) => (
          <div key={d.title} className="grid gap-1 border-t border-line py-4 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-8">
            <dt className="font-bold text-pretty">{d.title}</dt>
            <dd className="leading-relaxed text-muted">{d.body}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {p.links.map((lk) => (
          <ButtonLink key={lk.href} href={lk.href} variant={lk.primary ? "primary" : "ghost"} external>
            {!lk.primary && <Icon.github />}
            {lk.label}
          </ButtonLink>
        ))}
      </div>
    </article>
  );
}

/* ---------- Learning ---------- */
/** Two rows (degrees, courses); every entry has the same title weight, and the featured course keeps its modules in a card. */
function Learning({ locale }: { locale: Locale }) {
  const l = content[locale].learning;
  const f = l.featured;
  const meta = (it: (typeof l.items)[number]) => `${it.org}${it.period !== it.org && /\d/.test(it.period) ? `, ${it.period}` : ""}`;
  const pill = "rounded-full bg-accent-soft px-2.5 py-0.5 text-sm font-medium text-accent";
  const rows = [
    { name: l.degreesLabel, items: l.items.filter((it) => it.kind === "degree"), featured: false },
    { name: l.coursesLabel, items: l.items.filter((it) => it.kind === "course"), featured: true },
  ];
  return (
    <dl className="border-b border-line">
      {rows.map((r) => (
        <div key={r.name} className="grid gap-6 border-t border-line py-8 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-8">
          <dt className="font-bold text-accent">{r.name}</dt>
          <dd>
            <ul className="space-y-7">
              {r.featured && (
                <li>
                  <p className="text-lg font-bold leading-snug">{f.name}</p>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
                    {f.org} <span className={pill}>{f.badge}</span>
                  </p>
                  <p className="mt-2 max-w-[68ch] leading-relaxed text-muted">{f.body}</p>
                  <ol className="mt-4 grid gap-x-10 gap-y-5 rounded-md bg-surface-2 p-5 sm:grid-cols-2">
                    {f.modules.map((m) => (
                      <li key={m.n} className="flex gap-3">
                        <span className="font-black text-accent tabular-nums" aria-hidden>{m.n}</span>
                        <div>
                          <p className="font-bold leading-snug">{m.title}</p>
                          <p className="mt-1 text-[15px] leading-relaxed text-muted">{m.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </li>
              )}
              {r.items.map((it) => (
                <li key={it.title}>
                  <p className="text-lg font-bold leading-snug">{it.title}</p>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
                    {meta(it)} {it.note && <span className={pill}>{it.note}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Publications ---------- */
function Publications({ locale }: { locale: Locale }) {
  const pb = content[locale].publications;
  return (
    <ul className="border-b border-line">
      {pb.items.map((it) => (
        <li key={it.href} className="grid gap-1 border-t border-line py-5 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] md:gap-8">
          <p className="text-[15px] text-muted">{it.date} · LinkedIn</p>
          <div className="max-w-[68ch]">
            <h3 className="text-lg font-bold text-pretty">
              <a href={it.href} target="_blank" rel="noopener noreferrer" className="group rounded-sm hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                {it.title.slice(0, it.title.lastIndexOf(" ") + 1)}
                {/* last word and arrow never wrap apart */}
                <span className="whitespace-nowrap">
                  {it.title.slice(it.title.lastIndexOf(" ") + 1)}
                  <Icon.arrow className="ml-1 inline size-4 align-[-0.1em] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                </span>
                <span className="sr-only">({pb.readLabel})</span>
              </a>
            </h3>
            <p className="mt-1 leading-relaxed text-muted">{it.summary}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/* ---------- About ---------- */
function About({ locale }: { locale: Locale }) {
  const a = content[locale].about;
  return (
    <div>
      <div className="max-w-[68ch] space-y-5 text-lg leading-relaxed text-pretty">
        {a.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <h3 className={`mt-14 ${blockLabel}`}>{a.principlesTitle}</h3>
      <ul className="mt-3 grid gap-x-10 gap-y-6 border-t border-line pt-6 md:grid-cols-3">
        {a.principles.map((p) => (
          <li key={p.title}>
            <p className="font-bold">{p.title}</p>
            <p className="mt-1 leading-relaxed text-muted">{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Contact ---------- */
/** Closing band in the hero's color, so the page opens and ends on the same identity. */
function Contact({ locale }: { locale: Locale }) {
  const c = content[locale];
  const k = c.contact;
  return (
    <div className="bg-band text-band-ink">
      <section id="contato" aria-labelledby="contato-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 id="contato-title" className="reveal text-4xl font-black tracking-[-0.03em] text-balance [--reveal-block:var(--band-deep)] [--reveal-ink:var(--band-ink)] sm:text-5xl">{k.title}</h2>
        <p className="mt-3 max-w-[60ch] text-lg leading-relaxed text-pretty">{k.body}</p>
        <a href={`mailto:${site.email}`} className="mt-8 inline-block rounded-sm text-xl font-bold break-all underline decoration-band-ink/60 decoration-2 underline-offset-[6px] hover:decoration-band-ink hover:decoration-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-band-ink sm:text-2xl">
          {site.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={site.linkedin} variant="band" external>
            <Icon.linkedin /> LinkedIn
          </ButtonLink>
          <ButtonLink href={site.github} variant="band" external>
            <Icon.github /> GitHub
          </ButtonLink>
          <ButtonLink href={site.cv[locale]} variant="band" download>
            <Icon.down /> {c.ui.cv}
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="flex items-center gap-2">
          <Monogram className="size-5" /> © {new Date().getFullYear()} {site.name}
        </p>
        <p>{c.footer}</p>
        <a href="#top" className="inline-flex items-center gap-1.5 self-start rounded-sm py-1 font-medium transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:self-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-4">
            <path d="M12 19V5m0 0-6 6m6-6 6 6" />
          </svg>
          {c.ui.backToTop}
        </a>
      </div>
    </footer>
  );
}
