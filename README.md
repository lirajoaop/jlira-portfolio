# Portfólio: João Pedro Lira

Site pessoal em **Next.js 15 (App Router) + TypeScript + Tailwind CSS 4**, bilíngue (PT em `/`, EN em `/en`), com tema claro e escuro e todas as páginas geradas de forma estática.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Como atualizar o conteúdo

**Todo o texto fica em `src/content/content.ts`.** Experiências, projetos, stack e formação estão nesse arquivo, em PT e EN. Para adicionar um projeto, inclua um item em `projects.items` nos dois idiomas e coloque as imagens em `public/projects/`.

- Currículo para download: `public/curriculo-joao-pedro-lira.pdf`
- Componentes: `src/components/`
- SEO (metadata, Open Graph, JSON-LD, sitemap, robots): `src/lib/shell.tsx`, `src/lib/og.tsx`, `src/app/sitemap.ts`

## Deploy

Pela Vercel: importe o repositório e o Next.js é detectado automaticamente, sem nenhuma configuração.
