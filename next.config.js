const nextTranslate = require('next-translate');
const locale = process.env.NEXT_LOCALE;

module.exports = nextTranslate({
  // defaultLocale: locale,
  // localeDetection: false,
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  distDir: `build/${locale === "es" ? "es" : "en"}`,
  images: {
    minimumCacheTTL: 31536000,
    domains: [`${process.env.NEXT_PUBLIC_PROJECT_ID}.supabase.co`]
  },
  experimental: {
    esmExternals: false,
  }
});