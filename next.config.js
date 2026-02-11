const nextTranslate = require('next-translate');
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
    domains: supabaseUrl ? [new URL(supabaseUrl).hostname] : [],
  },
  experimental: {
    esmExternals: false,
  },
});
