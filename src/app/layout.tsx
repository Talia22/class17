import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: ReactNode; 
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
