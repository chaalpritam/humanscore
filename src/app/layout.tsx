import type { Metadata } from "next";
// import { Quicksand } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

// const quickSand = Quicksand({ 
//   subsets: ["latin"],
//   variable: "--font-quicksand",
// });

const smootherFont = localFont({
  src: '../../public/fonts/Smoother.ttf',
  display: 'swap',
  variable: "--font-smoother",
})

export const metadata: Metadata = {
  title: "HumanScore",
  description: "the score for homo sapiens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={smootherFont.className}>{children}</body>
    </html>
  );
}
