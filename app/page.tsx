import Image from 'next/image';
import Link from 'next/link';
import { HomePageLink } from './ui/home/links';
import { InterLinkIcon } from '@/public/link';

const links = [
  { text: 'view my projects', href: '/projects', icon: <InterLinkIcon /> },
  { text: 'more about me', href: '/about', icon: <InterLinkIcon /> },
];

export default function Home() {
  return (
    <section className="border-2 border-yellow-500 h-full flex items-center justify-center">
      <div className='text-center border-2'>
        <h1 className="border-2 text-4xl font-bold text-secondary mb-6">Hi, my name is <br className='md:hidden' />Harriet Oteng.</h1>
        <p className="border-2 mb-6">I'm a Full-stack Software Developer and SVG animation enthusiast from Ghana.</p>
        <div className='border-2 flex flex-col items-center justify-center gap-2.5 md:flex-row'>
          {links.map((link) => (
            <HomePageLink key={link.text} href={link.href} icon={link.icon} text={link.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

// font-bold text-5xl md:text-7xl text-primary
