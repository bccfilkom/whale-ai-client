import NextAuthProvider from "@/components/provider/nextauth";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import ProgressBar from "@/components/progress-bar";

export const metadata: Metadata = {
  title: "Whale AI",
  description:
    "Connecting Everyday Investors to Stock Market Opportunities. We simplify stock trading with tailored insights and tools, making it easy for anyone to grow their portfolio confidently.",
};

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-black`}>
        <ProgressBar />
        <Toaster
          position="top-center"
          pauseWhenPageIsHidden={true}
          theme="dark"
          richColors={true}
        />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
