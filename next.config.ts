import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://<user>.github.io/horse/,
// so all routes/assets need the `/horse` base path in production.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/horse" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/**",
      },
    ],
  },
};

export default nextConfig;
