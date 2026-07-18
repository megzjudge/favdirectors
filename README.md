# Favourite Directors

Personal list of favourite directors (and producers) — a static site, plain HTML/CSS/JS — no dependencies.

🔗 Live at [directors.jdge.cc](https://directors.jdge.cc/)

## What it is

- Directors, each shown as a portrait entry in a single scrolling "program."<br>
- Every entry pairs a portrait with a couple of standout films and links out to IMDb / TMDb / Wikipedia / Grokipedia.<br>
- Entries alternate left/right down the page, like a marquee programme.<br>
- A subtle animated "firefly" background drifts behind everything, respecting `prefers-reduced-motion`.

## Stack

Plain HTML/CSS/JS — no dependencies, no package.json, no build tooling.

- `index.html` — page shell only; the director list is rendered into an empty `#program` container at runtime
- `directors.json` — the director entries (name, portrait, films, and one-or-more people with their imdb/tmdb/wikipedia/grokipedia links) — edit this to add/change a director, not the HTML
- `styles.css` — layout, theming, the firefly animation
- `script.js` — fetches `directors.json` and renders the entries, then spawns the firefly background described below
- `images/` — portraits + link icons
- `font/` — Mathevas (headings), used via `@font-face`

## Design (styles.css)

- Deep ink/moss palette with a glowing accent green, evoking a nighttime programme lit by fireflies — portraits and link icons pick up the same glow via `drop-shadow`/`box-shadow`.
- **Mathevas** for the site title and each director's name; body text stays in a serif (Georgia stack) for readability.
- Entries alternate direction (`nth-of-type(even)` reverses flex-direction and text alignment) so the page reads like a two-column programme rather than a single rigid list, collapsing back to one column on mobile.
- Multi-person entries (e.g. co-directors) get a named line per person with their own link row, instead of merging everyone's links into one row.

## Behaviour (script.js)

- **Data-driven rendering**: `renderDirectors()` fetches `directors.json` and maps each entry to markup — no director is hand-written in `index.html`.
- **Single vs. multi-person entries**: an entry with one person renders one shared link row; an entry with more than one person (co-directors/writing partners) renders a named row per person instead.
- **All user-supplied text is escaped** (`escapeHtml`) before being inserted as HTML, since names/films come from JSON data.
- **Fireflies**: `initFireflies()` spawns a fixed number of glowing dots with randomised position, size, drift distance, and animation delay, purely via inline CSS custom properties — skipped entirely when `prefers-reduced-motion: reduce` is set.
- **Images lazy-load** (native `loading="lazy"`, not custom JS) since portraits are the heaviest assets on the page.

## Adding a director

Add an entry to `directors.json` (with a portrait in `images/`) — no HTML editing needed. See existing entries for the shape; multi-person entries just add more objects to `people`.

## License

MIT — see [LICENSE](LICENSE).
