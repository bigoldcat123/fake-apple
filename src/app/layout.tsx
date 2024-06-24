import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeNavigation from "@/ui/HomeNavigation";
import { getNavigationData } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getNavigationData()
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeNavigation data={data}></HomeNavigation>
        {children}
        <footer className=" h-96">
          something
        </footer>
      </body>
    </html>
  );
}
