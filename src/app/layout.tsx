import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZX Game - Mini Game Development & Publishing",
  description: "Beijing Zhenxiang Game Technology Co., Ltd. - Pioneering the future of mini game development and publishing with innovative, engaging gaming experiences.",
  keywords: ["ZX Game", "Game Development", "Game Publishing", "Mini Games", "Beijing Zhenxiang Game Technology", "Mobile Games", "Casual Games"],
  authors: [{ name: "Beijing Zhenxiang Game Technology Co., Ltd." }],
  openGraph: {
    title: "ZX Game - Mini Game Development & Publishing",
    description: "Pioneering the future of mini game development and publishing with innovative, engaging gaming experiences.",
    url: "https://zxgaming.xyz",
    siteName: "ZX Game",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZX Game - Mini Game Development & Publishing",
    description: "Pioneering the future of mini game development and publishing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
