import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

export const HomePageLink = ({ href, icon, text } :{ href:string; icon:JSX.Element; text:string}) => {
  return (
    <Link href={href} className='border-2 flex items-center justify-center gap-2'>
      <div className='text-accent'>
        {icon}
      </div>
      <p>{text}</p>
    </Link>
  )
}