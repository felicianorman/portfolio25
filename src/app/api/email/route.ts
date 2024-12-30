import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const { email, message, name } = await request.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD
        }
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `Message from ${name} (${email})`,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(info.response);
                }
            });
        });
    
    try {
        await sendMailPromise();
        return NextResponse.json({ message: "Email sent!" });
     }
    catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}