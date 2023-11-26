import React from 'react';
import Image from 'next/image';
import { lobster } from '@/app/ui/fonts';
import TextDetails from '@/app/ui/projects/text-details';

const conference = {
  name: 'Conference',
  color: '#ec5242',
  description: 'A web page for a fictional Engineer’s Conference that provides relevant information to attendees and would-be attendees alike. It features a home and about page.',
  mobile: {
    'HOME PAGE': '/conference/home-mobile.png',
    'ABOUT PAGE': '/conference/about-mobile.png',
  },
  desktop: {
    'HOME PAGE': '/conference/home-desktop.png',
    'ABOUT PAGE': '/conference/about-desktop.png',
  },
  techs: ['JavaScript', 'HTML', 'CSS'],
  live: 'https://newhoteng.github.io/Capstone-1/',
  source: 'https://github.com/newhoteng/Capstone-1',
}

const Conference = () => {
  const { name, description, techs, live, source } = conference
  return (
    <section className='flex flex-col gap-12'>
      <div style={{backgroundColor: conference.color}} className='flex items-center justify-center text-white w-full aspect-[4/3] rounded-3xl sm:h-[50vh] sm:aspect-auto sm:rounded-t-none'>
        <h1 style={lobster.style} className='text-4xl md:text-5xl tracking-widest'>{conference.name}</h1>
      </div>
      <TextDetails name={name} description={description} techs={techs} live={live} source={source}/>
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