import type { NextConfig } from "next";
import { SITE_BASE_PATH } from "./src/config/site";

const nextConfig: NextConfig = {
    output: "export",
    basePath: SITE_BASE_PATH,
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
