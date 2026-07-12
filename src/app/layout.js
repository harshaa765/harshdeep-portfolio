import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

import Header from '../components/sections/header';
import Footer from '../components/sections/footer';
import { Providers } from './providers';

import './globals.css';

const font = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning className={font.className}>
      <body className='bg-base-100 text-base-content min-h-screen'>
        <Providers>
          {process.env.NEXT_PUBLIC_ANALYTICS_ID && (
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_ANALYTICS_ID} />
          )}
          <Header />
          <main className='relative min-h-screen overflow-hidden'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
