import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./home/header";
import Background from "./background";

import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const DinBold = localFont({
  src: [
    {
      path: "../app/fonts/D-DIN-Bold.ttf",
    },
  ],
  variable: "--font-dinBold",
});
const DinAlternate = localFont({
  src: [
    {
      path: "../app/fonts/DINAlternate-Bold.ttf",
    },
  ],
  variable: "--font-dinAlternate",
});
const DinCondensed = localFont({
  src: [
    {
      path: "../app/fonts/D-DINCondensed.ttf",
    },
  ],
  variable: "--font-dinCondensed",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className="">
        {children}
        <Header />
        


      </body>
    </html>
  );
}
