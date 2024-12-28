import styles from "@/app/ui/navigation.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["500", "600"],
});

export default function Navigation() { 
    return (
        <nav className={styles.nav}>
            <ul className={`${styles.navList} ${poppins.variable}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
