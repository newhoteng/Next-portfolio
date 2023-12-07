import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { poppins } from '@/app/ui/fonts';
import './globals.css';
import NavLinks from './ui/nav-links';
import Footer from './ui/footer';
import { PersonalLogo } from '@/public/icons';

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
        <header className="z-10 bg-[#fff9f3] fixed top-0 left-0 w-full h-[4rem] flex items-center justify-between">
          <nav className="flex items-center justify-between max-w-screen-2xl w-full mx-auto px-4 md:px-12">
            <div className=" border border-accent rounded-lg w-12 md:w-14 text-secondary flex items-center justify-center">
              <PersonalLogo />
            </div>
            <div className='flex items-center justify-center gap-4 sm:gap-8'>
              <NavLinks />
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-8rem)] mt-[4rem] px-4 md:px-12">{children}</main>
        <footer className='h-[4rem] flex items-center justify-between px-4 md:px-12'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
