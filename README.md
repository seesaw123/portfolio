# Saw Nyan Lin Tun — Portfolio

A **React + JavaScript + Vite** implementation of the current desktop [Figma portfolio](https://www.figma.com/design/MT2ZXTKS3sAD21XtwxnSRV?node-id=8-2), built with independent React components and plain CSS. Ready for Vercel's free Hobby hosting tier.

## Requirements

- Node.js **20.19+** (or a recent Node.js 22 release)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173/`).

## Build for production

```bash
npm run build
npm run preview
```

The deployable static website appears in `dist/`.

## Deploy to Vercel

1. Create a GitHub repository and upload this project's **contents** (not its `dist/` or `node_modules/` directories).
2. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
3. Import your GitHub repository.
4. Vercel should detect **Vite**. If required, use **Build Command:** `npm run build`, **Output Directory:** `dist`.
5. Select **Deploy**. Later pushes to the connected branch deploy automatically.

To use `sawnyanlintun.com` later, first register it with a domain registrar, then add it in the Vercel project's **Settings → Domains** and follow the DNS instructions. The website can be hosted for free, but the `.com` registration/renewal costs money.

## Layout / component structure

```text
src/
  App.jsx                  Page composition
  components/
    Header.jsx             About / Work / Skills navigation
    Hero.jsx               Introduction and working anchor buttons
    FeaturedWork.jsx       BlockLab.study case study and live links
    ProjectPreview.jsx     React/CSS browser mockup from Figma
    AboutExpertise.jsx     Current Figma text and EdTech spotlight
    Contact.jsx            LinkedIn and Facebook contact buttons
    Footer.jsx             Copyright
  styles/
    global.css             Tokens, spacing, desktop and mobile styles
public/
  assets/                  SVG assets exported from the Figma design
  favicon.svg
```

### Important design decisions

- **The current Figma hero illustration is absent.** The code keeps the intended open white space; it does **not** re-add the deleted 3D cubes or decentralized network visuals.
- **The latest About section has no skill chips or additional biography.** Those were removed from the Figma design; this code does not restore them.
- **Explore my work** scrolls to `#work`, and **About me** scrolls to `#about`.
- The header has only **About, Work, Skills**.
- **BlockLab.study** opens https://blocklab.study/.
- **LinkedIn** opens https://www.linkedin.com/in/sawnyanlintun, and **Facebook** opens https://www.facebook.com/nyanlintun.nyan.9.
- The Figma “Get in touch” button did not specify an email address. On this site it opens the LinkedIn profile as the main available contact method; change this to `mailto:your-address` if desired.
- The site is responsive on smaller screens, even though the mobile Figma artboard was deleted.
- Site copy is in React component files and can be edited without touching the page's HTML shell.

## Assets & fonts

The two social logos, project browser dots, and simple project/education icons are local SVG files exported from the Figma file. Fonts are loaded from Google Fonts (Space Grotesk / Roboto) with system fallbacks. No proprietary font files are included.

## Not yet done

Deployment to your personal Vercel account, GitHub publication, and domain purchase are **not** part of this source-code package. They require your account decisions and, for the domain, payment.
