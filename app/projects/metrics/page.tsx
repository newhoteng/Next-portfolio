import React from 'react';
import Image from 'next/image';
import { lobster } from '@/app/ui/fonts';
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const metrics = {
  name: 'metrics',
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
  return (
    <section className='flex flex-col gap-12'>
      <div className='flex items-center justify-center text-white w-full bg-[#fc5193] aspect-[4/3] rounded-3xl'>
        <h1 style={lobster.style} className='text-4xl tracking-widest'>METRICS</h1>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold'>METRICS</h2>
        <div className='flex'>
          <div className='w-1/2 font-medium'>BUILT WITH</div>
          <div className='w-1/2 flex flex-col'>
            {metrics.techs.map((tech) => (
              <span className=''>{tech}</span>
            ))}
          </div>
        </div>
        <p>{metrics.description}</p>
        <div className='flex items-center justify-between'>
          <a className='flex items-center gap-2' rel="noopener noreferrer" href={metrics.live} target='_blank'>
            <HiOutlineArrowUpRight className="text-accent stroke-2"/>
            <span>visit site</span>
          </a>
          <a className='flex items-center gap-2' rel="noopener noreferrer" href={metrics.source} target='_blank'>
            <HiOutlineArrowUpRight className="text-accent stroke-2"/>
            <span>see code</span>
          </a>
        </div>
      </div>
      <div>
        <h3 className='text-center font-medium mb-2'>HOMEPAGE</h3>
        <div className='relative'>
          <Image
            src={metrics.desktop['HOME PAGE']}
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
