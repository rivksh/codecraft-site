Developer notes — CodeCraft (Rivka)

Summary of recent maintenance and accessibility work

- Repaired TSX/TypeScript errors across components and verified `npx tsc --noEmit` passes.
- Integrated `focus-trap-react` into `src/components/ProjectModal.tsx` and removed the manual focus-trap logic.
- Improved accessibility in `src/components/About.tsx`:
  - Added `aria-labelledby` to the about section.
  - Added `rel="noopener noreferrer"` to external links opened with `target="_blank"`.
  - Added `aria-label` to the CV download link.
- Added unit tests using Vitest + Testing Library for `ProjectModal`.
- Added accessibility tests using `axe-core` for `About` and `ProjectModal`.
- Added `src/setupTests.ts` with small mocks for `framer-motion` and `focus-trap-react` to make tests stable in jsdom.
- Added GitHub Actions CI (`.github/workflows/ci.yml`) that runs `npx tsc --noEmit` and `npx vitest run` on push/PR to `master`.

How to run locally

1. Install dependencies:

```powershell
npm install
```

2. Start dev server:

```powershell
npm run dev
```

3. Run tests (unit + a11y):

```powershell
npm run test:run
# or
npx vitest run
```

Notes about tests

- `src/setupTests.ts` mocks `framer-motion` and `focus-trap-react` to forward props and prevent animation-related warnings in jsdom. Remove or adjust these mocks if you want more integration-style tests.
- Axe-based a11y checks run in jsdom and are intended as smoke checks; use Lighthouse or manual testing for full audits.

CI and next steps

- Enable branch protection in GitHub repo settings to require CI status before merging.
- Consider adding coverage reports or uploading a11y reports as artifacts in CI.
- Optionally add preview deployments (Vercel/Netlify) for PR previews.

If you'd like, I can:
- Add more a11y tests for other pages/components.
- Add a CI job to upload a11y reports as artifacts.
- Create a preview/deploy workflow for automatic previews on PRs.
