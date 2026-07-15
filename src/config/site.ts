// User sites are served from the domain root. Set NEXT_PUBLIC_BASE_PATH only
// when deploying this app as a project site under a repository path.
const productionBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Project sites need a repository prefix, while this user site runs at `/`.
export const SITE_BASE_PATH = process.env.NODE_ENV === "development" ? "" : productionBasePath;

export function withBasePath(path: string) {
    const basePath = SITE_BASE_PATH === "/" ? "" : SITE_BASE_PATH.replace(/\/$/, "");
    return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
