"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footerr from "./components/Footer";
import Head from "next/head";
import Script from 'next/script';
import { useEffect } from "react";
import { usePathname } from "next/navigation";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Reemplaza useRouter() con usePathname()

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-SXNWCZEJVT", { page_path: pathname });
    }
  }, [pathname]);
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
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5NTC9M5F');
          `,
        }}
      />
      <body className="min-h-screen flex flex-col">
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5NTC9M5F"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
        <Navbar />
        <main className="flex-1">
          
          <Container>{children}</Container>
        </main>
        <Footerr />
      </body>

    </html>
  );
}
