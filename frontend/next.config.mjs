/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bank_accounts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
