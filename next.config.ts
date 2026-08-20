import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://<user>.github.io/horse/,
// so all routes/assets need the `/horse` base path in that build.
//
// GitHub Pages only serves static files (no server), so that build uses
// `output: "export"`. Everywhere else (Vercel, `next dev`, `next start`)
// we keep the default Node.js server output, because the `/api/lead`
// route handler needs to run as real server code (a static export does
// not support Route Handlers that read the incoming request body).
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? { output: "export" as const, basePath: "/horse" }
    : {}),
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
