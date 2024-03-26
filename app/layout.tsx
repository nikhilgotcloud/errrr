"use client";
import React, { useEffect } from 'react';
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Load Tawk.to script
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6427da434247f20fefe93064/1gstqp6p9';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.body.appendChild(s1);

    // Remove script on component unmount
    return () => {
      document.body.removeChild(s1);
    };
  }, []);
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#ffffff] ${inter.className}`}>
        <Providers>
        <Header />
      {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

