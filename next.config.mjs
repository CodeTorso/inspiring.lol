/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["did-see.pockethost.io"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "did-see.pockethost.io",
        port: "",
        pathname: "/api/files/**",
      },
    ],
  },
};

export default nextConfig;
