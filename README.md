# Zehra Nisar, Portfolio

Personal portfolio website built with **React, TypeScript, Vite and Tailwind CSS**. Dark and light themes, responsive down to phone width, and no backend needed.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Update the content

Everything on the page comes from **`src/data.ts`**: profile, stats, experience, projects, collaborations, skills and certificates. Edit that file and the website updates.

## Add certificates

Drop each certificate (PDF, PNG or JPG) into `src/certificates/`. The website picks it up automatically and attaches it to the right card when the file name contains one of these words: `ethical`, `content`, `machine`, `python`, `android`, `cs50`. For example `ethical-hacking.pdf`. Any other file appears as its own card, so nothing is lost. Stop and restart `npm run dev` after adding files.

Do not publish documents that show a CNIC number or home address unless those details are covered.

## Internship letters

The three letters in `src/letters/` have the CNIC number and home address blacked out, and the text under the black boxes is removed (the pages are images, not text). Each Experience card shows a "View letter" link when a file in that folder has `gravite`, `imaginetech` or `digitronix` in its name. Never replace them with the original letters.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com), choose **Add New → Project**, import the repository and click **Deploy**. Vercel detects Vite automatically (build command `npm run build`, output folder `dist`).
