const nextTranslate = require('next-translate');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n: {
//     locales: ['en-US', 'es-ES'],
//     defaultLocale: 'en-US',
//   }
// }

// module.export = nextConfig;

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
});
