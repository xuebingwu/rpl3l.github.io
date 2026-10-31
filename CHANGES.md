# Redesign notes (presentation only — no scientific content changed)

Verified: visible text of every page's <main> is identical to the original, except
(1) index.html gains an "I'm a clinician" button (links to cmd2d.html) and (2) the existing
contact email now also appears on the homepage and footer. Explorer data and all DOIs unchanged.

- New compact sticky header, mobile "Menu" toggle (assets/site.js), aria-current on active page
- Skip-to-content link; first heading on each inner page is now a proper <h1> (same text)
- Readable line length, better contrast (muted text, footer disclaimer), 44px tap targets
- Inline styles replaced with classes; invalid nested <p> on homepage fixed
- Canonical, Open Graph, Twitter, theme-color meta; Organization/WebSite JSON-LD on homepage
- Print stylesheet (nav hidden, link URLs shown)
- Footer: grouped columns + contact email
