import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: "BetterWorld",
  description: "By Fiza Sayyed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}
      >{children}</body>
    </html>
  );
}
