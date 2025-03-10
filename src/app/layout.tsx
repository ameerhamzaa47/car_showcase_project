import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";


export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars for rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
