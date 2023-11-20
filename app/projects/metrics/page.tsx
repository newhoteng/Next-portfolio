import React from 'react'

const metrics = {
  name: 'metrics',
  description: 'A web app that fetches and displays air quality data for selected cities from an API. A click on a city tile on the homepage directs users to the details page which lists the concentration of the various pollutants. It has a colour indicator feature that shows an air icon in a different colour based on the current air quality index.',
  screenshots: {
    'home page': '/metrics/homepage.png',
    'pollutants page': '/metrics/pollutants.png',
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
        <h2 className='text-2xl font-semibold text-center'>Metrics</h2>
        <div className='border-2 flex gap-5'>
          <div>BUILT WITH</div>
          <div className='border-2 border-red-500 flex flex-col'>
            {metrics.techs.map((tech) => (
              <span className=''>{tech}</span>
            ))}
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deserunt repudiandae, et nisi eaque omnis!</p>
        <div className='flex items-center gap-6'>
          <p>visit site</p>
          <p>see code</p>
        </div>
      </div>
      <div>
        Screenshots
      </div>
    </section>
  )
}

export default Metrics