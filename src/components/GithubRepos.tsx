import { FaGitAlt } from "react-icons/fa";
import { TbFaceIdError } from "react-icons/tb";
import SectionHeader from "@/components/SectionHeader";
import type { Repo } from "@/lib/github";

type Props = {
    repos: Repo[];
    error: boolean;
};

export default function GithubRepos({ repos, error }: Readonly<Props>) {
    return (
        <section className="terminal-box" id="projects">
            <SectionHeader>Projects</SectionHeader>

            <div className="terminal-command repo-command-line">
                <span>{'➜ ~ ls -l github.com/rorsman | awk \'{print "'}</span>
                <FaGitAlt className="inline" size={16} />
                <span>{'" $9 " - " $10}\''}</span>
            </div>

            {error ? (
                <div className="error-message" role="alert">
                    <TbFaceIdError size={24} />
                    <span>Failed to load projects. Please try again later.</span>
                </div>
            ) : (
                repos.map(({ id, name, url, description }) => (
                    <div key={id} className="repo-entry">
                        <FaGitAlt size={24} color="var(--terminal)" aria-hidden="true" />
                        <p>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="repo-link"
                            >
                                {name}
                            </a>
                            {description ? ` - ${description}` : ""}
                        </p>
                    </div>
                ))
            )}
        </section>
    );
}
