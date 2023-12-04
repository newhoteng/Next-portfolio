import { HomePageLink } from './ui/home/links';
import { HiOutlineArrowRight } from "react-icons/hi2";


const links = [
  { text: 'view my projects', href: '/projects', icon: <HiOutlineArrowRight className="stroke-2"/> },
];
// { text: 'more about me', href: '/about', icon: <ArrowLink/> },

export default function Home() {
  return (
    <section className="overflow-hidden h-[calc(100vh-8rem)] flex items-center justify-center">
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
