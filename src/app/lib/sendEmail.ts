import { FormData } from "../pages/contact";

export function sendEmail(data: FormData) {
    const apiEndpoint = "/api/email";

    fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((response) => {
            if (response.message === "Email sent!") {
                alert("Your message has been sent successfully! 🎉");
            } else {
                alert("There was an issue sending your message. Please try again.");
            }
        })
        .catch((err) => {
            alert("An error occurred while sending the email. Please try again.");
            console.error(err);
        });
}
