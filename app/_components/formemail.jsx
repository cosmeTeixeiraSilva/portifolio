"use client";
import { useState, useEffect } from "react";
import { sendEmail } from "../actions/actions";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(""); // Remove a mensagem após 3.5 segundos
      }, 3500);
      return () => clearTimeout(timer); // Limpa o timeout se o componente for desmontado
    }
  }, [status]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Aguarde por favor, enviando e-mail...");

    const form = new FormData(event.target);
    const response = await sendEmail(form);

    setStatus(response.message);

    if (response.success) {
      event.target.reset();
    }
  }

  return (
    <div className="relative w-full sm:w-2/3 mx-auto mt-10">
      {/* Mensagem de Status - Sobrepondo o formulário */}
      {status && (
        <p className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-400 text-white p-2 rounded border-2 border-white font-semibold text-center shadow-md z-10 w-3/4">
          {status}
        </p>
      )}

      <form
        id="emailForm"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 rounded bg-white relative z-0"
      >
        <p className="text-center font-semibold underline underline-offset-4 text-black">
          Entre em Contato:
        </p>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Seu e-mail"
          required
          className="border p-2 rounded w-full text-black"
        />

        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Assunto"
          required
          className="border p-2 rounded w-full text-black"
        />

        <input
          type="number"
          name="celular"
          id="celular"
          max={999999999999}
          placeholder="35900000000"
          required
          className="border p-2 rounded w-full text-black"
        />

        <textarea
          name="message"
          id="message"
          placeholder="Mensagem"
          required
          className="border p-2 rounded w-full text-black"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
