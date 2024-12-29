import styles from "@/app/ui/navigation.module.css";
import { Poppins } from "next/font/google";
import Link from "next/link";

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
                    <Link href="/#1">Home</Link>
                </li>
                <li>
                    <Link href="/#2">About</Link>
                </li>
                <li>
                    <Link href="/">Projects</Link>
                </li>
                <li>
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
