import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "东莞市志和色母科技有限公司",
  description: "专业色母粒制造商，致力于提供高品质的色母粒产品与解决方案",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}
      >
        <LanguageProvider>
          <Navbar />
          <main style={{ paddingTop: '76px' }}>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
