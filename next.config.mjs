/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#who-i-am", permanent: false },
      { source: "/story", destination: "/#story", permanent: false },
      { source: "/work", destination: "/#work", permanent: false },
      { source: "/resume", destination: "/#resume", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false }
    ];
  }
};

export default nextConfig;
