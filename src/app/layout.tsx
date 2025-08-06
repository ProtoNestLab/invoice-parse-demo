import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { TopNavBar } from "@/app/_components/top-nav-bar";
import { ThemeProvider } from "@/app/theme-provider";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Invoice Parser",
  description: "Smart invoice parser",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${geist.variable}`} lang="en">
      <body className="flex min-h-dvh flex-col">
        <TRPCReactProvider>
          <ThemeProvider>
            <TopNavBar />
            <main className="p-6">{children}</main>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
