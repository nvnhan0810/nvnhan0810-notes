import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GiaLang Blog",
  description: "Small Blog App of Gialang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <div className="container">
            <div className="wrapper">
              <Navbar />

              {children}

              <Footer />
            </div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
