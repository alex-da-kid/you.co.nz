# YOU Coaching website (you.co.nz)

Static Astro site for Lyncia Podmore's coaching business. It replaces the old WordPress site hosted by Superstar Websites.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

Copy `.env.example` to `.env` and add a free [Web3Forms](https://web3forms.com) access key, created with Lyncia's email address, so the contact form can send messages.

## Where things live

| What | Where |
|---|---|
| Phone, address, links, nav, credentials | `src/data/site.ts` |
| Service summaries and prices | `src/data/services.ts` (set `price` to show it) |
| Blog posts | `src/content/blog/*.md` (add a file to publish a post; `draft: true` hides it) |
| Testimonials | `src/content/testimonials/*.md` (add `name:` once permission is given) |
| Pages | `src/pages/` |
| Colours and fonts | `src/styles/global.css` (`@theme` block) |
| Old URL redirects | `public/_redirects` |

`content-archive/` (a copy of the old site) and the Otter meeting notes are git-ignored and must never be published.

## Waiting on Lyncia

Search the code for `TODO(Lyncia)`.

- [ ] Which prices to publish (coaching is currently $350/hr)
- [ ] The public email address to show
- [ ] Happy to invoice employers directly? (PD budget page)
- [ ] How CliftonStrengths assessment codes are handled and charged
- [ ] Permission to name the people in the testimonials, plus any new testimonials
- [ ] Photos: approve or replace `lyncia-listening.jpg` and `strengths-session.jpg`. She felt she "looks worried" in the office shots. A new shoot at her office would help.
- [ ] Her three new articles, for the blog and for capturing her writing voice
- [ ] Later: the 1-day workshop and the Best Foot Forward programme (left off for now)

## Going live (in this order)

1. **Find out what Superstar Websites controls:** the domain, DNS, and email. The hosting may already have lapsed.
2. **Email:** set up the @you.co.nz mailbox elsewhere (Zoho Mail free, or Google Workspace) and migrate her old mail.
3. **Domain:** get the transfer code and move the registration to an account in Lyncia's name. Keep every existing DNS record, especially the MX records that deliver her email.
4. **Hosting:** the site is on Netlify, connected to this GitHub repo. Build settings are in `netlify.toml`, and every push to `main` redeploys automatically. Set the env var `PUBLIC_WEB3FORMS_KEY` in the Netlify site settings, then check the `*.netlify.app` preview.
5. In Netlify, go to **Domain management** and add `www.you.co.nz` as the primary domain, with `you.co.nz` redirecting to it. At the DNS provider, point the domains at Netlify. Netlify shows the exact records to add. Leave the MX records untouched. Then test the site, email, the contact form, and the old URLs.
6. Only then cancel the old hosting.
7. Afterwards: submit the sitemap in Google Search Console, and set up or update her Google Business Profile.

The site uses Netlify rather than Vercel because Vercel's free Hobby plan doesn't allow commercial sites.
