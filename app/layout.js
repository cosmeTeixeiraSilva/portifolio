import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export const metadata = {
  title: "Meu Portifólio - cosme.teixeira@gmail.com",
  description: "cosme.teixeira@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" autoComplete="off">
      <body

      >
        {children}
      </body>
    </html>
  );
}
