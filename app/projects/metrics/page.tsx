import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const metrics = {
  name: 'metrics',
  description: 'A web app that fetches and displays air quality data for selected cities from a third party RESTful API. A click on a city tile on the homepage directs users to the details page which lists the concentration of the various pollutants. It has a colour indicator feature that shows an air icon in a different colour based on the current air quality index.',
  screenshots: {
    'HOME PAGE': '/metrics/homepage.png',
    'POLLUTANTS PAGE': '/metrics/pollutants.png',
  },
  techs: ['React', 'Redux', 'React Testing Library', 'React-Router', 'CSS Modules'],
  live: 'https://metrics-59av.onrender.com/',
  source: 'https://github.com/newhoteng/Metrics',
}

const Metrics = () => {
  return (
    <section className='border-2'>
      <div className='w-full bg-slate-400 aspect-[4/3] rounded-3xl'></div>
      <div>
        <h2 className='text-2xl font-semibold'>Metrics</h2>
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
      <div className='border-2 border-red-500 flex items-cente justify-around'>
        <div className='relative w-1/3'>
          <Image
            src={metrics.screenshots['HOME PAGE']}
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
            src={metrics.screenshots['POLLUTANTS PAGE']}
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
    </section>
  )
}

export default Metrics

{/* <div className='hidden border-2 h-1/3 items-center justify-center'>
  <div className='relative max-h-full w-full max-w-[800px] aspect-video rounded-2xl border-2 border-red-500'>
    <Image
      src={imgUrl}
      fill 
      alt='Picture of the project'
      className='rounded-2xl shadow-lg object-cover'
    />
  </div>
</div> */}