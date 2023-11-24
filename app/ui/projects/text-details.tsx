import React from 'react';
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const TextDetails = ({ name, techs, description, live, source } : 
{ 
  name:string; techs: string[]; description: string; live: string; source: string
}) => {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-semibold uppercase'>{name}</h2>
      <div className='flex'>
        <div className='w-1/2 font-medium'>BUILT WITH</div>
        <div className='w-1/2 flex flex-col'>
          {techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
      <p>{description}</p>
      <div className='flex items-center justify-between'>
        <a className='flex items-center gap-2' rel="noopener noreferrer" href={live} target='_blank'>
          <HiOutlineArrowUpRight className="text-accent stroke-2"/>
          <span>visit site</span>
        </a>
        <a className='flex items-center gap-2' rel="noopener noreferrer" href={source} target='_blank'>
          <HiOutlineArrowUpRight className="text-accent stroke-2"/>
          <span>see code</span>
        </a>
      </div>
    </div>
  )
}

export default TextDetails