import styles from '@/app/ui/projects.module.css';
import clsx from "clsx";
import { MuseoModerno } from "next/font/google";
import { useEffect, useState } from 'react';
import { fetchRepos } from '../lib/api';
// import { fetchRepos } from '../lib/api';

const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["400", "500"],
});

interface ProjectsProps {
    className?: string;
}

export default function Projects({ className }: ProjectsProps) {
    const [repos, setRepos] = useState<Array<{ id: number; html_url: string; name: string; description?: string }>>([]);

    
    useEffect(() => {
        async function loadRepos() {
            try {
                const data = await fetchRepos();
                console.log(data, 'data');
                setRepos(data);
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        }
        loadRepos();
    }, []);


    return (
        <section className={clsx(styles.projects, className)}>
            <h2 className={`${museoModerno.variable}`}>projects</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        {repo.description && <p>{repo.description}</p>}
                    </li>
                ))}
            </ul>
        </section>
    );
}