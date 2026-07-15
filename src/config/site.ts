const productionBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/rorsman.github.io";

// GitHub Pages needs a repository prefix, while local development runs at `/`.
export const SITE_BASE_PATH = process.env.NODE_ENV === "development" ? "" : productionBasePath;

export function withBasePath(path: string) {
    const basePath = SITE_BASE_PATH === "/" ? "" : SITE_BASE_PATH.replace(/\/$/, "");
    return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
