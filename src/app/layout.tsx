import React, { ReactNode } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Pitstop",
  description: "E-commerce site for car mods and accessories",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        {/* TopBar */}
        <TopBar />

        {/* Navbar */}
        <Navbar />

        {/* Main content starts below the fixed components */}
        <main className="mt-[138px]">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
