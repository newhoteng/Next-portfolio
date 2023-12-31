import React from 'react';
import Image from 'next/image';
import TextDetails from '@/app/ui/projects/text-details';
import ProjectBanner from '@/app/ui/projects/project-banner';

const il = {
  name: 'Mechat',
  color: 'hsl(264, 100%, 61%)',
  description: 'An application that allows you to chat and decide with your future self. It features a toggle button to swith between current self and future self.',
  // mobile: {
  //   'REGISTRATION PAGE': '/mechat/registration_page.png',
  //   'LOG IN PAGE': '/mechat/login_page.png',
  //   'CHAT PAGE': '/mechat/login_page.png',
  // },
  desktop: {
    'REGISTRATION PAGE': '/mechat/registration_page.png',
    'LOG IN PAGE': '/mechat/login_page.png',
    'CHAT PAGE': '/mechat/chat_page.png',
  },
  techs: ['Nextjs with TypeScript', 'NextAuth', 'Zod', 'Tailwind CSS'],
  live: 'https://me-chat-two.vercel.app/chat',
  source: 'https://github.com/newhoteng/me-chat',
}

const Mechat = () => {
  const { color, name, description, techs, live, source } = il
  return (
    <section className='flex flex-col gap-12'>
      <ProjectBanner color={color} name={name} />
      <TextDetails name={name} description={description} techs={techs} live={live} source={source}/>

      <div className=''>
        <h3 className='text-center font-medium mb-2'>REGISTRATION PAGE</h3>
        <div className='md:w-1/2 mx-auto'>
          <Image
            src={il.desktop['REGISTRATION PAGE']}
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
        <h3 className='text-center font-medium mb-2'>LOG IN PAGE</h3>
        <div className='md:w-1/2 mx-auto'>
          <Image
            src={il.desktop['LOG IN PAGE']}
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
        <h3 className='text-center font-medium mb-2'>CHAT PAGE</h3>
        <div className='md:w-1/2 mx-auto'>
          <Image
            src={il.desktop['CHAT PAGE']}
            width={0}
            height={0}
            sizes='100vw'
            className="w-full auto object-contain shadow-around dark:shadow-dark"
            alt=""
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Mechat