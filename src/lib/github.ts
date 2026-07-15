type GitHubRepo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
};

export type Repo = Omit<GitHubRepo, "html_url"> & { url: string };

export function isRepo(value: unknown): value is GitHubRepo {
    if (typeof value !== "object" || value === null) return false;

    const repo = value as Record<string, unknown>;
    return (
        typeof repo.id === "number" &&
        typeof repo.name === "string" &&
        typeof repo.html_url === "string" &&
        (typeof repo.description === "string" || repo.description === null)
    );
}

export async function fetchGitHubRepos(username: string): Promise<Repo[]> {
    const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos`,
        {
            headers: {
                Accept: "application/vnd.github+json",
            },
        },
    );

    if (!response.ok) {
        throw new Error(`GitHub API returned ${response.status}`);
    }

    const data: unknown = await response.json();
    if (!Array.isArray(data)) {
        throw new Error("Unexpected GitHub API response");
    }

    return data.filter(isRepo).map(({ id, name, html_url, description }) => ({
        id,
        name,
        url: html_url,
        description,
    }));
}
