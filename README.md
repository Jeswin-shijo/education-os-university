# Dhanalakshmi Srinivasan University – Home Page

A static, pixel-matched recreation of the university home page, built with React + TypeScript + Vite.

## Scripts

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Structure

```
src/
  data/siteData.ts        all static content (text, links, stats, logos, images)
  assets/images/          image assets (photos, logos, recruiter logos)
  components/
    Header.tsx            top bar + yellow navigation
    Hero.tsx              title, achiever carousel, admission form, stats strip
    VideoSection.tsx      "See Orchids in Action"
    FounderSection.tsx    founder message + digital publications
    Academics.tsx         academics cards + placement banner
    Recruiters.tsx        recruiter logo grid
    CampusLife.tsx        tabs + campus life cards
    Career.tsx            course picker
    Footer.tsx            footer columns + social links
    ChatWidget.tsx        floating chat bubble
    BrandIcons.tsx        brand/social SVG icons not provided by lucide-react
```

All content is static. To change copy or images, edit `src/data/siteData.ts`.
The layout is tuned for a 1366px desktop viewport and collapses for tablet and mobile.
