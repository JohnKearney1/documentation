/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'John Kearney - Documentation',
  tagline: 'Explore detailed API information for some of my more complex projects!',
  url: 'https://docs.kearneyjohn.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JohnKearney1', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'KearneyJohn.com',
      logo: {
        alt: "John Kearney's Documentation Site Logo",
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'documentation',
          position: 'left',
          label: 'Documentation',
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/JohnKearney1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Solana API',
              to: '/docs/Solana%20REST%20API/Endpoints',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://kearneyjohn.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/users/JohnKearney#1196',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Joh5',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Johnmkearney',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/JohnKearney1',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} John Kearney (2021).`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/JohnKearney1',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/JohnKearney1',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
