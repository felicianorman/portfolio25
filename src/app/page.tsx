"use client";

import styles from "@/app/ui/home.module.css";
import { MuseoModerno } from "next/font/google";
import { useEffect } from "react";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Navigation from "./ui/navigation";


const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export default function Home() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            import("jquery").then(($) => {
                import("jquery-scrollify").then((scrollify) => {
                    $.default(function () {
                        scrollify.default({
                            section: ".section",
                            sectionName: "section-name",
                            scrollSpeed: 1100,
                            setHeights: false,
                            updateHash: true,
                            afterResize() {
                                if (window.innerWidth < 768) {
                                    scrollify.default.disable();
                                }
                            },
                            
                        });
                    });
                });
            });
        }
    }, []);


  return (
      <main className={styles.main}>
          <Navigation />
          <div className={`${styles.mainText} section`} data-section-name="1">
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
          </div>
          <About className={`${styles.about} section`} data-section-name="2" />
          <Projects className={`${styles.projects} section`} data-section-name="3" />
          <Contact className={`${styles.contact} section`} data-section-name="4" />
      </main>
  );
}
