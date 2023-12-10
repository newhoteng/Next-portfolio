import React from 'react';
import Image from 'next/image';
import TextDetails from '@/app/ui/projects/text-details';
import ProjectBanner from '@/app/ui/projects/project-banner';

const todo = {
  name: 'ToDo',
  color: 'hsl(223, 8%, 36%)',
  description: 'A ‘To-do list’ app that allows users to add, check off, and delete daily tasks. It also has a drag-and-drop feature that facilitates the re-ordering of tasks.',
  mobile: {
    'PAGE': '/todo/mobile.png',
  },
  desktop: {
    'PAGE': '/todo/desktop.png',
  },
  techs: ['JavaScript', 'HTML', 'CSS', 'Local Storage', 'JEST'],
  live: 'https://newhoteng.github.io/To-do-list/',
  source: 'https://github.com/newhoteng/To-do-list',
}

const ToDo = () => {
  const { name, color, description, techs, live, source, desktop, mobile } = todo;

  return (
    <section className='flex flex-col gap-12'>
      <ProjectBanner color={color} name={name} />
      <TextDetails name={name} description={description} techs={techs} live={live} source={source}/>
      <div>
        <h3 className='text-center font-medium mb-2'>PAGE</h3>
        <div className='relative'>
          <Image
            src={desktop['PAGE']}
            width={0}
            height={0}
            sizes='100vw'
            className="w-full auto object-contain shadow-around dark:shadow-dark"
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
              className="w-full auto object-contain shadow-around dark:shadow-dark"
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