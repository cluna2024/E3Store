// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'E3 Store',
  tagline: 'Comercio Unificado Sustentable',
  url: 'https://cluna2024.github.io', // URL de GitHub Pages
  baseUrl: '/E3Store/', // Ruta base de tu proyecto
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Configuración de GitHub Pages
  organizationName: 'cluna2024', // Tu nombre de usuario u organización en GitHub
  projectName: 'E3Store', // El nombre de tu repositorio en GitHub

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Edit URL para contribuir en GitHub
          editUrl: 'https://github.com/cluna2024/E3Store/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/cluna2024/E3Store/tree/main/',
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
        title: 'E3 Store',
        logo: {
          alt: 'E3 Store Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar', // Referencia a tu sidebar
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/cluna2024/E3Store',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Inicio',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cluna2024/E3Store',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} E3 Store, Inc.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
