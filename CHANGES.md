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

# 2026-10-31 fixes

- Variant Explorer: gnomAD frequencies were computed from 6-decimal-rounded AFs and printed without a `%`
  for rare variants (e.g. 2/1,423,690 showed as "1.0e-4"); now recomputed from AC/AN and always shown as a
  percentage (e.g. 1.4×10⁻⁴%). Legend now explains "absent" vs "0".
- Header nav: switches to the Menu toggle below 1100px (was 1000px) so it never wraps onto two lines;
  "Get Involved" styled as the call to action.
- Homepage family count aligned with the Researchers page (13 = 11 confirmed + 2 case reports).
- CMD2D page: Genetics list now names both recurrent hotspots (G27D and D308N/V).
- Get Involved: tabbed layout (Families / Clinicians / Researchers / Donors) with a new Donors tab;
  tabs deep-link via support.html#donors etc.
- Running text (paragraphs, lists, callouts) now spans the full content width, matching tables and figures
  (removed the 70ch line-length cap).
- Cache-busting: CSS/JS links carry a `?v=` version so browsers fetch the new files after a deploy.
  Bump the version (all *.html) whenever styles.css or site.js changes.
- Variant Explorer: frequencies shown as allele frequency (e.g. 1.4×10⁻⁶), not percent; variants absent from
  gnomAD shown as "0" instead of "absent"; filter labels now AF < 0.001 / AF < 0.0001.
- Variant Explorer data audit (2026-10-31), checked against gnomAD API, gnomAD v4.1 all-sites AN tables and Ensembl:
  - All 2,400 genomic coordinates ↔ protein changes, all AlphaMissense scores/classes, rsIDs, and CMD2D
    variant cDNA changes verified correct.
  - Counts switched to gnomAD v4.1 *joint* AC/AN. Previously AN covered only the dataset (exome or genome) where
    a variant was seen, overstating AF ~10% for 500 exome-only and ~10-fold for 37 genome-only variants.
  - Variants absent from gnomAD now show the real allele number at that site (0/N) from the all-sites AN tables.
  - 241 substitutions reachable by two different SNVs now list both (276 extra alleles; 17 of them are in
    gnomAD and were previously not counted); frequency shown is the combined total.
  - cDNA (c.) notation shown for every allele and searchable; 18 alleles failing gnomAD AS_VQSR flagged.
