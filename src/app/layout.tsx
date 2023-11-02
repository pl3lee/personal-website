import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Billy Lee - Software and Web Developer | University of Waterloo Student",
  description:
    "Hi! I'm Billy Lee, a Math student at the University of Waterloo.",
  keywords: [
    "Billy Lee",
    "Billy",
    "Lee",
    "Software",
    "Web",
    "Developer",
    "University",
    "Waterloo",
    "Student",
    "Math",
    "Mathematics",
    "Computer",
    "Science",
    "Computer Science",
    "Uwaterloo",
    "UW",
    "UW Student",
    "UW Math",
    "UW Math Student",
    "UWaterloo",
    "uwaterloo",
    "uw",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
