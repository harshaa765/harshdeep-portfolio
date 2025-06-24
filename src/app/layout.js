'use client';

import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import { ThemeProvider } from 'next-themes';

import Header from '../components/sections/header';
import Footer from '../components/sections/footer';

import './globals.css';

const font = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={font.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_ANALYTICS_ID} />
          <Header />
          <main className="relative overflow-hidden min-h-screen bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-300">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
