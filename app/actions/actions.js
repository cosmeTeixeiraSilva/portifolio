"use server";
import nodemailer from "nodemailer";
import { writeFile, unlink } from "fs/promises";
import path from "path";
//Envio sem Anexo 
export async function sendEmail(formData) {
    const email = formData.get("email");
    const celular = formData.get("celular");
    const subject = formData.get("subject") + " - " + formData.get("email");
    const message = formData.get("message")+ "\n" + formData.get("celular");
   

    //Dados Recebidos pelo FrontEnd
    console.log(email);
    console.log(subject);
    console.log(message);
    console.log(celular);

    //return { success: false, message: "Dados Recebidos Com Sucesso." };
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL_USER, // Defina no .env.local
            pass: process.env.EMAIL_PASS,  // Senha de APP criada no GMAIL
        },

    });

    try {
        await transporter.sendMail({

            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_PARTICULAR,
            //cc: email1, email2, email3,   //Como Copia - carbon copy
            //bcc: email, email,            //Como Copia Oculta - blind carbon copy
            subject: subject,
            text: message,

        });

        console.log("Email Enviado com Sucesso");
        return { success: true, message: "E-mail enviado com sucesso!" };

    } catch (error) {
        console.log("Erro ao enviar e-mail:", error);
        console.log(process.env.EMAIL_USER)
        console.log(process.env.EMAIL_PASS)
        return { success: false, message: "Falha ao enviar e-mail." };
    }
}
//Envio com Anexo 
export async function sendEmail_AnexoPDF(formData) {
    const email = formData.get("email");
    const subject = formData.get("subject") + " - " + formData.get("email");
    const message = formData.get("message");

    //Dados Recebidos pelo FrontEnd
    console.log(email);
    console.log(subject);
    console.log(message);


    //return { success: false, message: "Dados Recebidos Com Sucesso." };
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL_USER, // Defina no .env.local
            pass: process.env.EMAIL_PASS,  // Senha de APP criada no GMAIL
        },

    });

    try {
        await transporter.sendMail({

            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_PARTICULAR,
            //cc: email1, email2, email3,   //Como Copia - carbon copy
            //bcc: email, email,            //Como Copia Oculta - blind carbon copy
            subject: subject,
            text: message,

        });

        console.log("Email Enviado com Sucesso");
        return { success: true, message: "E-mail enviado com sucesso!" };

    } catch (error) {
        console.log("Erro ao enviar e-mail:", error);
        console.log(process.env.EMAIL_USER)
        console.log(process.env.EMAIL_PASS)
        return { success: false, message: "Falha ao enviar e-mail." };
    }
}
