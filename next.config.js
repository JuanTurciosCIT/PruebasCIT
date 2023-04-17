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
  defaultLocale: 'es',
  localeDetection: false,
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    minimumCacheTTL: 31536000,
    domains: [`${process.env.NEXT_PUBLIC_PROJECT_ID}.supabase.co`]
  },
  experimental: {
    esmExternals: false,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/es',
      },
    ]
  },
});
