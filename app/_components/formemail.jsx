"use client";
import { useState } from "react";
import { sendEmail } from "../actions/actions";

export default function ContactForm() {
    const [status, setStatus] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const response = await sendEmail(formData);
        setStatus(response.message);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4  w-full mx-auto p-4 rounded ">
            <p>Entre em Contato: </p>
            <input type="email" name="email" placeholder="Seu e-mail" required className="border p-2 rounded w-2/3 mx-auto" />
            <input type="text" name="subject" placeholder="Assunto" required className="border p-2 rounded w-2/3 mx-auto text-black" />
            <textarea name="message" placeholder="Mensagem" required className="border p-2 rounded w-2/3 mx-auto text-black" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-2/3 mx-auto">Enviar</button>
            {status && <p>{status}</p>}
        </form>
    );
}
