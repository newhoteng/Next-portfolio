import React from 'react';
import Image from 'next/image';
import TextDetails from '@/app/ui/projects/text-details';
import ProjectBanner from '@/app/ui/projects/project-banner';

const bookstore = {
  name: 'Bookstore',
  color: 'hsl(206, 100%, 50%)',
  description: 'A web application where users can add and remove books they are reading. The homepage displays a list of all added books. Data is stored and fetched from 3rd party API endpoints.',
  // mobile: {
  //   'PAGE': '/todo/mobile.png',
  // },
  desktop: {
    'PAGE': '/bookstore/bookstore-fullwidth.png',
  },
  techs: ['React', 'Redux', 'JavaScript', '3rd Party RESTful API', 'CSS Modules'],
  live: 'https://newhoteng.github.io/Bookstore/',
  source: 'https://github.com/newhoteng/Bookstore',
}

const Bookstore = () => {
  const { name, color, description, techs, live, source, desktop } = bookstore;
  return (
    <section className='flex flex-col gap-12'>
      <ProjectBanner color={color} name={name} />
      <TextDetails name={name} description={description} techs={techs} live={live} source={source}/>
      <div>
        <h3 className='text-center font-medium mb-2'>HOME PAGE</h3>
        <div className='relative'>
          <Image
            src={desktop['PAGE']}
            width={0}
            height={0}
            sizes='100vw'
            className="w-full auto object-contain shadow-around"
            alt=""
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Bookstore