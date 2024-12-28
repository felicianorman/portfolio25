import styles from "@/app/ui/home.module.css";
import { MuseoModerno, Poppins } from "next/font/google";
import Image from "next/image";
import Navigation from "./ui/navigation";


const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400"],
});

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
              <h1 className={`${styles.subTitle} ${museoModerno.variable}`}>Developer.</h1>
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