import styles from '@/app/ui/projects.module.css';
import clsx from "clsx";
import { MuseoModerno, Poppins } from "next/font/google";
import { useEffect, useState } from 'react';
import { fetchRepos } from '../lib/api';
// import { fetchRepos } from '../lib/api';

const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["400", "500"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["500", "600"],
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

    const filteredRepos = repos.filter((repo) => repo.description);

    return (
        <section className={clsx(styles.projects, className)}>
            <h2 className={`${museoModerno.variable}`}>projects</h2>
            <div className={styles.projectList}>
                {filteredRepos.map((repo) => (
                    <article key={repo.id} className={`${styles.project} ${poppins.variable}`}>
                        <h3>{repo.name}</h3>
                        
                        {repo.description && <p>{repo.description}</p>}
                    </article>
                ))}
            </div>
        </section>
    );
}