import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { ThemeProviders } from "@/app/theme-provider";

// for declaring environment variables in the backend(server) folder
// to read .env variables in short
const dotenv = require("dotenv");
dotenv.config();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yasuaki Kumazaki",
  description: "Welcome to my portfolio",
  icons: "/favicon.ico",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body
        className={`${inter.className} bg-stone-400 dark:bg-stone-700 text-black dark:text-white px-10 font-helvetica_neue`}
      >
        <ThemeProviders>
          <Navbar />
          <main className="">{children}</main>
        </ThemeProviders>
      </body>
    </html>
  );
}
