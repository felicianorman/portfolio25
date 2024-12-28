import styles from "@/app/ui/home.module.css";
import { MuseoModerno, Poppins } from "next/font/google";
import Image from "next/image";


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
          <div className={styles.mainText}>
              <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.svg}
              >
                  <path
                      d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
              </svg>
              <h1 className={`${styles.title} ${museoModerno.variable}`}>Felicia Norman</h1>

              <h2 className={`${styles.subTitle} ${poppins.variable}`}>
                  Blending creativity and code; to bring ideas to life on the web
              </h2>
          </div>
      </main>
  );
}
