import styles from "@/app/ui/about.module.css";
import clsx from "clsx";
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

interface AboutProps {
    className?: string;
}

export default function About({ className }: AboutProps) {
    return (
        <section className={clsx(styles.about, poppins.variable, className)}>
            <article className={styles.aboutText}>
                <h2 className={`${styles.title} ${museoModerno.variable}`}>about</h2>
                <p>
                    I&apos;m a Frontend Developer based in Stockholm, Sweden, with a passion for
                    creating beautiful and seamless user experiences.
                    <br></br>
                    <br></br>
                    My creative interests include painting, knitting and writing - which led me to a
                    career in web development.
                </p>
            </article>
            <article className={styles.workText}>
                <h2 className={`${styles.title} ${museoModerno.variable}`}>experience</h2>
                <p>
                    In my role as a System Developer at iquest, I contribute to the creation and
                    optimization of the frontend of our core products.
                </p>
            </article>
        </section>
    );
}