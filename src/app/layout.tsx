import type { Metadata } from "next";
import { PT_Sans, PT_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ptSans = PT_Sans({
  weight: ['400', '700'],
  variable: '--font-pt-sans'
});

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  variable: '--font-pt-serif'
});


export const metadata: Metadata = {
  title: "Fashion Blog",
  description: "Blog about fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSans.variable} ${ptSerif.variable} antialiased overflow-x-hidden`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
