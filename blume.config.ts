import { defineConfig } from "blume";

export default defineConfig({
  title: "NDP Documentation",
  description:
    "Architecture of the Kubernetes-native NDP data platform and its migration from Cloudera CDP.",
  content: {
    root: "docs",
  },
  github: {
    owner: "anisf",
    repo: "ndp-docs",
    branch: "main",
  },
  navigation: {
    sidebar: {
      display: "group",
    },
  },
  theme: {
    accent: "teal",
    radius: "md",
    mode: "system",
  },
  search: {
    provider: "orama",
  },
  ai: {
    llmsTxt: true,
  },
  seo: {
    og: { enabled: true },
    sitemap: true,
    robots: true,
    structuredData: true,
  },
  deployment: {
    output: "static",
  },
});

