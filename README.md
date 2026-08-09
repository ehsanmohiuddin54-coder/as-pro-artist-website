# AS.PRO ARTIST — Hair & Beauty Salon Website

A premium, responsive React + Vite website for AS.PRO ARTIST, a ladies' hair,
beauty and bridal salon in Birmingham.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → /dist
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   Reusable UI pieces (Navbar, Footer, ServiceCard, BookingForm, etc.)
  pages/        One file per route (Home, About, Services, Bridal, Offers, Book, Contact, Gallery, FAQ)
  layouts/      MainLayout wraps every page with Navbar + Footer + sticky mobile CTA
  data/         Single source of truth for content — edit these, not the components
  hooks/        Small reusable hooks (usePageMeta for per-page <title>/description)
  styles/       Plain CSS split by concern (global, layout, sections, forms, gallery)
```

## Updating content

- **Prices & services** — edit `src/data/services.js`. Each service has
  `category`, `name`, `price`, optional `description`, `featured`, and
  `bookingAvailable`. Add a new object to the array and it automatically
  appears in the right category on the Services page, in search, and in the
  booking form's service dropdown.
- **Business info** (address, phone, hours, socials, bridal offer) — edit
  `src/data/siteInfo.js`.
- **Gallery images** — edit `src/data/gallery.js`. Replace the placeholder
  Unsplash URLs with real salon photography (same shape: `id`, `category`,
  `alt`, `src`).
- **FAQs** — edit `src/data/faq.js`.

## Logo

`src/components/Logo.jsx` currently renders a text-based lockup matching the
brand colours. When the real AS.PRO ARTIST logo file is available, drop it in
`src/assets/` and swap the markup in `Logo.jsx` for an `<img>` tag — every
page references this one component, so the change applies site-wide.

## Booking form

`src/components/BookingForm.jsx` and the Contact page form are **frontend
only** right now — submitting shows a "request received" confirmation, but
nothing is emailed or stored anywhere yet. To connect a backend:

1. Replace the `console.log(...)` in `handleSubmit` with a `fetch()` call to
   your email service / booking API / serverless function.
2. Common options: Formspree, EmailJS, a small serverless function that
   sends via SendGrid/Mailgun, or a WhatsApp Business API integration.
3. Keep the "request received, we'll confirm" messaging — do not change it
   to imply an instant confirmed booking unless you build real-time
   availability checking.

## Images

All photography is temporary, license-free Unsplash imagery chosen to match
the brand's warm, gold-and-black aesthetic. Replace with real salon/bridal
photography before launch — search by the `alt` text in `src/data/*.js` to
find each placeholder.

## SEO

- Per-page `<title>` / meta description via `usePageMeta`.
- `index.html` includes Open Graph tags and `LocalBusiness` (BeautySalon)
  structured data — update the address/phone there if they ever change.
- `public/robots.txt` and `public/sitemap.xml` are ready for a real domain —
  update the domain in both once deployed.

## Design system

Brand colours, fonts and spacing all live as CSS variables at the top of
`src/styles/global.css` — change a variable there to restyle the whole site
consistently.
