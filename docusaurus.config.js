const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://wataame89.github.io',
  baseUrl: '/documents-marshmallowPB/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wataame89', // Usually your GitHub org/user name.
  projectName: 'documents-marshmallowPB', // Usually your repo name.

  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en","ko","zh"],
    localeConfigs: {
      ja: {
        label: '日本語',
      },
      en: {
        label: 'English',
      },
      ko: {
        label: '한국어',
      },
      zh: {
        label: '中文',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '綿飴屋さん',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'ましゅまろPB',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://wataame89.booth.pm/',
            label: 'Booth',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Booth',
                href: 'https://wataame89.booth.pm/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wataameya_vr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});