# NDP documentation

Architecture documentation for NDP, an open-source, Kubernetes-native data
platform intended to replace Cloudera CDP workloads on sovereign commodity
bare-metal infrastructure.

The documentation site is powered by [Blume](https://useblume.dev/). Blume is
the documentation framework used to render the site; this repository documents
NDP itself.

## Local development

Requirements:

- Node.js 22.12 or newer
- npm, pnpm, Yarn, or Bun

```bash
npm install
npm run dev
```

Build the static site with:

```bash
npm run build
```

The documentation source is under [`docs/`](docs/).

## Version compatibility

The project pins Astro, MDX, Scalar, and Vite transitive versions to the set
used by Blume's upstream lockfile for Blume 1.1.3. This avoids incompatible
newer transitive releases while keeping Blume itself on the current release.
Review the pins whenever Blume is upgraded.
