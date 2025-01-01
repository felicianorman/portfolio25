import styles from "@/app/ui/navigation.module.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";



const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["500", "600"],
});

export default function Navigation() { 
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
                      });
                  });
              });
          });
      }
  }, []);

  const handleNavigation = (section: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      if (typeof window !== "undefined") {
          import("jquery-scrollify").then((scrollify) => {
              scrollify.default.move(`#${section}`);
          });
      }
  };

    
    return (
        <nav className={styles.nav}>
            <ul className={`${styles.navList} ${poppins.variable}`}>
                <li>
                    <Link href="#1" onClick={handleNavigation("1")}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#2" onClick={handleNavigation("2")}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#3" onClick={handleNavigation("3")}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="#4" onClick={handleNavigation("4")}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
