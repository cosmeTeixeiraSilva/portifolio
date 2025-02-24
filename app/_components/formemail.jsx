"use client";
import { useState } from "react";
import { sendEmail } from "../actions/actions";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);
    //form.append("phone", phone); // Adiciona o telefone manualmente

    const response = await sendEmail(form);
    setStatus(response.message);
  }

  return (
    <form
      id="emailForm"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full mx-auto p-4 rounded"
    >
      <p className="text-center font-semibold underline underline-offset-4">
        Entre em Contato:
      </p>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu e-mail"
        required
        className="border p-2 rounded w-full sm:w-2/3 mx-aut text-black"
      />

      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Assunto"
        required
        className="border p-2 rounded w-full sm:w-2/3 mx-auto text-black"
      />

      {/* Campo com máscara de telefone */}
      <input
        type="number"
        name="celular"
        id="celular"
        max={999999999999}
        placeholder="35900000000"
        required
        className="border p-2 rounded w-full sm:w-2/3 mx-auto text-black"
      />

      <textarea
        name="message"
        id="message"
        placeholder="Mensagem"
        required
        className="border p-2 rounded w-full sm:w-2/3 mx-auto text-black"
      />
      {status && (
        <p className=" bg-green-400 p-2 rounded border-2 border-black font-semibold">
          {status}
        </p>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full sm:w-2/3 mx-auto"
      >
        Enviar
      </button>
    </form>
  );
}
