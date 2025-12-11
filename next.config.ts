import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  poweredByHeader: false,
  allowedDevOrigins: [
    "*"

  ],
};

export default nextConfig;
