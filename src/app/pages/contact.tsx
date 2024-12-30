import styles from "@/app/ui/contact.module.css";
import clsx from "clsx";
import { MuseoModerno } from "next/font/google";

const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["400", "500"],
});

interface ContactProps {
    className?: string;
}

export default function Contact({ className }: ContactProps) {
    return (<section className={clsx(styles.contact, className)}>
        <h2 className={`${museoModerno.variable}`}>contact</h2>
    </section>)
}
