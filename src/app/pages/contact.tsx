import styles from "@/app/ui/contact.module.css";
import clsx from "clsx";
import { MuseoModerno } from "next/font/google";
import { useForm } from "react-hook-form";
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

interface ContactProps {
    className?: string;
}

export default function Contact({ className }: ContactProps) {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <form className={clsx(styles.contact, className)} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={`${museoModerno.variable}`}>contact</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" {...register("name", { required: true })} />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" {...register("email", { required: true })} />
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" {...register("message", { required: true })} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
