# jlira-portfolio

Personal portfolio. Next.js 15 (App Router) + TypeScript + Tailwind CSS 4.

## Where things live
- All copy (PT and EN): `src/content/content.ts`. Always update both languages together.
- Page sections: `src/components/Home.tsx`
- Base components (Section, Tag, ButtonLink, icons): `src/components/ui.tsx`
- Metadata, JSON-LD and theme: `src/lib/shell.tsx`
- Routes: `src/app/(pt)` serves `/` and `src/app/(en)/en` serves `/en`
- Project images: `public/projects/`
- Résumé: `public/curriculo-joao-pedro-lira.pdf`

## Rules
- Don't invent metrics or experience. Use only what's in the résumé or the repositories.
- Colors only through the tokens in `src/app/globals.css` (light and dark).
- Code, comments, commits and PRs in English.
- Run `npm run build` before finishing.
