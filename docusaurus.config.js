// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'E3 Store',
  tagline: 'Comercio Unificado Sustentable',
  favicon: 'img/favicon.ico',
  
  // URL de tu sitio y baseUrl
  url: 'https://cluna2024.github.io',
  baseUrl: '/E3Store/',

  organizationName: 'cluna2024',
  projectName: 'E3Store',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cluna2024/E3Store/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/cluna2024/E3Store/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'E3 Store',
      logo: {
        alt: 'E3 Store Logo',
        src: 'img/logo.png', // Reemplaza con la imagen que subiste
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentación',
        },
        { to: '/blog', label: 'Ultimos Cambios', position: 'left' },
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
            { label: 'Inicio', to: '/docs/intro' },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
          ],
        },
        {
          title: 'Más',
          items: [
            { label: 'GitHub', href: 'https://github.com/cluna2024/E3Store' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} E3 Store, Inc.`,
    },
  },
};

module.exports = config;
