import styles from "@/app/ui/home.module.css";
import { MuseoModerno } from "next/font/google";
import Navigation from "./ui/navigation";

const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export default function Home() {
  return (
      <main className={styles.main}>
          <Navigation />
          <div className={styles.mainText}>
              <h1 className={`${styles.title} ${museoModerno.variable}`}>
                  Hi! I&apos;m Felicia Norman. <br></br>
              </h1>
              <div className={`${styles.words} ${styles.rotate}`}>
                  <h1 className={`${styles.subTitle} ${museoModerno.variable}`}>Developer.</h1>
                  <h1 className={`${styles.subTitle} ${museoModerno.variable}`}>Designer.</h1>
                  <h1 className={`${styles.subTitle} ${museoModerno.variable}`}>Problem Solver.</h1>
                  <h1 className={`${styles.subTitle} ${museoModerno.variable}`}>CSS Ninja.</h1>
                  <h1 className={`${styles.subTitle} ${museoModerno.variable}`}>
                      Stack Overflow Navigator.
                  </h1>
              </div>
              <div className={styles.svgContainer}>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#ffffff"
                      className={styles.svg}
                  >
                      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
              </div>
          </div>
      </main>
  );
}
/* https://codepen.io/elfick/pen/rQYEjg*/