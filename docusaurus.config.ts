import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Jose Trejos',
  tagline: 'I build reliable and scalable web applications',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://josetrejos.com',
  baseUrl: '/',

  organizationName: 'jtrejos506',
  projectName: 'jose-trejos-portfolio',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/projects', // 🔥 IMPORTANT: makes docs = projects
          editUrl: 'https://github.com/jtrejos506/jose-trejos-portfolio',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/jtrejos506/jose-trejos-portfolio',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Jose Trejos',
      logo: {
        alt: 'Jose Trejos Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/projects',
          label: 'Projects',
          position: 'right',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/jtrejos506',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            { label: 'Projects', to: '/projects' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jtrejos506',
            },
            // later you can add:
            // { label: 'Upwork', href: 'your-upwork-link' },
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