# jlira-portfolio

Portfólio pessoal. Next.js 15 (App Router) + TypeScript + Tailwind CSS 4.

## Onde fica cada coisa
- Todo o texto (PT e EN): `src/content/content.ts`. Sempre altere os dois idiomas juntos.
- Seções da página: `src/components/Home.tsx`
- Componentes base (Section, Tag, ButtonLink, ícones): `src/components/ui.tsx`
- Metadata, JSON-LD e tema: `src/lib/shell.tsx`
- Rotas: `src/app/(pt)` serve `/` e `src/app/(en)/en` serve `/en`
- Imagens dos projetos: `public/projects/`
- Currículo: `public/curriculo-joao-pedro-lira.pdf`

## Regras
- Não invente métricas nem experiências. Use só o que está no currículo ou nos repositórios.
- Cores apenas pelos tokens de `src/app/globals.css` (claro e escuro).
- Antes de concluir, rode `npm run build`.
