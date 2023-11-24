import React from 'react';
import Image from 'next/image';
import { lobster } from '@/app/ui/fonts';
import TextDetails from '@/app/ui/projects/text-details';

const metrics = {
  name: 'Metrics',
  color: '#fc5193',
  description: 'A web app that fetches and displays air quality data for selected cities from a third party RESTful API. A click on a city tile on the homepage directs users to the details page which lists the concentration of the various pollutants. It has a colour indicator feature that shows an air icon in a different colour depending on the current air quality index.',
  mobile: {
    'HOME PAGE': '/metrics/mobile-home.png',
    'POLLUTANTS PAGE': '/metrics/mobile-pollutants.png',
  },
  desktop: {
    'HOME PAGE': '/metrics/desktop-home.png',
    'POLLUTANTS PAGE': '/metrics/desktop-pollutants.png',
  },
  techs: ['React', 'Redux', 'JavaScript'],
  live: 'https://metrics-59av.onrender.com/',
  source: 'https://github.com/newhoteng/Metrics',
}

const Metrics = () => {
  const { name, color, description, techs, live, source, desktop } = metrics
  return (
    <section className='flex flex-col gap-12'>
      <div style={{backgroundColor: color}} className='flex items-center justify-center text-white w-full aspect-[4/3] rounded-3xl sm:h-[50vh] sm:aspect-auto sm:rounded-t-none'>
        <h1 style={lobster.style} className='text-4xl md:text-5xl tracking-widest'>{name}</h1>
      </div>
      <TextDetails name={name} description={description} techs={techs} live={live} source={source}/>
      <div>
        <h3 className='text-center font-medium mb-2'>HOMEPAGE</h3>
        <div className='relative'>
          <Image
            src={desktop['HOME PAGE']}
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
        <h3 className='text-center font-medium mb-2'>POLLUTANTS PAGE</h3>
        <div className='relative w-1/'>
          <Image
            src={metrics.desktop['POLLUTANTS PAGE']}
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
              src={metrics.mobile['HOME PAGE']}
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
              src={metrics.mobile['POLLUTANTS PAGE']}
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

export default Metrics
