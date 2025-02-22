"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData) {
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const transporter = nodemailer.createTransport({
        service: "gmail", // Ou use SMTP de outro provedor
        auth: {
            user: process.env.EMAIL_USER, // Defina no .env.local
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: message,
        });
        return { success: true, message: "E-mail enviado com sucesso!" };
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        return { success: false, message: "Falha ao enviar e-mail." };
    }
}
