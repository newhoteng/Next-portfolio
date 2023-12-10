import React from 'react';
import Image from 'next/image';
import TextDetails from '@/app/ui/projects/text-details';
import ProjectBanner from '@/app/ui/projects/project-banner';

const il = {
  name: 'Il Dashboard',
  // #272e71
  color: 'hsl(234, 49%, 30%)',
  description: 'A product details and edit pages of a dashboard, built as part of a Front-end design challenge for a job application',
  mobile: {
    'PRODUCT PAGE': '/il/product-mobile.png',
    'EDIT PAGE': '/il/edit-mobile.png',
  },
  desktop: {
    'PRODUCT PAGE': '/il/product-desktop.png',
    'EDIT PAGE': '/il/edit-desktop.png',
  },
  techs: ['React', 'Redux', 'JavaScript', 'RESTful API', 'Tailwind CSS'],
  live: 'https://innoloft-tmn0.onrender.com/product',
  source: 'https://github.com/newhoteng/il',
}

const Il = () => {
  const { color, name, description, techs, live, source } = il
  return (
    <section className='flex flex-col gap-12'>
      <ProjectBanner color={color} name={name} />
      <TextDetails name={name} description={description} techs={techs} live={live} source={source}/>
      <div>
        <h3 className='text-center font-medium mb-2'>PRODUCT PAGE</h3>
        <div className='relative'>
          <Image
            src={il.desktop['PRODUCT PAGE']}
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
        <h3 className='text-center font-medium mb-2'>EDIT PAGE (with rich text editor)</h3>
        <div className='relative w-1/'>
          <Image
            src={il.desktop['EDIT PAGE']}
            // fill
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
        <h3 className='text-center font-medium mb-2'>MOBILE VERSIONS</h3>
        <div className='flex items-cente justify-around'>
          <div className='relative w-1/3'>
            <Image
              src={il.mobile['PRODUCT PAGE']}
              width={0}
              height={0}
              sizes='100vw'
              className="w-full auto object-contain shadow-around dark:shadow-dark"
              alt=""
              priority
            />
          </div>
          <div className='relative w-1/3'>
            <Image
              src={il.mobile['EDIT PAGE']}
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

export default Il