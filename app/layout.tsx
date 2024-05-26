import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibm = IBM_Plex_Serif({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600","700"], variable: '--font-ibm' });

export const metadata: Metadata = {
  title: "FinTracker",
  description: "Financial Tracker, your modern banking platform for everyone",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibm.variable}`}>{children}</body>
    </html>
  );
}
