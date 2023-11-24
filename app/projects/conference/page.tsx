import React from 'react';
import Image from 'next/image';
import { lobster } from '@/app/ui/fonts';
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const conference = {
  name: 'Conference',
  color: '#ec5242',
  description: 'A web page for a fictional Engineer’s Conference that provides relevant information to attendees and would-be attendees alike. It features a home and about page.',
  mobile: {
    'HOME PAGE': '/conference/Home-mobile-collapse.png',
    'ABOUT PAGE': '/conference/About-mobile.png',
  },
  desktop: {
    'HOME PAGE': '/conference/Home-desktop.png',
    'ABOUT PAGE': '/conference/About-desktop.png',
  },
  techs: ['JavaScript', 'HTML', 'CSS'],
  live: 'https://newhoteng.github.io/Capstone-1/',
  source: 'https://github.com/newhoteng/Capstone-1',
}

const Conference = () => {
  return (
    <section className='flex flex-col gap-12'>
      <div style={{backgroundColor: conference.color}} className='flex items-center justify-center text-white w-full aspect-[4/3] rounded-3xl sm:h-[50vh] sm:aspect-auto sm:rounded-t-none'>
        <h1 style={lobster.style} className='text-4xl md:text-5xl tracking-widest'>{conference.name}</h1>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold uppercase'>{conference.name}</h2>
        <div className='flex'>
          <div className='w-1/2 font-medium'>BUILT WITH</div>
          <div className='w-1/2 flex flex-col'>
            {conference.techs.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <p>{conference.description}</p>
        <div className='flex items-center justify-between'>
          <a className='flex items-center gap-2' rel="noopener noreferrer" href={conference.live} target='_blank'>
            <HiOutlineArrowUpRight className="text-accent stroke-2"/>
            <span>visit site</span>
          </a>
          <a className='flex items-center gap-2' rel="noopener noreferrer" href={conference.source} target='_blank'>
            <HiOutlineArrowUpRight className="text-accent stroke-2"/>
            <span>see code</span>
          </a>
        </div>
      </div>
      <div>
        <h3 className='text-center font-medium mb-2'>HOMEPAGE</h3>
        <div className='relative'>
          <Image
            src={conference.desktop['HOME PAGE']}
            width={0}
            height={0}
            sizes='100vw'
            className="w-full auto object-contain shadow-around"
            alt=""
            priority
          />
        </div>
      </div>
      <div className=''>
        <h3 className='text-center font-medium mb-2'>ABOUT PAGE</h3>
        <div className='relative w-1/'>
          <Image
            src={conference.desktop['ABOUT PAGE']}
            // fill
            width={0}
            height={0}
            sizes='100vw'
            className="w-full auto object-contain shadow-around"
            alt=""
            priority
          />
        </div>
      </div>
      <div className=''>
        <h3 className='text-center font-medium mb-2'>MOBILE VERSIONS</h3>
        <div className='flex items-cente justify-around'>
          <div className='relative w-1/3'>
            <Image
              src={conference.mobile['HOME PAGE']}
              width={0}
              height={0}
              sizes='100vw'
              className="w-full auto object-contain shadow-around"
              alt=""
              priority
            />
          </div>
          <div className='relative w-1/3'>
            <Image
              src={conference.mobile['ABOUT PAGE']}
              width={0}
              height={0}
              sizes='100vw'
              className="w-full auto object-contain shadow-around"
              alt=""
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Conference