import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Billy Lee - Software and Web Developer Portfolio | University of Waterloo Student",
  description:
    "Discover the portfolio of Billy Lee, a talented software and web developer and student at the University of Waterloo. Explore his projects and learn more about his experience in creating innovative solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
