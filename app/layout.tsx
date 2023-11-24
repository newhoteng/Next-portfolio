import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { poppins } from '@/app/ui/fonts';
import './globals.css';
import NavLinks from './ui/nav-links';
import Footer from './ui/footer';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harriet Oteng',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${poppins.className} relative text-paragraph bg-[#fff9f3] max-w-screen-2xl my-0 mx-auto`}>
        <header className='z-10 bg-[#fff9f3] fixed top-0 w-full h-[4rem] flex items-center justify-center px-4 md:px-8'>
          <div className='flex items-center justify-center gap-4 sm:gap-8'>
            <NavLinks />
          </div>
        </header>
        <main className='min-h-[calc(100vh-8rem)] mt-[4rem] border-2 border-blue-500 px-4 md:px-8'>{children}</main>
        <footer className='h-[4rem] flex items-center justify-between px-4 md:px-8'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
