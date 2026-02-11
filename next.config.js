const nextTranslate = require('next-translate');
const locale = process.env.NEXT_LOCALE;

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 31536000,
    domains: [new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname,]
  }
});