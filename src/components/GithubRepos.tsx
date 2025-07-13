'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import LoadingSpinner from "@/components/LoadingSpinner";
import SectionHeader from "@/components/SectionHeader";

const GithubRepos: React.FC<Props> = ({username}) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await res.json();
            console.log(data);
            setRepos(data);
            setLoading(false);
        };

        fetchRepos();
    }, [username]);

    const sectionHeader = <SectionHeader>{"Projects"}</SectionHeader>

    if (loading) return (
        <div className="terminal-box">
            {sectionHeader}
            <LoadingSpinner/>
        </div>
    );

    return (
        <div className="terminal-box" id="projects">
            {sectionHeader}
            <div className="flex items-center gap-2 mb-2">
                <span className="font-mono">{'➜  ~ ls -l github.com/rorsman | awk \'{print "⏵ " $9 " - " $10}\''}</span>
            </div>
            {repos.map((repo) => (
                <div key={repo.id} className="flex gap-2">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/git.svg`}
                        alt="Git logo"
                        width={24}
                        height={24}
                    />
                    <p>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline font-bold"
                        >
                            {repo.name}
                        </a> - {repo.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    created_at: string;
    size: number;
};

type Props = {
    username: string;
};

export default GithubRepos;