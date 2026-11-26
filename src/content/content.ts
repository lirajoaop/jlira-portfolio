// Todo o conteúdo do site vive aqui. Para atualizar o portfólio, edite este arquivo.
// All site copy lives here. To update the portfolio, edit this file only.

import type { StackIcon } from "@/components/stackIcons";

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

/** `core` marks the main stack; `used` lists where it was used (only facts already on the site). */
export type StackItem = {
  name: string;
  icon?: StackIcon;
  core?: boolean;
  used?: { where: string; what: string }[];
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
  images?: { src: string; alt: string; label: string }[];
  flow?: { step: string; detail: string }[];
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
    menu: string;
    backToTop: string;
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
    lead?: string;
    problemLabel: string;
    solutionLabel: string;
    decisionsLabel: string;
    flowLabel: string;
    flowHint: string;
    galleryLabel: string;
    items: Project[];
  };
  stack: {
    label: string;
    title: string;
    hint: string;
    coreLabel: string;
    groups: { name: string; items: StackItem[] }[];
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
  publications: {
    label: string;
    title: string;
    readLabel: string;
    items: { title: string; date: string; summary: string; href: string }[];
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
    menu: "Menu",
    backToTop: "Voltar ao topo",
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
          "Paralelizei em Go a geração de relatórios com grande volume de dados, antes processada em sequência e responsável por falhas no carregamento da página. Com goroutines, sync.WaitGroup e um semáforo limitando a concorrência, a página se estabilizou e ganhou desempenho.",
          "Faço o fullstack em React, Next.js e TailwindCSS e os apps mobile em React Native.",
          "Usei Grafana e Prometheus para acompanhar as métricas da plataforma.",
          "Sou responsável por deploys e pela publicação de aplicativos em produção.",
          "Modelo e integro dados no Firestore, com gravações em lote (batch), e corrijo bugs para manter o sistema estável.",
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
    title: "Dois estudos de caso, os dois no ar e com código aberto",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    decisionsLabel: "Decisões técnicas",
    flowLabel: "Fluxo de uma requisição",
    flowHint: "Toque numa etapa para ver o que ela faz.",
    galleryLabel: "Telas do PsiEncontra",
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
          { src: "/projects/result.png", label: "Resultado", alt: "Tela de resultado do PsiEncontra com gráficos radar de abordagens teóricas e campos de atuação" },
          { src: "/projects/questionnaire.png", label: "Questionário", alt: "Pergunta 15 de 76 do modo detalhado do PsiEncontra, com escala de 1 (Discordo totalmente) a 5 (Concordo totalmente)" },
          { src: "/projects/landing.png", label: "Página inicial", alt: "Página inicial do PsiEncontra" },
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
        flow: [
          { step: "Client", detail: "O frontend em Next.js chama a API REST com fetch." },
          { step: "Router", detail: "O Gin direciona a rota /api/v1/openings e aplica o middleware de CORS." },
          { step: "Handler", detail: "A camada HTTP recebe a requisição, valida a entrada e devolve a resposta em JSON." },
          { step: "Service", detail: "As regras de negócio ficam aqui, sem saber nada de HTTP nem de banco." },
          { step: "Repository", detail: "O acesso a dados: as consultas com GORM ficam isoladas nesta camada." },
          { step: "PostgreSQL", detail: "O banco gerenciado no Neon, separado da API no Render." },
        ],
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
    hint: "Passe o mouse ou toque numa tecnologia para ver onde eu usei.",
    coreLabel: "Principal",
    groups: [
      {
        name: "Backend",
        items: [
          {
            name: "Go",
            icon: "go",
            core: true,
            used: [
              { where: "PontoGO", what: "Geração paralela de relatórios com grande volume de dados: goroutines, sync.WaitGroup e semáforo no lugar do processamento em sequência, que causava falhas no carregamento da página." },
              { where: "PsiEncontra", what: "API e pontuação determinística do modo detalhado, além do PDF gerado com gofpdf." },
              { where: "Go Opportunities", what: "API REST em camadas Handler, Service e Repository." },
            ],
          },
          {
            name: "Gin",
            icon: "gin",
            used: [
              { where: "PsiEncontra", what: "Rotas da API." },
              { where: "Go Opportunities", what: "Rotas da API e middleware de CORS." },
            ],
          },
          {
            name: "GORM",
            used: [
              { where: "PsiEncontra", what: "Acesso ao PostgreSQL." },
              { where: "Go Opportunities", what: "Consultas isoladas na camada Repository." },
            ],
          },
          {
            name: "Swagger",
            icon: "swagger",
            used: [
              { where: "Go Opportunities", what: "Documentação gerada a partir do código com swag." },
            ],
          },
        ],
      },
      {
        name: "Frontend",
        items: [
          {
            name: "Next.js",
            icon: "nextdotjs",
            core: true,
            used: [
              { where: "PontoGO", what: "Telas do produto, com renderização no servidor." },
              { where: "PsiEncontra", what: "Frontend em Next.js 16 e o Story de 1080×1920 gerado com next/og." },
              { where: "Go Opportunities", what: "Frontend com busca em tempo real, filtros e dashboard." },
              { where: "Este portfólio", what: "Next.js 15 com páginas estáticas, em PT e EN." },
            ],
          },
          {
            name: "React",
            icon: "react",
            core: true,
            used: [
              { where: "PontoGO", what: "Criei as páginas de espelho de ponto e de assinatura e cancelamento. Fiz o redesign da gestão de pessoas e do back-office, o painel administrativo, entre outras telas e diversos modais, com o estado gerenciado por Context e Redux." },
              { where: "PsiEncontra", what: "Questionário com escala Likert, resultado com gráficos radar e o login que vincula o resultado à conta." },
              { where: "Go Opportunities", what: "Cards de vagas, formulário em modal com validação, toasts e confirmação antes de excluir." },
            ],
          },
          {
            name: "React Native",
            icon: "react",
            core: true,
            used: [
              { where: "PontoGO", what: "Apps mobile, da construção à publicação em produção." },
            ],
          },
          {
            name: "TypeScript",
            icon: "typescript",
            core: true,
            used: [
              { where: "PontoGO", what: "Apps mobile em React Native." },
              { where: "Este portfólio", what: "Todo o código do site." },
            ],
          },
          {
            name: "JavaScript",
            icon: "javascript",
            used: [
              { where: "PontoGO", what: "A lógica da aplicação: formulários complexos com validação, como escalas, tolerâncias e regras de jornada, além de logs e relatórios em PDF e Excel." },
              { where: "PsiEncontra", what: "Toda a lógica do frontend, do login ao questionário, aos resultados e ao compartilhamento." },
              { where: "Go Opportunities", what: "Busca em tempo real, filtros, estatísticas e formulário com validação campo a campo, só com React e Next.js." },
            ],
          },
          {
            name: "Redux",
            icon: "redux",
            used: [
              { where: "PontoGO", what: "Store e slices do estado global, inclusive nas páginas renderizadas no servidor." },
            ],
          },
          {
            name: "TailwindCSS",
            icon: "tailwindcss",
            used: [
              { where: "PontoGO", what: "Toda a estilização da aplicação: telas, modais e componentes, incluindo o Dark Mode." },
              { where: "PsiEncontra", what: "Tailwind 4 com design tokens e tema claro e escuro em toda a interface, do questionário ao resultado." },
              { where: "Go Opportunities", what: "Tailwind 4 com tema próprio e Dark Mode." },
              { where: "Este portfólio", what: "Sistema visual próprio em Tailwind 4: tokens de cor para tema claro e escuro, escala tipográfica e layout pensado primeiro para o celular." },
            ],
          },
          {
            name: "Recharts",
            used: [
              { where: "PsiEncontra", what: "Gráficos radar das abordagens e dos campos de atuação." },
            ],
          },
        ],
      },
      {
        name: "Dados",
        items: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
            core: true,
            used: [
              { where: "PsiEncontra", what: "Banco principal, com GORM." },
              { where: "Go Opportunities", what: "Banco gerenciado no Neon, separado da API." },
            ],
          },
          {
            name: "Redis",
            icon: "redis",
            core: true,
            used: [
              { where: "PontoGO", what: "Caches e a invalidação deles, no projeto de cache da plataforma." },
            ],
          },
          {
            name: "Firestore",
            icon: "firebase",
            used: [
              { where: "PontoGO", what: "Modelagem e integração de dados, com gravações em lote (batch)." },
            ],
          },
        ],
      },
      {
        name: "Infra & Observabilidade",
        items: [
          {
            name: "Docker",
            icon: "docker",
            used: [
              { where: "PsiEncontra", what: "API e banco rodando com Docker Compose." },
              { where: "Go Opportunities", what: "Dockerfile multi-stage que entrega uma imagem final pequena." },
            ],
          },
          {
            name: "Grafana",
            icon: "grafana",
            used: [
              { where: "PontoGO", what: "Painéis com as métricas da plataforma." },
            ],
          },
          {
            name: "Prometheus",
            icon: "prometheus",
            used: [
              { where: "PontoGO", what: "Coleta das métricas da plataforma." },
            ],
          },
          {
            name: "Vercel",
            icon: "vercel",
            used: [
              { where: "PontoGO", what: "Acompanhamento dos deploys, configuração de domínios e métricas." },
              { where: "PsiEncontra", what: "Frontend e funções no servidor: a imagem do Story gerada na hora e uma prévia própria de cada resultado quando o link é compartilhado." },
              { where: "Go Opportunities", what: "Frontend publicado à parte, com a API no Render e o banco no Neon." },
              { where: "Este portfólio", what: "Uma prévia publicada para cada PR antes do merge, e Analytics que separa as visitas por origem." },
            ],
          },
          {
            name: "Render",
            icon: "render",
            used: [
              { where: "Go Opportunities", what: "API." },
            ],
          },
          {
            name: "Railway",
            icon: "railway",
            used: [
              { where: "PsiEncontra", what: "API." },
            ],
          },
          {
            name: "Neon",
            used: [
              { where: "Go Opportunities", what: "PostgreSQL gerenciado." },
            ],
          },
        ],
      },
      {
        name: "IA",
        items: [
          {
            name: "Gemini",
            icon: "googlegemini",
            used: [
              { where: "PsiEncontra", what: "Provedor principal: interpreta as respostas abertas e escreve as explicações do resultado." },
            ],
          },
          {
            name: "Groq / Llama",
            icon: "meta",
            used: [
              { where: "PsiEncontra", what: "Fallback automático com Llama 3.3 70B quando o Gemini falha." },
            ],
          },
        ],
      },
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
  publications: {
    label: "Publicações",
    title: "O que eu escrevo no LinkedIn",
    readLabel: "Ler no LinkedIn",
    items: [
      {
        title: "O que eu trouxe do DevFest Fortaleza 2026",
        date: "nov/2026",
        summary:
          "Notas das palestras do evento do GDG Fortaleza: o papel do dev quando a IA escreve o código, que deixa de cuidar só da própria parte e passa a planejar, dividir e revisar o trabalho; regras de negócio numa camada própria; e agentes com o Google ADK.",
        href: "https://www.linkedin.com/posts/jo%C3%A3o-pedro-lira_devfest-devfestfortaleza-gdgfortaleza-ugcPost-7528981043538845696-fE72/",
      },
      {
        title: "Onde a Psicologia e o Código se encontram: PsiEncontra",
        date: "abr/2026",
        summary:
          "Por que criei o PsiEncontra: a angústia de escolher uma abordagem na graduação, o que vi como facilitador no Na Lida da Vida e como Go, Next.js e IA viraram a resposta, no projeto final do Geração Tech 3.0.",
        href: "https://www.linkedin.com/posts/jo%C3%A3o-pedro-lira_fullstack-golang-nextjs-ugcPost-7450735615211425792-AnTI/",
      },
    ],
  },
  about: {
    label: "Sobre",
    title: "Da Psicologia para a engenharia",
    paragraphs: [
      "Me formei em Psicologia na UFC, com foco em Psicologia do Trabalho. Fiz parte do NUTRA, o núcleo de Psicologia do Trabalho da universidade, e estagiei em recrutamento e seleção no SINE/IDT.",
      "A virada veio no Na Lida da Vida, um projeto de extensão da UFC sobre o sentido do trabalho e a orientação para o mercado. Enquanto ajudava estudantes a pensar no próprio caminho, fiz a mesma pergunta para mim e percebi que queria construir software. Mudei de rota e fiquei.",
      "Fora do código, sou movido a música: toco violão, já fui baixista, e The Masterplan, do Oasis, é a que mais toca nos meus fones. Também sou fã de futebol e, quando sobra tempo, jogo um LoL com os amigos.",
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
    menu: "Menu",
    backToTop: "Back to top",
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
          "Parallelized in Go the generation of high-volume reports, previously processed sequentially and causing the page to fail to load. With goroutines, sync.WaitGroup and a semaphore capping concurrency, the page became stable and faster.",
          "Do fullstack work in React, Next.js and TailwindCSS, plus mobile apps in React Native.",
          "Used Grafana and Prometheus to track platform metrics.",
          "Own deployments and app releases to production.",
          "Model and integrate data in Firestore, with batched writes, and fix bugs to keep the system stable.",
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
    title: "Two case studies, both live and open source",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    decisionsLabel: "Technical decisions",
    flowLabel: "How a request flows",
    flowHint: "Tap a step to see what it does.",
    galleryLabel: "PsiEncontra screens",
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
          { src: "/projects/result.png", label: "Results", alt: "PsiEncontra results screen with radar charts for theoretical approaches and fields of practice" },
          { src: "/projects/questionnaire.png", label: "Questionnaire", alt: "Question 15 of 76 in the PsiEncontra detailed mode, with a 1 (strongly disagree) to 5 (strongly agree) scale" },
          { src: "/projects/landing.png", label: "Landing page", alt: "PsiEncontra landing page" },
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
        flow: [
          { step: "Client", detail: "The Next.js frontend calls the REST API with fetch." },
          { step: "Router", detail: "Gin routes /api/v1/openings and applies the CORS middleware." },
          { step: "Handler", detail: "The HTTP layer takes the request, validates the input and returns JSON." },
          { step: "Service", detail: "Business rules live here, unaware of HTTP or the database." },
          { step: "Repository", detail: "Data access: the GORM queries are kept in this layer." },
          { step: "PostgreSQL", detail: "The managed database on Neon, separate from the API on Render." },
        ],
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
    hint: "Hover or tap a technology to see where I used it.",
    coreLabel: "Core",
    groups: [
      {
        name: "Backend",
        items: [
          {
            name: "Go",
            icon: "go",
            core: true,
            used: [
              { where: "PontoGO", what: "Parallel generation of high-volume reports: goroutines, sync.WaitGroup and a semaphore instead of sequential processing, which caused the page to fail to load." },
              { where: "PsiEncontra", what: "API and the deterministic scoring of the detailed mode, plus the PDF built with gofpdf." },
              { where: "Go Opportunities", what: "REST API in Handler, Service and Repository layers." },
            ],
          },
          {
            name: "Gin",
            icon: "gin",
            used: [
              { where: "PsiEncontra", what: "API routes." },
              { where: "Go Opportunities", what: "API routes and CORS middleware." },
            ],
          },
          {
            name: "GORM",
            used: [
              { where: "PsiEncontra", what: "PostgreSQL access." },
              { where: "Go Opportunities", what: "Queries isolated in the Repository layer." },
            ],
          },
          {
            name: "Swagger",
            icon: "swagger",
            used: [
              { where: "Go Opportunities", what: "Docs generated from the code with swag." },
            ],
          },
        ],
      },
      {
        name: "Frontend",
        items: [
          {
            name: "Next.js",
            icon: "nextdotjs",
            core: true,
            used: [
              { where: "PontoGO", what: "Product screens, with server-side rendering." },
              { where: "PsiEncontra", what: "Next.js 16 frontend and the 1080×1920 Story built with next/og." },
              { where: "Go Opportunities", what: "Frontend with live search, filters and a dashboard." },
              { where: "This portfolio", what: "Next.js 15 with static pages, in PT and EN." },
            ],
          },
          {
            name: "React",
            icon: "react",
            core: true,
            used: [
              { where: "PontoGO", what: "Built the timesheet page and the subscription and cancellation pages. Redesigned people management and the back-office admin panel, among other screens and many modals, with state managed through Context and Redux." },
              { where: "PsiEncontra", what: "Likert-scale questionnaire, results with radar charts and the login that links the result to the account." },
              { where: "Go Opportunities", what: "Job cards, a modal form with validation, toasts and a confirmation before deleting." },
            ],
          },
          {
            name: "React Native",
            icon: "react",
            core: true,
            used: [
              { where: "PontoGO", what: "Mobile apps, from building them to shipping them to production." },
            ],
          },
          {
            name: "TypeScript",
            icon: "typescript",
            core: true,
            used: [
              { where: "PontoGO", what: "Mobile apps in React Native." },
              { where: "This portfolio", what: "All of the site's code." },
            ],
          },
          {
            name: "JavaScript",
            icon: "javascript",
            used: [
              { where: "PontoGO", what: "The app's logic: complex forms with validation, such as work schedules, tolerances and working-hours rules, plus logs and PDF and Excel reports." },
              { where: "PsiEncontra", what: "All of the frontend logic, from login to the questionnaire, the results and sharing." },
              { where: "Go Opportunities", what: "Live search, filters, stats and a form with per-field validation, using only React and Next.js." },
            ],
          },
          {
            name: "Redux",
            icon: "redux",
            used: [
              { where: "PontoGO", what: "Global state store and slices, including on server-rendered pages." },
            ],
          },
          {
            name: "TailwindCSS",
            icon: "tailwindcss",
            used: [
              { where: "PontoGO", what: "All of the app's styling: screens, modals and components, including Dark Mode." },
              { where: "PsiEncontra", what: "Tailwind 4 with design tokens and light and dark themes across the whole interface, from the questionnaire to the results." },
              { where: "Go Opportunities", what: "Tailwind 4 with its own theme and Dark Mode." },
              { where: "This portfolio", what: "A custom visual system in Tailwind 4: color tokens for light and dark themes, a type scale and a mobile-first layout." },
            ],
          },
          {
            name: "Recharts",
            used: [
              { where: "PsiEncontra", what: "Radar charts for approaches and fields of practice." },
            ],
          },
        ],
      },
      {
        name: "Data",
        items: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
            core: true,
            used: [
              { where: "PsiEncontra", what: "Main database, with GORM." },
              { where: "Go Opportunities", what: "Managed database on Neon, separate from the API." },
            ],
          },
          {
            name: "Redis",
            icon: "redis",
            core: true,
            used: [
              { where: "PontoGO", what: "Caches and their invalidation, in the platform's caching project." },
            ],
          },
          {
            name: "Firestore",
            icon: "firebase",
            used: [
              { where: "PontoGO", what: "Data modeling and integration, with batched writes." },
            ],
          },
        ],
      },
      {
        name: "Infra & Observability",
        items: [
          {
            name: "Docker",
            icon: "docker",
            used: [
              { where: "PsiEncontra", what: "API and database running with Docker Compose." },
              { where: "Go Opportunities", what: "Multi-stage Dockerfile that ships a small final image." },
            ],
          },
          {
            name: "Grafana",
            icon: "grafana",
            used: [
              { where: "PontoGO", what: "Dashboards with the platform's metrics." },
            ],
          },
          {
            name: "Prometheus",
            icon: "prometheus",
            used: [
              { where: "PontoGO", what: "Collecting the platform's metrics." },
            ],
          },
          {
            name: "Vercel",
            icon: "vercel",
            used: [
              { where: "PontoGO", what: "Monitoring deploys, setting up domains and metrics." },
              { where: "PsiEncontra", what: "Frontend and server functions: the Story image generated on demand and a preview of each result when its link is shared." },
              { where: "Go Opportunities", what: "Frontend deployed on its own, with the API on Render and the database on Neon." },
              { where: "This portfolio", what: "A preview deployed for every PR before merging, and Analytics that splits visits by source." },
            ],
          },
          {
            name: "Render",
            icon: "render",
            used: [
              { where: "Go Opportunities", what: "API." },
            ],
          },
          {
            name: "Railway",
            icon: "railway",
            used: [
              { where: "PsiEncontra", what: "API." },
            ],
          },
          {
            name: "Neon",
            used: [
              { where: "Go Opportunities", what: "Managed PostgreSQL." },
            ],
          },
        ],
      },
      {
        name: "AI",
        items: [
          {
            name: "Gemini",
            icon: "googlegemini",
            used: [
              { where: "PsiEncontra", what: "Main provider: reads the open answers and writes the result explanations." },
            ],
          },
          {
            name: "Groq / Llama",
            icon: "meta",
            used: [
              { where: "PsiEncontra", what: "Automatic fallback to Llama 3.3 70B when Gemini fails." },
            ],
          },
        ],
      },
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
  publications: {
    label: "Writing",
    title: "What I post on LinkedIn",
    readLabel: "Read on LinkedIn",
    items: [
      {
        title: "What I took from DevFest Fortaleza 2026",
        date: "Nov 2026",
        summary:
          "Notes from the GDG Fortaleza talks: the developer's role when AI writes the code, moving from owning one piece to planning, splitting and reviewing the work; business rules in their own layer; and agents with Google ADK.",
        href: "https://www.linkedin.com/posts/jo%C3%A3o-pedro-lira_devfest-devfestfortaleza-gdgfortaleza-ugcPost-7528981043538845696-fE72/",
      },
      {
        title: "Where Psychology and code meet: PsiEncontra",
        date: "Apr 2026",
        summary:
          "Why I built PsiEncontra: the anxiety of choosing a theoretical approach during my Psychology degree, what I saw as a facilitator in Na Lida da Vida, and how Go, Next.js and AI became the answer, as my Geração Tech 3.0 final project.",
        href: "https://www.linkedin.com/posts/jo%C3%A3o-pedro-lira_fullstack-golang-nextjs-ugcPost-7450735615211425792-AnTI/",
      },
    ],
  },
  about: {
    label: "About",
    title: "From Psychology to engineering",
    paragraphs: [
      "I studied Psychology at the Federal University of Ceará, focusing on work psychology. I was part of NUTRA, the university's work psychology group, and interned in recruitment and selection at SINE/IDT, the public employment service in Ceará.",
      "The turn came in Na Lida da Vida, a UFC outreach project about finding meaning in work and preparing for the job market. While helping students think about their own paths, I asked myself the same question and realized I wanted to build software. I changed course and stayed.",
      "Outside of code, music keeps me going: I play acoustic guitar, I used to be a bassist, and Oasis's The Masterplan is the song I play the most. I'm also a football fan and, when there's time, I play League of Legends with friends.",
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
