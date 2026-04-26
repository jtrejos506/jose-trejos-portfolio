import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { EMAIL, URL_GITHUB, URL_LINKEDIN } from "./src/utils/constants";

const config: Config = {
  plugins: ["./src/plugins/tailwind-config.js"],

  title: "Jose Trejos",
  tagline: "I build reliable and scalable web applications",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://josetrejos.com",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "jtrejos506",
  projectName: "jose-trejos-portfolio",
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/projects",
          editUrl: "https://github.com/jtrejos506/jose-trejos-portfolio",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/jtrejos506/jose-trejos-portfolio",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.jpg",

    navbar: {
      title: "◀ Back",
      items: [
        {
          to: "/projects/intro",
          label: "Projects",
          position: "right",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Content",
          items: [
            { label: "Projects", to: "/projects/intro" },
            { label: "Blog", to: "/blog" },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "jtrejos506@gmail.com",
              href: `mailto:${EMAIL}`,
            },
            {
              label: "LinkedIn",
              href: URL_LINKEDIN,
            },
            {
              label: "GitHub",
              href: URL_GITHUB,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Jose Trejos`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
