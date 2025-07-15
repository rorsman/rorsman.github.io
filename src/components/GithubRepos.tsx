'use client';

import { useEffect, useState } from 'react';
import { FaGitAlt } from 'react-icons/fa';
import { TbFaceIdError } from 'react-icons/tb';
import LoadingSpinner from '@/components/LoadingSpinner';
import SectionHeader from '@/components/SectionHeader';

type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
};

type Props = {
    username: string;
};

export default function GithubRepos({ username }: Readonly<Props>) {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const res = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!res.ok) throw new Error(`Status: ${res.status}`);
                const data = await res.json();
                setRepos(data);
            } catch (err) {
                console.error("Repo fetch error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchRepos();
    }, [username]);

    if (loading) {
        return (
            <div className="terminal-box">
                <SectionHeader>Projects</SectionHeader>
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="terminal-box" id="projects">
            <SectionHeader>Projects</SectionHeader>

            <div className="repo-command-line">
                <span>{'➜ ~ ls -l github.com/rorsman | awk \'{print "'}</span>
                <FaGitAlt className="inline" size={16} />
                <span>{'" $9 " - " $10}\''}</span>
            </div>

            {error ? (
                <div className="error-message">
                    <TbFaceIdError size={24} />
                    <span>Failed to load projects. Please try again later.</span>
                </div>
            ) : (
                repos.map(({ id, name, html_url, description }) => (
                    <div key={id} className="repo-entry">
                        <FaGitAlt size={24} color="white" />
                        <p>
                            <a
                                href={html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="repo-link"
                            >
                                {name}
                            </a>
                            {description ? ` - ${description}` : ''}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
}