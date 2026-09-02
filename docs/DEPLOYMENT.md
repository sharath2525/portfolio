# GitHub, Vercel, and GoDaddy Deployment Guide

This guide publishes the portfolio from GitHub to Vercel and connects a domain registered with GoDaddy.

## Before publishing

Run all checks:

```bash
npm ci
npm run typecheck
npm run lint
npm run build
```

Test the Vercel adapter locally:

```powershell
$env:NITRO_PRESET="vercel"
npm run build:vercel
Remove-Item Env:NITRO_PRESET
```

The Vercel build should create `.vercel/output/config.json`. Do not commit `.vercel/`, `.output/`, `dist/`, or environment files.

## 1. Create the GitHub repository

1. Sign in to the GitHub account that will own the portfolio.
2. Create a new repository such as `portfolio`.
3. Choose **Public** if recruiters should be able to inspect the source.
4. Do not initialize it with another README, `.gitignore`, or license because this project already contains them.
5. Copy the repository URL.

From the project directory, add the GitHub remote and push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

Confirm on GitHub that `.env`, `.vercel`, `dist`, `.output`, private keys, and local tool state are absent.

## 2. Import the repository into Vercel

1. Sign in to Vercel with the GitHub account.
2. Select **Add New → Project**.
3. Import the new portfolio repository.
4. Keep the repository root as the project root.
5. The repository's `vercel.json` sets the build command to `npm run build:vercel`.
6. Add `NEXT_PUBLIC_SITE_URL` only after deciding the final canonical domain. It is public metadata, not a secret.
7. Deploy.

Vercel will first provide a `*.vercel.app` production URL. Open it and verify navigation, project images, project links, résumé download, social links, robots.txt, and sitemap.xml.

## 3. Add the GoDaddy domain to Vercel

1. Open the Vercel project.
2. Go to **Settings → Domains**.
3. Add the apex domain, for example `example.com`.
4. Add `www.example.com` as well.
5. Choose one canonical domain and configure the other to redirect to it. A common choice is the apex domain as primary and `www` redirecting to it.
6. Vercel will display the exact DNS records required for this project. Copy those exact values; do not guess them.

## 4. Update DNS in GoDaddy

1. Sign in to the GoDaddy Domain Portfolio.
2. Select the domain and open **DNS**.
3. Preserve existing MX and TXT records used for email or verification.
4. Remove only A, AAAA, or CNAME records that conflict with the host being connected.
5. For an apex domain, add the A record shown by Vercel. The host/name is normally `@`.
6. For `www`, add the CNAME shown by Vercel. The host/name is `www`.
7. Save the changes.

Vercel documents general-purpose DNS values, but a project can receive specific values. Always use the values displayed in the Vercel domain screen or by `vercel domains inspect YOUR-DOMAIN`.

DNS propagation can take time. Vercel automatically provisions HTTPS after ownership and DNS are verified.

## 5. Set the canonical website URL

In Vercel project settings, add:

```text
NEXT_PUBLIC_SITE_URL=https://example.com
```

Redeploy after changing it. This updates canonical metadata, Open Graph URLs, JSON-LD structured data, robots.txt, and sitemap.xml.

## 6. Final production verification

- Both apex and `www` load through HTTPS.
- One hostname redirects to the canonical hostname.
- The browser shows a valid TLS certificate.
- Page title and description describe GenAI engineering.
- `/robots.txt` returns the correct sitemap location.
- `/sitemap.xml` uses the custom domain.
- GitHub, LinkedIn, email, project, and résumé links work.
- No mixed-content or certificate warnings appear.
- The Vercel production deployment is connected to the `main` branch.

## Future releases

After making changes:

```bash
npm run typecheck
npm run lint
npm run build
git add .
git commit -m "Describe the portfolio update"
git push
```

Vercel will create a new production deployment from the configured production branch.

## Important security rules

- Never commit access tokens, API keys, passwords, `.env` files, private keys, or Vercel/GitHub credentials.
- Public variables beginning with `NEXT_PUBLIC_` are visible to website visitors; never put a secret in them.
- Add real secrets through Vercel **Settings → Environment Variables**.
- Review changed files before every commit with `git diff --staged`.
- If a secret is ever committed, revoke it immediately. Removing it in a later commit does not remove it from Git history.
- Preserve email-related DNS records when changing website DNS.

## Official references

- [Vercel: Setting up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain)
- [Vercel: Working with domains](https://vercel.com/docs/domains/working-with-domains)
- [GoDaddy: Add a CNAME record](https://www.godaddy.com/help/add-a-cname-record-19236)
- [Vinext: Deploying to Vercel through Nitro](https://github.com/cloudflare/vinext#other-platforms-via-nitro)
