# Release notes — 13 October 2026

## Updated website

- Added an anonymous public homepage while preserving the signed-in dashboard at the same root URL.
- Added actual public-page screenshots and a 30-second silent screenshot walkthrough at `/showcase`.
- Added `robots.txt` and an XML sitemap for public informational pages.
- Added browser security headers without blocking React framework scripts or secure cookie sessions.
- Preserved application ID, published hostname, database bindings, environment revision, accounts and study data. No migrations or provider-secret changes.

## Changed application files

`app/page.tsx`, `app/public-home.tsx`, `app/showcase/page.tsx`, `app/globals.css`, `app/robots.txt/route.ts`, `app/sitemap.xml/route.ts`, `lib/http-security.ts`, `build/sites-worker.ts`, `tests/run.mjs`, `README.md`, and public screenshot/video assets.

## Verification

- 209 existing and added checks passed locally: real route handlers, signup/login/recovery/logout, ownership boundaries, quiz flow, validation/rate limits, public home and security response wrapper.
- TypeScript and the production build passed.
- Limited source/history secret-pattern scan: 27 commits, 4,493 text-file inspections, zero findings at the first release checkpoint. This is not a comprehensive secrets audit.
- Live root serves public homepage; login, signup and Android-information navigation verified in the browser. Desktop document width matched viewport width (1,348px), without horizontal overflow.
- Live security headers verified on the HTML response; crawler routes returned HTTP 200. Private progress API returned 401 without an app session. Service credentials did not authorize interactive admin security API (403). Read-only service-transport checks used the existing owner credential only for this exact Site; no anonymous dispatch bypass was used.
- Walkthrough file verified as H.264 MP4, 1,920 × 1,080, 30 seconds; full decode completed without errors. Five source images are genuine 1,348 × 926 JPEG website captures.

## Limitations

No fresh production signup/login attempt was performed; these flows passed the local API tests. Physical phones/Fire tablets, native app lifecycle, store approval, Google indexing/ranking, private GitHub repository security and deployed administrator MFA enrollment remain unverified. Screenshots and video do not represent native-device testing. Email-based password recovery is unconfigured; users must retain their private recovery code.

## Public GitHub publication

Proposed repository: `muthyalamaheshkumar8-debug/current-affairs-aim`, public. It contains only this showcase folder: selected public UI code, documentation, five public website screenshots and one screenshot walkthrough. Backend source, `.openai` configuration, databases, runtime environment, provider credentials and signing keys are excluded. The owner explicitly approved this public destination and the prepared showcase contents on 13 October 2026. The source and media are published as a compact showcase; this repository is not a complete copy of the private backend. The full website source is committed and pushed to its existing Sites-managed Git repository.

Final website source commit: `c737401c8488d9af1c623b1b54f19dd0171d06b1`, saved version 25. The website tour was published successfully; its 30-second, 1920 × 1080 video loaded and played in the browser.
