import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CounterProvider } from "../contexts/CounterContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Counter App",
  description: "Simple counter app",
};

// Script para prevenir el parpadeo del tema (FOUC)
const ThemeScript = () => {
  const script = `
    (function() {
      try {
        // Obtener tema de localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || savedTheme === 'light') {
          document.documentElement.classList.toggle('dark', savedTheme === 'dark');
          return;
        }
        
        // Obtener preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', prefersDark);
      } catch (e) {}
    })();
  `;
  
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CounterProvider>{children}</CounterProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}