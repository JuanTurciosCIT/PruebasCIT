const nextTranslate = require('next-translate');
const locale = process.env.NEXT_LOCALE;

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    minimumCacheTTL: 31536000,
    domains: supabaseUrl ? [new URL(supabaseUrl).hostname] : []
  },
  experimental: {
    esmExternals: false,
  }
});