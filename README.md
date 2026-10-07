# Orbital Command

Browser-based orbital strategy games. Static site, no build step.

## Structure

```
orbital-command/
├── index.html          # intro page, mode selector and Planetary Defence
├── solar-sandbox.html  # Solar Sandbox (linked from the menu)
└── README.md
```

## Deploy on GitHub Pages

1. Commit all files to the repository root on `main`.
2. Settings > Pages > Source: **Deploy from a branch** > `main` / `(root)`.
3. The game is served at `https://<your-username>.github.io/orbital-command/`.

## Notes

- Links between pages are relative (`./solar-sandbox.html`, `./index.html`), so keep the files side by side.
- Three.js loads from cdnjs. The menu globe loads NASA Earth textures from jsDelivr (three.js examples) and falls back to a generated globe if they cannot load.
- Earth imagery credit: NASA, as distributed with the three.js examples. Check the terms before store release.
- Progress and the Solar Sandbox fleet are saved in the browser (localStorage).
