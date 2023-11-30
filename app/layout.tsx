import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Mavride",
  description: "Your Journey To Wellness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative w-[100%]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
