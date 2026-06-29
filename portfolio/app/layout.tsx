import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareDescription =
  "Hey, this is Dhiraj — visit to see what I do in my daily life, and happy to connect with you.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhirajdgandhi.github.io"),
  title: "Dhiraj Gandhi",
  description: shareDescription,
  openGraph: {
    title: "Dhiraj Gandhi",
    description: shareDescription,
    url: "https://dhirajdgandhi.github.io",
    siteName: "Dhiraj Gandhi",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dhiraj Gandhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiraj Gandhi",
    description: shareDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
