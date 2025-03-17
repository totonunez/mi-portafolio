"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footerr from "./components/Footer";
import Head from "next/head";
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />  
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-SXNWCZEJVT"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SXNWCZEJVT', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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
