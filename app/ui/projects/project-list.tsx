import React from 'react';
import Link from 'next/link';

const ProjectList = ({ title, color, type, href } : 
  { 
    title:string; color:string; type: string ; href: string
  }) => {
  return (
    <Link href={href}>
      <div className='shadow-around flex items-center dark:bg-slate-700 bg-white p-4 rounded-md gap-4'>
        <div style={{backgroundColor: color}} className='w-10 h-10 rounded'></div>
        <div className='grow flex items-center justify-between'>
          <h3 className='font-semibold'>{title}</h3>
          {/* <p className='font-light text-sm'>{type}</p> */}
        </div>
      </div>
    </Link>
  )
}

export default ProjectList