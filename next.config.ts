import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/rorsman.github.io",
    reactStrictMode: true,
    assetPrefix: "./",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
