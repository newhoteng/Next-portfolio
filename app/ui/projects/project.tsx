import React from 'react';
import { lobster } from '@/app/ui/fonts';
import Link from 'next/link';

const Project = ({ title, color, type, href } : 
  { 
    title:string; color:string; type: string ; href: string
  }) => {
  return (
    <div className='snap-always snap-start mb-[4rem] h-[calc(100vh-8rem)]'>
      <div style={{backgroundColor: color}} className={`flex items-center justify-center text-white w-full aspect-[4/3] rounded-3xl h-3/5`}>
        <p style={lobster.style} className="text-4xl tracking-widest">{title}</p>
      </div>
      <div className='flex items-center justify-center h-2/5'>
        <Link href={href} className='block'>
          <h2 className='border-2 text-2xl font-semibold'>{title}</h2>
          <p className='border-2 italic'>{type}</p>
        </Link>
      </div>
    </div>
  )
}

export default Project