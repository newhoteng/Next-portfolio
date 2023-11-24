import React from 'react';
import Image from 'next/image';
import { lobster } from '@/app/ui/fonts';
import TextDetails from '@/app/ui/projects/text-details';

const todo = {
  name: 'ToDo',
  color: '#545862',
  description: 'A ‘To-do list’ app that allows users to add, check off, and delete daily tasks. It also has a drag-and-drop feature that facilitates the re-ordering of tasks.',
  mobile: {
    'PAGE': '/todo/mobile.png',
  },
  desktop: {
    'PAGE': '/todo/desktop.png',
  },
  techs: ['JavaScript', 'HTML', 'CSS'],
  live: 'https://newhoteng.github.io/To-do-list/',
  source: 'https://github.com/newhoteng/To-do-list',
}

const ToDo = () => {
  const { name, color, description, techs, live, source, desktop, mobile } = todo;

  return (
    <section className='flex flex-col gap-12'>
      <div style={{backgroundColor: color}} className='flex items-center justify-center text-white w-full aspect-[4/3] rounded-3xl sm:h-[50vh] sm:aspect-auto sm:rounded-t-none'>
        <h1 style={lobster.style} className='text-4xl md:text-5xl tracking-widest'>{name}</h1>
      </div>
      <TextDetails name={name} description={description} techs={techs} live={live} source={source}/>
      <div>
        <h3 className='text-center font-medium mb-2'>PAGE</h3>
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
      <div className=''>
        <h3 className='text-center font-medium mb-2'>MOBILE VERSION</h3>
        <div className='flex items-cente justify-around'>
          <div className='relative w-1/3'>
            <Image
              src={mobile['PAGE']}
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

export default ToDo