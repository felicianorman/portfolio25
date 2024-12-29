"use client";

import styles from "@/app/ui/home.module.css";
import $ from "jquery";
import scrollify from "jquery-scrollify";
import { MuseoModerno } from "next/font/google";
import { useEffect } from "react";
import About from "./pages/about";
import Navigation from "./ui/navigation";


const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export default function Home() {
    useEffect(() => { 
        $(function () {
            scrollify({
                section: ".section",
                sectionName: "section-name",
                interstitialSection: "",
                easing: "easeOutExpo",
                scrollSpeed: 1100,
                offset: 0,
                scrollbars: true,
                standardScrollElements: "",
                setHeights: true,
                overflowScroll: true,
                updateHash: true,
                touchScroll: true,
                before: function () {},
                after: function () {},
                afterResize: function () {},
                afterRender: function () {}
            })
        })

        
    });
  return (
      <main className={styles.main}>
          <Navigation />
          <div className={`${styles.mainText} section`}>
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
          <About className={`${styles.about} section`} />
      </main>
  );
}
