import styles from '@/app/ui/projects.module.css';
import clsx from "clsx";
import { MuseoModerno } from "next/font/google";
import { fetchRepos } from '../lib/api';

const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export async function getStaticProps() { 
    const repos = await fetchRepos();
     console.log("Repos data:", repos);
    return {
        props: {
            repos,
        },
        revalidate: 60
    };
}

interface ProjectsProps {
    className?: string;
    repos: Array<{
        name: string;
        description: string;
        html_url: string;
        id: number;
    }>
}

export default function Projects({ className, repos }: ProjectsProps) {
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