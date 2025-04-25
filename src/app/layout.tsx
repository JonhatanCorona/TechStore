import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/Context/Auth";
import { CartProvider } from "@/Context/Cart"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechStore",
  description: "Power Tecnology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary-50 flex flex-col min-h-screen ` }
      >
    <AuthProvider>
        <CartProvider>
        <header>
          <Navbar />
        </header>
        <main className="flex-grow flex justify-center items-center">
          {children}
        </main>
        <Footer />
        </CartProvider>
    </AuthProvider>
      </body>
    </html>
  );
}


