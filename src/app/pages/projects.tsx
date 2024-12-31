import styles from "@/app/ui/projects.module.css";
import clsx from "clsx";
import { MuseoModerno, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchRepos, Repository } from "../lib/api";
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

const projectImages = {
    gyncancersite: "/gyncancerse.png",
    memorygame: "/memory.png",
    "portfolio25": "/portfolio.png",
    "Weather-App": "/weather.png"
};

export default function Projects({ className }: ProjectsProps) {
    const [repos, setRepos] = useState<Repository[]>([]);

    useEffect(() => {
        async function loadRepos() {
            try {
                const data: Repository[] = await fetchRepos();
                console.log(data, "data");
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
                {filteredRepos.length > 0 ? (
                    filteredRepos.map((repo) => {
                        const imageUrl = projectImages[repo.name as keyof typeof projectImages];

                        return (
                            <article
                                key={repo.id}
                                className={`${styles.project} ${poppins.variable}`}
                            >
                                <Image
                                    src={imageUrl}
                                    alt={repo.name}
                                    width={300} 
                                    height={240}
                                    className={styles.projectImage}
                                />
                                <div className={styles.projectText}>
                                    <h3 className={`${museoModerno.variable}`}>{repo.name}</h3>
                                    {repo.description && <p>{repo.description}</p>}
                                    <div className={styles.link}>
                                        <a
                                            className={`${museoModerno.variable}`}
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                    <div className={styles.tags}>
                                        {repo.topics && repo.topics.length > 0 ? (
                                            repo.topics.map((topic) => (
                                                <span key={topic} className={styles.tag}>
                                                    {`${topic} `}
                                                </span>
                                            ))
                                        ) : (
                                            <span className={styles.noTags}>No tags available</span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })
                ) : (
                    <p>No projects available.</p>
                )}
            </div>
        </section>
    );
}
