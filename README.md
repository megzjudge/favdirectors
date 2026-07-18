# Favourite Directors

A single-page site listing directors (and producers) whose work Megan Judge keeps coming back to — nothing more scientific than that.

🔗 Live at [directors.jdge.cc](https://directors.jdge.cc/)

## About

Each entry includes a portrait, a couple of standout films, and links out to IMDb, TMDb, Wikipedia, and Grokipedia. A subtle animated "firefly" background effect runs in `script.js`, respecting `prefers-reduced-motion`.

## Structure

```
.
├── index.html      # Page markup and director entries
├── styles.css       # Styling
├── script.js         # Firefly background animation
├── font/                # Custom typeface (Mathevas)
├── images/            # Director portraits and site icons
├── robots.txt
└── LICENSE
```

## Development

This is a static site with no build step or dependencies. Open `index.html` directly in a browser, or serve the directory locally:

```bash
python3 -m http.server
```

## Adding a director

Duplicate an `<section class="entry">` block in `index.html`, add a portrait to `images/`, and update the name, films, and links.

## License

MIT — see [LICENSE](LICENSE).
