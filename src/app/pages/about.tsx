import styles from "@/app/ui/about.module.css";
import { MuseoModerno, Poppins } from "next/font/google";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["500", "600"],
});

const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export default function About() {
    return (
        <section className={`${styles.about} ${poppins.variable}`}>
            <article className={styles.aboutText}>
                <h2 className={`${styles.title} ${museoModerno.variable}`}>About</h2>
                <p>
                    Frontend Developer based in Stockholm.
                </p>
            </article>
            <article className={styles.workText}>
                <h2 className={`${styles.title} ${museoModerno.variable}`}>Experience</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec
                    nunc
                </p>
            </article>
        </section>
    );
}