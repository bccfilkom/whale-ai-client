import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/components/provider/nextauth";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Whale AI",
  description:
    "Whale AI bertujuan untuk memberikan analisis pasar saham yang mendalam dan rekomendasi portofolio berbasis profil risiko pengguna.",
};

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Toaster
          position="top-center"
          pauseWhenPageIsHidden={true}
          theme="dark"
          richColors={true}
        />
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
