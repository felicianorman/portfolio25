import styles from "@/app/ui/contact.module.css";
import clsx from "clsx";
import { MuseoModerno, Poppins } from "next/font/google";
import { useForm } from "react-hook-form";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { sendEmail } from "../lib/sendEmail";

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const museoModerno = MuseoModerno({
    variable: "--font-museo-moderno",
    subsets: ["latin"],
    weight: ["400", "500"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["500", "600"],
});


interface ContactProps {
    className?: string;
}

export default function Contact({ className }: ContactProps) {
    const year = new Date().getFullYear();

    const { register, handleSubmit, 
        formState: { errors }
     } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <section className={clsx(styles.contact, className)}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`${poppins.variable} ${styles.contactForm}`}
            >
                <div className={`${styles.titles}`}>
                    <h2 className={museoModerno.variable}>send me a message</h2>
                    <h3>
                        Contact me for any questions or inquiries. <br></br>I will get back to you as soon as
                        possible. 👋
                    </h3>
                </div>
                <div className={styles.contactFormFields}>
                    <label htmlFor="name">Your full name</label>
                    <input
                        id="name"
                        type="text"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}{" "}
                    {/* Display error */}
                </div>

                <div className={styles.contactFormFields}>
                    <label htmlFor="email">Your email</label>
                    <input id="email" type="email" {...register("email", { required: true })} />
                </div>

                <div className={styles.contactFormFields}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" {...register("message", { required: true })} />
                </div>
                <div className={styles.contactFormBtn}>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <footer className={styles.footer}>
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/felicia-norman-1b8a15152/"
                            target="_blank"
                            rel="noreferrer"
                            title="LinkedIn"
                        >
                            <AiFillLinkedin className={styles.svg} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/felicianorman" target="_blank" rel="noreferrer"
                        title="GitHub">
                            <AiFillGithub className={styles.svg} />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:felicianylandernorman@gmail.com" target="_blank" rel="noreferrer"
                        title="Email">
                            <AiFillMail className={styles.svg} />
                        </a>
                    </li>
                </ul>
                <div className={`${poppins.variable} ${styles.footerText}`}>
                    <p>&copy; {year} Felicia Norman. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
}
