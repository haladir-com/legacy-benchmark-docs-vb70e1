// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Site metadata
  title: 'Haladir Rosetta',
  tagline: 'AI-powered COBOL documentation',
  favicon: 'img/haladir-icon.png',

  // GitHub Pages deployment configuration
  // These placeholders are replaced at deploy time
  url: 'https://haladir-com.github.io',
  baseUrl: '/legacy-benchmark-docs-vb70e1/',
  organizationName: 'haladir-com',
  projectName: 'legacy-benchmark-docs-vb70e1',
  trailingSlash: false,

  // Build behavior
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Presets bundle common plugins together
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Plugins for LLM-readable docs
  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        docsDir: 'docs',
      },
    ],
  ],

  // Theme configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Haladir',
          src: 'img/haladir-logo.png',
          height: 28,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/haladir-com/legacy-benchmark-docs-vb70e1',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        copyright: 'Built with Haladir Rosetta. Generated from COBOL source code.',
      },
      prism: {
        theme: prismThemes.github,
        additionalLanguages: ['cobol'],
      },
    }),

  // Enable Mermaid diagrams in markdown
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],
};

export default config;
