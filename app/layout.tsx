import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronaldo Cantarelli — Psicanalista Clínico",
  description:
    "Acompanhamento psicanalítico para adultos, casais e famílias. Psicanálise clínica, terapia familiar e saúde mental cristã.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
