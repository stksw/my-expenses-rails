/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboards",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
