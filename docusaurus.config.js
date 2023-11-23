import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
(module.exports = {
  title: '綿飴屋',
  tagline: 'wataameya',
  url: 'https://wataame89.github.io',
  baseUrl: '/documents-marshmallowPB/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wataame89', // Usually your GitHub org/user name.
  projectName: 'documents-marshmallowPB', // Usually your repo name.

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja','en','ko','zh'],
    // localeConfigs: {
    //   ja: {
    //     label: '日本語',
    //   },
    //   en: {
    //     label: 'English',
    //   },
    //   ko: {
    //     label: '한국어',
    //   },
    //   zh: {
    //     label: '中文',
    //   },
    // },
  },
    
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
        title: 'ましゅまろPB説明書',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'ましゅまろPB',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://twitter.com/wataameya_vr',
            label: 'Twitter',
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
});