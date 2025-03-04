"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
