/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
    images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
            port: "5000",
            pathname: "/uploads/**",
          },
        ],
      },
};

export default nextConfig;
