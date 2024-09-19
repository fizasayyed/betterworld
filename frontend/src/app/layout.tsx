import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { SessionProvider } from "next-auth/react";
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
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
