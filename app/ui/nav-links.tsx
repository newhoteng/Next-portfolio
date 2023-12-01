'use client'
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the header.
const links = [
  { name: 'Home', href: '/', imageSource: '/home.svg' },
  {
    name: 'Projects',
    href: '/projects',
    imageSource: '/home.svg'
  },
  { name: 'Contact', href: '/contact', imageSource: '/home.svg' },
];
// { name: 'About', href: '/about', imageSource: '/home.svg' },

const NavLinks = () => {
  return (
    <>
    {links.map((link) => {
      const { name, href, imageSource } = link;
      return (
        <NavLink
          key={name}
          name={name}
          href={href}
          imageSource={imageSource}
        />
      )
    })}
    </>
  )
}

const NavLink = ({ name, href, imageSource }: {
  name: string;
  href: string;
  imageSource: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className="animate-slideleft border-2 right-[-2rem] opacity-0 relative flex items-center justify-center gap-1" 
    >
      {/* <Image
        src={imageSource}
        alt=""
        // className="dark:invert"
        width={25}
        height={25}
        priority
      /> */}
      <p 
        className={clsx(
          "font-medium text-secondary md:text-xl relative",
          {
            'after:content-[""] after:h-1 after:w-full after:bg-accent after:absolute after:left-0 after:-bottom-1': pathname === href,
          },
        )}
      >
        {name}
      </p>
    </Link>
  )
}

export default NavLinks
