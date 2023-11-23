import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const metrics = {
  name: 'metrics',
  description: 'A web app that fetches and displays air quality data for selected cities from a third party RESTful API. A click on a city tile on the homepage directs users to the details page which lists the concentration of the various pollutants. It has a colour indicator feature that shows an air icon in a different colour based on the current air quality index.',
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
    <section className='border-2 flex flex-col gap-12'>
      <div className='flex items-center justify-center text-white w-full bg-[#fc5193] aspect-[4/3] rounded-3xl border-2 border-green-600'>
        <h1>METRICS</h1>
      </div>
      <div className='border-2 border-green-600'>
        <h2 className='text-2xl font-semibold'>METRICS</h2>
        <div className='border-2 flex gap-16'>
          <div>BUILT WITH</div>
          <div className='border-2 border-red-500 flex flex-col'>
            {metrics.techs.map((tech) => (
              <span className=''>{tech}</span>
            ))}
          </div>
        </div>
        <p>{metrics.description}</p>
        <div className='flex items-center justify-between'>
          <Link href={metrics.live} target='_blank'>
            <span>visit site</span>
          </Link>
          <Link href={metrics.source} target='_blank'>
            <span>see code</span>
          </Link>
        </div>
      </div>
      <div className='border-2 border-green-600'>
        <h3 className='text-center'>HOMEPAGE</h3>
        <div className='relative w-1/'>
          <Image
            src={metrics.desktop['HOME PAGE']}
            // fill
            width={0}
            height={0}
            sizes='100vw'
            className="w-full auto object-contain"
            alt=""
            priority
          />
        </div>
      </div>
      <div className='border-2 border-green-600'>
        <h3 className='text-center'>POLLUTANTS PAGE</h3>
        <div className='relative w-1/'>
          <Image
            src={metrics.desktop['POLLUTANTS PAGE']}
            // fill
            width={0}
            height={0}
            sizes='100vw'
            className="w-full auto object-contain"
            alt=""
            priority
          />
        </div>
      </div>
      <div className='border-2 border-green-600'>
        <h3 className='text-center font-bold'>MOBILE VERSION</h3>
        <div className='border-2 border-red-500 flex items-cente justify-around'>
          <div className='relative w-1/3'>
            <Image
              src={metrics.mobile['HOME PAGE']}
              // fill
              width={0}
              height={0}
              sizes='100vw'
              className="w-full auto object-contain"
              alt=""
              priority
            />
          </div>
          <div className='relative w-1/3'>
            <Image
              src={metrics.mobile['POLLUTANTS PAGE']}
              // fill
              width={0}
              height={0}
              sizes='100vw'
              className="w-full auto object-contain"
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
