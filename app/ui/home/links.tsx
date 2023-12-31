import React from 'react';
import Link from 'next/link';

export const HomePageLink = ({ href, icon, text } : { href:string; icon:JSX.Element; text:string }) => {
  return (
    <Link href={href} className='flex items-center justify-center gap-2'>
      <div className='text-accent'>
        {icon}
      </div>
      <p className='md:text-xl'>{text}</p>
    </Link>
  )
}