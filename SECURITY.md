# Security notes

This repository is a public showcase with selected presentation code. It does not contain the application backend, database, deployment credentials, AI secrets or Android signing keys. Never add these to the showcase.

The live platform uses server-side password hashing, HttpOnly cookie sessions, account-specific data access, input validation, persistent rate limits, request-size limits and AI usage budgets. The 13 October 2026 update adds browser anti-framing and content protections. These are scoped controls, not proof that the application is immune to attacks.

Administrator MFA needs private operator enrollment. Production backup recovery, physical Android-device testing and store approval are not verified. A previous dependency audit identified an unpatched build-tool advisory; no new registry audit was performed for this update. Password recovery currently uses a private recovery code, not email delivery.

Report problems through the live website Help page without posting passwords, recovery codes or user data in public issues.
