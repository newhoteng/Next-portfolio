import { HomePageLink } from './ui/home/links';
import { ArrowLink } from '@/public/icons';

const links = [
  { text: 'view my projects', href: '/projects', icon: <ArrowLink /> },
];
// { text: 'more about me', href: '/about', icon: <ArrowLink/> },

export default function Home() {
  return (
    <section className="h-full flex items-center justify-center">
      <div className='text-center'>
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">Hello, my name is <br />Harriet Oteng.</h1>
        <p className="mb-4 md:text-xl">I&apos;m a Software Developer and SVG animation enthusiast from Ghana.</p>
        <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
          {links.map((link) => (
            <HomePageLink key={link.text} href={link.href} icon={link.icon} text={link.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
