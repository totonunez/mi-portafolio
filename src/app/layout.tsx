"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footerr from "./components/Footer";
import Head from "next/head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
        <Footerr />
      </body>

    </html>
  );
}
