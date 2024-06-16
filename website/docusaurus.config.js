// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'xx Network Docs',
  tagline: 'xx Network node installation instructions.',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xx network', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://git.xx.network/xx_network/node-handbook/-/blob/master/website/',
        },
        blog:false,
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/xx-social-card.jpg',
      navbar: {
        title: 'Network Docs',
        logo: {
          alt: 'xx',
          src: 'img/xx_network.svg',
        },
        items: [
/*          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://xx.network',
            label: 'xx Network',
            position: 'right',
          },
          {
            href: 'https://xxfoundation.org',
            label: 'xx Foundation',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tools',
            items: [
              {
                label: 'xx Dashboard',
                to: 'https://dashboard.xx.network',
              },
              {
                label: 'xx Wallet',
                to: 'https://wallet.xx.network',
              },
              {
                label: 'xx Explorer',
                to: 'https://explorer.xx.network',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.xx.network',
              },
              {
                label: 'Discord',
                href: 'https://discord.xx.network',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/xx_network',
              },
            ],
          },
          {
            title: 'More',
            items: [
/*              {
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'Handbook Source Code',
                href: 'https://git.xx.network/xx_network/node-handbook',
              },
              {
                label: 'cMixx Developer Docs',
                href: 'https://xx.network/developers-mixnet/',
              },
              {
                label: 'Blockchain Developer Docs',
                href: 'https://xx.network/developers-blockchain/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} xx Network`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
