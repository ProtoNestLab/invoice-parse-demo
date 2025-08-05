import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { TRPCReactProvider } from '@/trpc/react';
import { TopNavBar } from '@/app/_components/top-nav-bar';

export const metadata: Metadata = {
  title: 'Invoice Parser',
  description: 'Smart invoice parser',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${geist.variable}`}>
      <body className='min-h-dvh flex flex-col'>
        <TRPCReactProvider>
          <TopNavBar />
          <main className='p-6 lg:p-24'>
            {children}
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );  
}
