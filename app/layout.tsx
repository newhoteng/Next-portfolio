import type { Metadata } from 'next';
import { poppins } from '@/app/ui/fonts';
import './globals.css';
import NavLinks from './ui/nav-links';
import Link from 'next/link';
import Footer from './ui/footer';
import { PersonalLogo } from '@/public/icons';
import ColorThemeToggle from './ui/color-theme-toggle';

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
      <body className={`${poppins.className} relative text-paragraph dark:text-white bg-primary dark:bg-secondary max-w-screen-2xl my-0 mx-auto`}>
        <header className="z-10 dark:bg-secondary bg-primary fixed top-0 left-0 w-full h-[4rem] flex items-center justify-between">
          <nav className="flex items-center justify-between max-w-screen-2xl w-full mx-auto px-4 md:px-12">
            <Link href="/">
              <div className="w-12 md:w-14 stroke-accent text-secondary flex items-center justify-center">
                <PersonalLogo />
              </div>
            </Link>
            <div className='flex items-center justify-center gap-4 sm:gap-8'>
              <NavLinks />
            </div>
            <div>
              <ColorThemeToggle />
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-8rem)] mt-[4rem] px-4 md:px-12">{children}</main>
        <footer className='h-[4rem] flex items-center justify-end px-4 md:px-12'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
