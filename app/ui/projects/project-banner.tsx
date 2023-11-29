import React from 'react';
import { lobster } from '@/app/ui/fonts';

const ProjectBanner = ({ color, name } : { color: string; name: string }) => {
  return (
    <div style={{backgroundColor: color}} className='py-6 flex items-center justify-center text-white w-full rounded-2xl sm:h-[50vh] sm:aspect-auto sm:rounded-t-none'>
      <h1 style={lobster.style} className='text-4xl md:text-5xl tracking-widest'>{name}</h1>
    </div>
  )
}

export default ProjectBanner