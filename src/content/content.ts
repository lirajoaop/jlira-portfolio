// Todo o conteúdo do site vive aqui. Para atualizar o portfólio, edite este arquivo.
// All site copy lives here. To update the portfolio, edit this file only.

export type Locale = "pt" | "en";

export const site = {
  url: "https://jplira.dev",
  name: "João Pedro Lira",
  email: "contact.dev.jplira@gmail.com",
  github: "https://github.com/lirajoaop",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-lira/",
  // One résumé per language: PT at "/", EN at "/en".
  cv: { pt: "/curriculo-joao-pedro-lira.pdf", en: "/resume-joao-pedro-lira.pdf" } satisfies Record<Locale, string>,
};

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  problem: string;
  solution: string;
  decisions: { title: string; body: string }[];
  stack: string[];
  links: { label: string; href: string; primary?: boolean }[];
  images?: { src: string; alt: string }[];
  flow?: string[];
};

export type Content = {
  meta: { title: string; description: string; ogLocale: string };
  nav: { label: string; href: string }[];
  ui: {
    cv: string;
    switchLang: string;
    switchLangHref: string;
    toggleTheme: string;
    skip: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: { k: string; v: string }[];
  };
  experience: {
    label: string;
    title: string;
    company: string;
    location: string;
    roles: { title: string; period: string; current?: boolean; bullets: string[] }[];
  };
  projects: {
    label: string;
    title: string;
    lead: string;
    problemLabel: string;
    solutionLabel: string;
    decisionsLabel: string;
    flowLabel: string;
    items: Project[];
  };
  stack: {
    label: string;
    title: string;
    groups: { name: string; items: string[] }[];
  };
  learning: {
    label: string;
    title: string;
    featured: {
      badge: string;
      name: string;
      org: string;
      body: string;
      modules: { n: string; title: string; body: string }[];
    };
    items: { title: string; org: string; period: string; note?: string }[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    principlesTitle: string;
    principles: { title: string; body: string }[];
  };
  contact: {
    label: string;
    title: string;
    body: string;
    email: string;
  };
  footer: string;
};

const pt: Content = {
  meta: {
    title: "João Pedro Lira | Desenvolvedor Fullstack (Go + Next.js)",
    description:
      "Desenvolvedor Fullstack na PontoGO. APIs em Go com concorrência e cache em Redis, interfaces em React/Next.js, apps em React Native e integrações com LLMs.",
    ogLocale: "pt_BR",
  },
  nav: [
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Stack", href: "#stack" },
    { label: "Formação", href: "#formacao" },
    { label: "Contato", href: "#contato" },
  ],
  ui: {
    cv: "Currículo",
    switchLang: "EN",
    switchLangHref: "/en",
    toggleTheme: "Alternar tema",
    skip: "Pular para o conteúdo",
  },
  hero: {
    eyebrow: "Desenvolvedor Fullstack · Go + Next.js",
    title: "Faço backends rápidos em Go",
    titleAccent: "e interfaces que as pessoas entendem.",
    lead:
      "Sou fullstack na PontoGO. Trabalho com APIs em Go, cache em Redis e apps em React, Next.js e React Native rodando em produção. Me formei em Psicologia, e isso me deixou com o costume de entender o problema antes de pensar no código.",
    ctaPrimary: "Ver projetos",
    ctaSecondary: "Baixar currículo",
    facts: [
      { k: "Atualmente", v: "Fullstack @ PontoGO" },
      { k: "Local", v: "Fortaleza, CE" },
      { k: "Idiomas", v: "PT nativo, EN avançado" },
    ],
  },
  experience: {
    label: "Experiência",
    title: "O que eu já entreguei em produção",
    company: "PontoGO",
    location: "Fortaleza, CE",
    roles: [
      {
        title: "Desenvolvedor Fullstack",
        period: "mai/2025 até hoje",
        current: true,
        bullets: [
          "Implementei caches com Redis e a invalidação deles, como parte do projeto de cache da plataforma.",
          "Desenvolvo e otimizo APIs em Go, usando concorrência para ganhar desempenho e baixar a latência.",
          "Faço o fullstack em React, Next.js e TailwindCSS e os apps mobile em React Native.",
          "Usei Grafana e Prometheus para acompanhar as métricas da plataforma.",
          "Sou responsável por deploys e pela publicação de aplicativos em produção.",
          "Modelo e integro dados no Firestore e corrijo bugs para manter o sistema estável.",
          "Treino e acompanho estagiários e participo das entrevistas técnicas.",
        ],
      },
      {
        title: "Estagiário de Desenvolvimento",
        period: "out/2024 a mai/2025",
        bullets: [
          "Implementei Dark Mode em toda a aplicação, com consistência visual entre as telas.",
          "Construí telas novas, da interface à lógica, e melhorei fluxos que já existiam.",
          "Corrigi bugs e refinei componentes do frontend.",
        ],
      },
    ],
  },
  projects: {
    label: "Projetos",
    title: "Estudos de caso",
    lead: "Os dois estão no ar e o código é aberto. Em cada um conto o problema, as decisões técnicas e o porquê delas.",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    decisionsLabel: "Decisões técnicas",
    flowLabel: "Fluxo de uma requisição",
    items: [
      {
        slug: "psiencontra",
        name: "PsiEncontra",
        kicker: "Psicologia + Engenharia + IA",
        tagline:
          "Uma plataforma que ajuda estudantes de Psicologia a descobrir com quais abordagens teóricas e campos de atuação têm mais afinidade. É onde as minhas duas formações se juntam.",
        problem:
          "Nos primeiros semestres, o estudante de Psicologia se depara com várias abordagens (Psicanálise, TCC, Gestalt, Fenomenologia…) e vários campos de atuação, e não tem ferramentas práticas para refletir sobre as próprias inclinações.",
        solution:
          "Há dois modos de questionário. No simples, uma IA interpreta respostas abertas. No detalhado, são cerca de 76 itens Likert pontuados por um algoritmo determinístico. O resultado mostra rankings de 8 abordagens e 9 campos, gráficos radar, explicações personalizadas e um PDF para exportar.",
        decisions: [
          {
            title: "Pontuação determinística em Go",
            body: "No modo detalhado uso normalização ipsativa, que mede o desvio de cada pessoa em relação à própria média. Isso anula o viés de aquiescência e torna o resultado reproduzível. A IA só escreve os textos, não dá a nota.",
          },
          {
            title: "IA com fallback automático",
            body: "O provedor principal é o Gemini Flash-Lite. Se ele falhar, o sistema passa para o Groq (Llama 3.3 70B) e o usuário não fica sem resposta.",
          },
          {
            title: "Rate limiting por escopo",
            body: "Token bucket por IP: 60 req/min no geral, 10 nas rotas de autenticação e 5 no envio de respostas, que é a rota mais cara.",
          },
          {
            title: "Fluxo anônimo com claim",
            body: "Dá para responder sem ter conta. Depois, ao fazer login, a pessoa vincula a sessão à conta (JWT por cookie ou Bearer, Google OAuth, bcrypt).",
          },
          {
            title: "Artefatos gerados no servidor",
            body: "O PDF é gerado em Go com gofpdf e o Story de 1080×1920 com QR code sai do next/og, para compartilhar o resultado.",
          },
        ],
        stack: ["Go", "Gin", "GORM", "PostgreSQL", "Next.js 16", "React 19", "Tailwind 4", "Recharts", "Gemini", "Groq", "Docker", "Railway", "Vercel"],
        links: [
          { label: "Ver ao vivo", href: "https://psiencontra.vercel.app", primary: true },
          { label: "Código", href: "https://github.com/lirajoaop/psiencontra" },
        ],
        images: [
          { src: "/projects/result.png", alt: "Tela de resultado do PsiEncontra com gráficos radar de abordagens teóricas e campos de atuação" },
          { src: "/projects/landing.png", alt: "Página inicial do PsiEncontra" },
        ],
      },
      {
        slug: "gopportunities",
        name: "Go Opportunities",
        kicker: "API REST em Go + Frontend Next.js",
        tagline:
          "Uma plataforma completa para gerenciar vagas de emprego, com API em Go organizada em camadas e frontend em React 19 e Next.js. Está em produção com frontend, backend e banco hospedados separadamente.",
        problem:
          "Eu queria uma base de API em Go que fosse fácil de manter, testar e evoluir, e que tivesse um frontend de verdade consumindo ela em produção. Um CRUD de exemplo não resolvia isso.",
        solution:
          "A API foi feita com Gin e GORM em Handler, Service e Repository, documentada com Swagger e empacotada em Docker multi-stage. O frontend tem busca em tempo real, filtros por modalidade, dashboard de estatísticas, validação de formulário, toasts e Dark Mode.",
        decisions: [
          {
            title: "Arquitetura em camadas",
            body: "O HTTP, as regras de negócio e o acesso a dados ficam separados. Assim dá para trocar o banco ou testar uma regra sem mexer no resto.",
          },
          {
            title: "Contrato documentado",
            body: "O Swagger é gerado a partir do código com swag, então a documentação da API não fica desatualizada.",
          },
          {
            title: "Deploy desacoplado",
            body: "Frontend na Vercel, API no Render e PostgreSQL gerenciado no Neon. Cada parte escala e é publicada sem depender das outras.",
          },
          {
            title: "Imagem enxuta",
            body: "O Dockerfile multi-stage compila o binário Go numa etapa e entrega uma imagem final pequena.",
          },
        ],
        flow: ["Client", "Router", "Handler", "Service", "Repository", "PostgreSQL"],
        stack: ["Go", "Gin", "GORM", "PostgreSQL", "Swagger", "Docker", "Next.js 16", "React 19", "Tailwind 4", "Vercel", "Render", "Neon"],
        links: [
          { label: "Ver ao vivo", href: "https://gopportunities-front-end.vercel.app", primary: true },
          { label: "API (código)", href: "https://github.com/lirajoaop/gopportunities" },
          { label: "Frontend (código)", href: "https://github.com/lirajoaop/gopportunities-front-end" },
        ],
      },
    ],
  },
  stack: {
    label: "Stack",
    title: "Ferramentas que uso no dia a dia",
    groups: [
      { name: "Backend", items: ["Go (Golang)", "Gin", "GORM", "APIs REST", "Concorrência", "Swagger"] },
      { name: "Frontend", items: ["React", "Next.js", "React Native", "JavaScript", "TailwindCSS", "Recharts"] },
      { name: "Dados", items: ["PostgreSQL", "Redis", "MongoDB", "Firestore", "SQLite"] },
      { name: "Infra & Observabilidade", items: ["Docker", "Grafana", "Prometheus", "Vercel", "Render", "Railway", "Neon"] },
      { name: "IA", items: ["Integração com LLMs", "Gemini", "Groq / Llama", "Fallback entre provedores"] },
    ],
  },
  learning: {
    label: "Formação",
    title: "Continuo estudando",
    featured: {
      badge: "Em conclusão em 2026",
      name: "Engenharia de Software com IA",
      org: "Geração Tech 4.0, FullCycle, 96h",
      body: "Um programa de engenharia de software com IA aplicada ao ciclo inteiro de desenvolvimento, do ambiente ao system design.",
      modules: [
        { n: "01", title: "Engenharia de Software e IA aplicada", body: "Ambiente com Docker, revisão de POO, SOLID e Clean Architecture, e IA para refatoração, code review e geração de código." },
        { n: "02", title: "Qualidade de software e testes com IA", body: "Pirâmide de testes, testes automatizados gerados e analisados com IA, e pipelines de CI/CD com inspeção contínua." },
        { n: "03", title: "Workflows com IA, APIs e LLMs", body: "Consumo de APIs de IA, criação de assistentes, automação com n8n e um microsserviço com IA." },
        { n: "04", title: "System design e arquitetura escalável", body: "Como desenhar sistemas que crescem, com IA no processo de arquitetura." },
      ],
    },
    items: [
      { title: "Análise e Desenvolvimento de Sistemas", org: "UNIGRANDE", period: "2025 a 2027", note: "Em andamento" },
      { title: "Bacharelado em Psicologia", org: "Universidade Federal do Ceará (UFC)", period: "2020 a 2025" },
      { title: "Geração Tech 3.0: IA e Soft Skills para Programadores", org: "Top 50, Medalha de Prata", period: "Certificação" },
      { title: "Introdução ao Go", org: "Certificação", period: "Certificação" },
      { title: "Geração Tech 2.0", org: "Certificação", period: "Certificação" },
    ],
  },
  about: {
    label: "Sobre",
    title: "Da Psicologia para a engenharia",
    paragraphs: [
      "Me formei em Psicologia na UFC, com foco em Psicologia do Trabalho. Fiz parte do NUTRA, o núcleo de Psicologia do Trabalho da universidade, e estagiei em recrutamento e seleção no SINE/IDT.",
      "A virada veio no Na Lida da Vida, um projeto de extensão da UFC sobre o sentido do trabalho e a orientação para o mercado. Enquanto ajudava estudantes a pensar no próprio caminho, fiz a mesma pergunta para mim e percebi que queria construir software. Mudei de rota e fiquei.",
      "Isso aparece no trabalho de duas formas: tento entender bem o problema e quem vai usar o sistema antes de abrir o editor, e me comunico com clareza na hora de alinhar requisitos, dar feedback ou acompanhar alguém que está começando.",
    ],
    principlesTitle: "Como eu trabalho",
    principles: [
      { title: "Problema antes da ferramenta", body: "Primeiro entendo o que precisa ser resolvido. A tecnologia vem depois." },
      { title: "Simples e observável", body: "Prefiro código que qualquer pessoa do time consegue ler, com métricas para saber como ele se comporta em produção." },
      { title: "Entrega de ponta a ponta", body: "Vou do banco de dados à interface, passando pelo deploy." },
    ],
  },
  contact: {
    label: "Contato",
    title: "Vamos conversar?",
    body: "Gosto de conversar sobre Go, backend e produtos bem feitos. Se quiser trocar uma ideia, me chama.",
    email: "Enviar e-mail",
  },
  footer: "Feito com Next.js e Tailwind CSS, publicado na Vercel.",
};

const en: Content = {
  meta: {
    title: "João Pedro Lira | Fullstack Developer (Go + Next.js)",
    description:
      "Fullstack Developer at PontoGO. Concurrent Go APIs with Redis caching, React/Next.js interfaces, React Native apps, and LLM integrations.",
    ogLocale: "en_US",
  },
  nav: [
    { label: "Experience", href: "#experiencia" },
    { label: "Projects", href: "#projetos" },
    { label: "Stack", href: "#stack" },
    { label: "Education", href: "#formacao" },
    { label: "Contact", href: "#contato" },
  ],
  ui: {
    cv: "Résumé",
    switchLang: "PT",
    switchLangHref: "/",
    toggleTheme: "Toggle theme",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Fullstack Developer · Go + Next.js",
    title: "I build fast Go backends",
    titleAccent: "and interfaces people understand.",
    lead:
      "I'm a fullstack developer at PontoGO. I work on Go APIs, Redis caching, and React, Next.js and React Native apps that run in production. I have a degree in Psychology, which left me with the habit of understanding the problem before thinking about code.",
    ctaPrimary: "See projects",
    ctaSecondary: "Download résumé",
    facts: [
      { k: "Currently", v: "Fullstack @ PontoGO" },
      { k: "Location", v: "Fortaleza, Brazil" },
      { k: "Languages", v: "PT native, EN advanced" },
    ],
  },
  experience: {
    label: "Experience",
    title: "What I've shipped to production",
    company: "PontoGO",
    location: "Fortaleza, Brazil",
    roles: [
      {
        title: "Fullstack Developer",
        period: "May 2025 to present",
        current: true,
        bullets: [
          "Implemented Redis caches and their invalidation as part of the platform's caching project.",
          "Build and tune Go APIs, using concurrency for better throughput and lower latency.",
          "Do fullstack work in React, Next.js and TailwindCSS, plus mobile apps in React Native.",
          "Used Grafana and Prometheus to track platform metrics.",
          "Own deployments and app releases to production.",
          "Model and integrate data in Firestore and fix bugs to keep the system stable.",
          "Train and mentor interns and take part in technical interviews.",
        ],
      },
      {
        title: "Software Development Intern",
        period: "Oct 2024 to May 2025",
        bullets: [
          "Shipped Dark Mode across the whole application with consistent visuals between screens.",
          "Built new screens, from UI to logic, and improved existing flows.",
          "Fixed bugs and refined frontend components.",
        ],
      },
    ],
  },
  projects: {
    label: "Projects",
    title: "Case studies",
    lead: "Both are live and open source. For each one I cover the problem, the technical decisions and the reasons behind them.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    decisionsLabel: "Technical decisions",
    flowLabel: "How a request flows",
    items: [
      {
        slug: "psiencontra",
        name: "PsiEncontra",
        kicker: "Psychology + Engineering + AI",
        tagline:
          "A platform that helps Psychology students find which theoretical approaches and fields of practice they relate to most. It's where my two backgrounds come together.",
        problem:
          "Early on, Psychology students run into many approaches (Psychoanalysis, CBT, Gestalt, Phenomenology…) and many fields of practice, with no practical tools to reflect on their own inclinations.",
        solution:
          "There are two questionnaire modes. In the simple one, an AI interprets open-ended answers. The detailed one has about 76 Likert items scored by a deterministic algorithm. The output is a ranking of 8 approaches and 9 fields, radar charts, personalized explanations and a PDF export.",
        decisions: [
          { title: "Deterministic scoring in Go", body: "The detailed mode uses ipsative normalization, which measures each person's deviation from their own mean. That cancels acquiescence bias and makes results reproducible. The AI only writes the text; it doesn't produce the score." },
          { title: "AI with automatic fallback", body: "Gemini Flash-Lite is the primary provider. If it fails, the system switches to Groq (Llama 3.3 70B), so users still get an answer." },
          { title: "Scoped rate limiting", body: "Per-IP token bucket: 60 req/min overall, 10 on auth routes and 5 on answer submission, the most expensive route." },
          { title: "Anonymous flow with claim", body: "You can answer without an account. After signing in, you link that session to your account (JWT via cookie or Bearer, Google OAuth, bcrypt)." },
          { title: "Server-generated artifacts", body: "The PDF is generated in Go with gofpdf, and the 1080×1920 Story image with a QR code comes from next/og, for sharing results." },
        ],
        stack: ["Go", "Gin", "GORM", "PostgreSQL", "Next.js 16", "React 19", "Tailwind 4", "Recharts", "Gemini", "Groq", "Docker", "Railway", "Vercel"],
        links: [
          { label: "Live demo", href: "https://psiencontra.vercel.app", primary: true },
          { label: "Code", href: "https://github.com/lirajoaop/psiencontra" },
        ],
        images: [
          { src: "/projects/result.png", alt: "PsiEncontra results screen with radar charts for theoretical approaches and fields of practice" },
          { src: "/projects/landing.png", alt: "PsiEncontra landing page" },
        ],
      },
      {
        slug: "gopportunities",
        name: "Go Opportunities",
        kicker: "Go REST API + Next.js frontend",
        tagline:
          "A full platform for managing job openings, with a layered Go API and a React 19 and Next.js frontend. It runs in production with frontend, backend and database hosted separately.",
        problem:
          "I wanted a Go API base that was easy to maintain, test and extend, with a real frontend consuming it in production. A sample CRUD didn't cover that.",
        solution:
          "The API uses Gin and GORM in Handler, Service and Repository layers, is documented with Swagger and is packaged with a multi-stage Docker build. The frontend has real-time search, work-type filters, a stats dashboard, form validation, toasts and Dark Mode.",
        decisions: [
          { title: "Layered architecture", body: "HTTP, business rules and data access are kept apart, so I can swap the database or test a rule without touching the rest." },
          { title: "Documented contract", body: "Swagger is generated from the code with swag, so the API docs don't go out of date." },
          { title: "Decoupled deploys", body: "Frontend on Vercel, API on Render and managed PostgreSQL on Neon. Each part scales and ships without depending on the others." },
          { title: "Lean image", body: "The multi-stage Dockerfile compiles the Go binary in one stage and ships a small final image." },
        ],
        flow: ["Client", "Router", "Handler", "Service", "Repository", "PostgreSQL"],
        stack: ["Go", "Gin", "GORM", "PostgreSQL", "Swagger", "Docker", "Next.js 16", "React 19", "Tailwind 4", "Vercel", "Render", "Neon"],
        links: [
          { label: "Live demo", href: "https://gopportunities-front-end.vercel.app", primary: true },
          { label: "API code", href: "https://github.com/lirajoaop/gopportunities" },
          { label: "Frontend code", href: "https://github.com/lirajoaop/gopportunities-front-end" },
        ],
      },
    ],
  },
  stack: {
    label: "Stack",
    title: "Tools I use every day",
    groups: [
      { name: "Backend", items: ["Go (Golang)", "Gin", "GORM", "REST APIs", "Concurrency", "Swagger"] },
      { name: "Frontend", items: ["React", "Next.js", "React Native", "JavaScript", "TailwindCSS", "Recharts"] },
      { name: "Data", items: ["PostgreSQL", "Redis", "MongoDB", "Firestore", "SQLite"] },
      { name: "Infra & Observability", items: ["Docker", "Grafana", "Prometheus", "Vercel", "Render", "Railway", "Neon"] },
      { name: "AI", items: ["LLM integration", "Gemini", "Groq / Llama", "Provider fallback"] },
    ],
  },
  learning: {
    label: "Education",
    title: "Still learning",
    featured: {
      badge: "Finishing in 2026",
      name: "Software Engineering with AI",
      org: "Geração Tech 4.0, FullCycle, 96h",
      body: "A software engineering program that applies AI across the whole development cycle, from environment setup to system design.",
      modules: [
        { n: "01", title: "Software engineering & applied AI", body: "Docker environments, a review of OOP, SOLID and Clean Architecture, and AI for refactoring, code review and code generation." },
        { n: "02", title: "Software quality & testing with AI", body: "The test pyramid, automated tests generated and analyzed with AI, and CI/CD pipelines with continuous inspection." },
        { n: "03", title: "AI workflows, APIs & LLMs", body: "Consuming AI APIs, building assistants, automating with n8n, and an AI-powered microservice." },
        { n: "04", title: "System design & scalable architecture", body: "How to design systems that grow, with AI in the architecture process." },
      ],
    },
    items: [
      { title: "Systems Analysis and Development (associate degree)", org: "UNIGRANDE", period: "2025 to 2027", note: "In progress" },
      { title: "B.Sc. in Psychology", org: "Federal University of Ceará (UFC)", period: "2020 to 2025" },
      { title: "Geração Tech 3.0: AI & Soft Skills for Developers", org: "Top 50, Silver Medal", period: "Certification" },
      { title: "Introduction to Go", org: "Certification", period: "Certification" },
      { title: "Geração Tech 2.0", org: "Certification", period: "Certification" },
    ],
  },
  about: {
    label: "About",
    title: "From Psychology to engineering",
    paragraphs: [
      "I studied Psychology at the Federal University of Ceará, focusing on work psychology. I was part of NUTRA, the university's work psychology group, and interned in recruitment and selection at SINE/IDT, the public employment service in Ceará.",
      "The turn came in Na Lida da Vida, a UFC outreach project about finding meaning in work and preparing for the job market. While helping students think about their own paths, I asked myself the same question and realized I wanted to build software. I changed course and stayed.",
      "That shows up in my work in two ways: I try to understand the problem and the people who will use the system before I open the editor, and I communicate clearly when aligning requirements, giving feedback or helping someone who's just starting out.",
    ],
    principlesTitle: "How I work",
    principles: [
      { title: "Problem before tool", body: "I start by understanding what needs to be solved. The technology comes after." },
      { title: "Simple and observable", body: "I prefer code anyone on the team can read, with metrics that show how it behaves in production." },
      { title: "End-to-end delivery", body: "I work from the database to the interface, including deploys." },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's talk",
    body: "I enjoy talking about Go, backend and well-built products. If you'd like to swap ideas, reach out.",
    email: "Send an email",
  },
  footer: "Built with Next.js and Tailwind CSS, deployed on Vercel.",
};

export const content: Record<Locale, Content> = { pt, en };
